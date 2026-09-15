# TrustLens

**SCAN. DETECT. PROTECT.**

TrustLens is an AI-powered malicious and phishing URL detection platform, made up of a browser extension and a web application. It analyzes URLs in real time, computes a multi-factor risk score, explains threats in plain language using AI, and lets a community of users report and track emerging scams together.

![License](https://img.shields.io/badge/license-Apache2.0-blue.svg)
![Status](https://img.shields.io/badge/status-in%20development-yellow.svg)
![Made with](https://img.shields.io/badge/made%20with-React%20%7C%20Node.js%20%7C%20Python-0B2027.svg)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Overview](#api-overview)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [References](#references)

---

## Overview

TrustLens addresses the growing problem of phishing, malicious URLs, quishing, and impersonation scams by combining:

- **Real-time detection** in the browser, before a user ever submits sensitive data
- **Explainable AI**, so users understand _why_ a site is risky, not just that it's blocked
- **Community intelligence**, so one user's discovery protects everyone else within minutes

The project ships as two connected surfaces:

| Surface               | Description                                                                                                                                   |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| **Browser Extension** | Real-time traffic-light safety indicator + an in-browser AI chatbot for asking about the current page                                         |
| **Web Application**   | Risk-score dashboard, QR code scanning, safe-alternative suggestions, AI threat explanations, scam reporting, and a threat-hunter leaderboard |

---

## Features

### Browser Extension

- **Real-Time Safety Traffic Light** - Shows a green, amber, or red safety indicator for the current website.
- **Ask the Website Chatbot** - Uses the Google Gemini API with the current page's structured risk context so users can ask why a site was flagged or what a detected signal means.

### Website

- **Risk Score - One Click, Multiple Checks** - Combines SSL/TLS, domain information, threat-feed matches, lexical/ML analysis, and redirect inspection into a single 0–100 risk score.
- **QR Upload Scanning** - Upload a QR code image, decode its embedded URL, and scan it through the same Risk Engine to help detect quishing scams.
- **Suggest Alternate Safe Website** - When a suspicious site appears to imitate a known brand, TrustLens can suggest the verified official domain where applicable.
- **AI Explanation of Threats** - Gemini converts structured security evidence into a concise, human-readable explanation without making the underlying maliciousness verdict itself.

### Community

- **Report a Scam** - Authenticated users can submit suspicious URLs and supporting evidence. Reports are rate-limited, deduplicated, and moderated before being used as community intelligence.
- **Threat Hunter Leaderboard** - Users earn points for useful, verified scam reports and can be ranked on a cached leaderboard.

---

## Architecture

```text
                         TRUSTLENS
                            │
              ┌─────────────┴─────────────┐
              ↓                           ↓
      Browser Extension            Web Application
       Manifest V3, TS/JS          React + Vite
              │                           │
              └─────────────┬─────────────┘
                            ↓
                   Node.js + Express
                      API Gateway
                            │
          ┌─────────────────┼─────────────────┐
          ↓                 ↓                 ↓
     Risk Engine        Gemini AI       Threat Intelligence
   Python + FastAPI    Chatbot +        Google Safe Browsing
   scikit-learn +      explanations     PhishTank
   XGBoost                              OpenPhish
          │                 │                 │
          └─────────────────┼─────────────────┘
                            ↓
                       Risk Result
                            │
                   ┌────────┴────────┐
                   ↓                 ↓
                 MySQL             Redis
       Users, Reports,         Fast URL-result
       Leaderboard, Logs          cache
                   │
                   ↓
           Community Module
       Reports + Threat Hunters
                            │
                            ↓
                         Replit
                       Deployment
```

**Important AI design principle:** Gemini does not decide whether a URL is malicious. The Risk Engine and threat-intelligence checks produce the security signals, score, and verdict. Gemini receives that structured evidence and turns it into a clear explanation or chatbot response.

**Request flow:** A URL from the extension, a pasted link, or a decoded QR code is sent to the API Gateway. The gateway coordinates the Risk Engine and threat-intelligence checks, merges their signals into a 0–100 risk score, and returns a **Safe / Caution / Danger** verdict. Gemini can then explain the detected signals in plain language. Results can be cached in Redis and persistent application data is stored in MySQL. Moderated community reports contribute to the project's threat intelligence and future model improvement.

---

## Tech Stack

**Browser Extension**

- Manifest V3
- JavaScript / TypeScript
- React + Tailwind CSS (popup UI)
- Chrome Storage API
- Background service worker + content scripts

**Website Front-End**

- React.js + Vite
- Tailwind CSS
- Chart.js (risk visualizations)
- Axios / React Query

**Back-End & AI**

- Node.js (Express) - API Gateway
- Python (FastAPI) - Risk Engine microservice
- scikit-learn / XGBoost - URL classification
- Google Gemini API (Free Tier) - chatbot & AI threat explanations
- OpenCV + pyzbar - QR code decoding

**Threat Intelligence**

- Google Safe Browsing
- PhishTank
- OpenPhish
- WHOIS / domain information

**Data & Infrastructure**

- MySQL - users, reports, leaderboard, threat logs
- Redis - fast caching of repeat URL lookups
- Docker - containerization
- Replit - deployment
- JWT + OAuth2 - authentication

---

## Project Structure

```
trustlens/
├── extension/              # Browser extension (Manifest V3)
│   ├── background/         # Background service worker
│   ├── content/            # Content scripts (traffic-light overlay)
│   ├── popup/              # React popup UI + chatbot
│   └── manifest.json
├── web/                    # Website front-end (React + Vite)
│   ├── src/
│   │   ├── pages/          # Dashboard, Report, Leaderboard, QR Scan
│   │   ├── components/
│   │   └── services/       # API clients
│   └── vite.config.js
├── server/                 # API Gateway (Node.js / Express)
│   ├── routes/
│   ├── middleware/         # Auth, rate limiting
│   └── index.js
├── risk-engine/             # Python FastAPI ML microservice
│   ├── models/              # Trained classifiers
│   ├── checks/              # SSL, WHOIS, blacklist, lexical analysis
│   └── main.py
├── docs/                    # Architecture notes, diagrams
├── docker-compose.yml
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- Python 3.10+
- MySQL 8+
- Redis
- A Google Gemini API key (Google AI Studio)

### 1. Clone the repository

```bash
git clone https://github.com/KalpeshM13/TrustLens.git
cd TrustLens
```

### 2. Set up the API Gateway

```bash
cd server
npm install
cp .env.example .env   # fill in your values, see below
npm run dev
```

### 3. Set up the Risk Engine (Python)

```bash
cd risk-engine
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

### 4. Set up the Website

```bash
cd web
npm install
npm run dev
```

### 5. Load the Browser Extension

1. Run `npm run build` inside `extension/`
2. Open `chrome://extensions`
3. Enable **Developer mode**
4. Click **Load unpacked** and select the `extension/dist` folder

### Optional: run everything with Docker

```bash
docker-compose up --build
```

---

## Environment Variables

Create a `.env` file in `server/` (see `.env.example`) with values such as:

```env
PORT=5000
DATABASE_URL=mysql://user:password@localhost:3306/trustlens
REDIS_URL=redis://localhost:6379
GEMINI_API_KEY=your_gemini_api_key
JWT_SECRET=your_jwt_secret
GOOGLE_SAFE_BROWSING_API_KEY=your_key
```

> Never commit real API keys or secrets. `.env` is included in `.gitignore`.

---

## API Overview

| Endpoint                               | Method | Description                                             |
| -------------------------------------- | ------ | ------------------------------------------------------- |
| `/api/scan`                            | `POST` | Submit a URL for risk analysis, returns score + verdict |
| `/api/scan/qr`                         | `POST` | Upload a QR code image for scanning                     |
| `/api/chat`                            | `POST` | Ask the AI chatbot about a specific URL/page            |
| `/api/reports`                         | `POST` | Submit a scam report (requires auth)                    |
| `/api/reports`                         | `GET`  | List community-reported URLs                            |
| `/api/leaderboard`                     | `GET`  | Fetch the threat-hunter leaderboard                     |
| `/api/auth/signup` / `/api/auth/login` | `POST` | User authentication                                     |

Full API documentation lives in [`docs/api.md`](docs/api.md).

---

## Roadmap

- [ ] Deepfake & scam-image detection for social media links
- [ ] Enterprise API for email gateways & SOC integration
- [ ] Multilingual AI explanations
- [ ] Federated threat-intel sharing with other security vendors
- [ ] Browser-agnostic support (Safari, mobile browsers)

---

## Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m "Add your feature"`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

Please open an issue first for major changes to discuss what you'd like to change.

---

## License

This project is licensed under the [Apache 2.0 License](LICENSE).

---

## References

- [Anti-Phishing Working Group (APWG)](https://apwg.org) - Phishing Activity Trends Reports
- [Google Safe Browsing](https://safebrowsing.google.com) - Threat detection and site safety
- [PhishTank](https://phishtank.org) - Community phishing database
- [OpenPhish](https://openphish.com) - Phishing intelligence feed
- [Google Gemini API Documentation](https://ai.google.dev/gemini-api/docs) - Gemini API and SDK documentation
- [Chrome Extensions - Manifest V3](https://developer.chrome.com/docs/extensions)
- [OWASP - Phishing & Social Engineering](https://owasp.org)
