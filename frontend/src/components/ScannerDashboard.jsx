import React, { useState } from 'react';
import { Link, QrCode, ShieldAlert, ShieldCheck, Search, UploadCloud } from 'lucide-react';

export default function ScannerDashboard() {
  const [activeTab, setActiveTab] = useState('url'); // 'url' or 'qr'
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(null);

  const handleScan = () => {
    const value = inputValue.trim();
    if (!value) return;

    let score = 82;
    let level = "Safe";
    let explanation = "No major warning signals were detected in this demo analysis.";
    
    const lower = value.toLowerCase();
    
    if(lower.includes("free")||lower.includes("prize")||lower.includes("login")||lower.includes("verify")||lower.includes("security-alert")||lower.startsWith("http://")){
      score = 18; 
      level = "Dangerous"; 
      explanation = "This demo flags urgency keywords, an unusual domain pattern or insecure HTTP as risk indicators. Verify the official domain before entering credentials.";
    }
    
    if(lower.includes("paypal-security")||lower.includes("account-verify")||lower.includes("bank-login")){
      score = 4; 
      level = "Malicious"; 
      explanation = "The URL resembles a credential-harvesting destination. Do not enter passwords, OTPs or payment details.";
    }
    
    if(lower.includes("google.com")||lower.includes("github.com")||lower.includes("microsoft.com")){
      score = 92; 
      level = "Safe"; 
      explanation = "The domain matches a well-known official domain in this frontend demo.";
    }

    setResult({ url: value, score, level, explanation });
  };

  const handleQrUpload = (e) => {
    if(e.target.files?.length) {
      setInputValue("https://secure-account-check.example.com");
      setActiveTab('url');
      setTimeout(handleScan, 500);
    }
  };

  const getScoreColor = (score) => {
    if (score > 70) return 'text-green-500 bg-green-500';
    if (score > 30) return 'text-yellow-500 bg-yellow-500';
    if (score > 10) return 'text-orange-500 bg-orange-500';
    return 'text-red-500 bg-red-500';
  };

  return (
    <section id="scanner" className="py-20 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        <div className="text-center mb-16">
          <span className="text-primary-600 dark:text-primary-400 font-bold tracking-wider text-sm uppercase mb-3 block">Security Scanner</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Check a link before you click.</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Paste a URL or use the QR scanner. This frontend demonstrates the TrustLens analysis experience.</p>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden">
          
          <div className="flex border-b border-slate-100 dark:border-slate-700">
            <button 
              onClick={() => setActiveTab('url')}
              className={`flex-1 flex items-center justify-center gap-2 py-5 font-bold text-sm transition-colors ${activeTab === 'url' ? 'text-primary-600 dark:text-primary-400 bg-primary-50/50 dark:bg-slate-700/50 border-b-2 border-primary-600 dark:border-primary-400' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700'}`}
            >
              <Link className="w-5 h-5" /> URL Scanner
            </button>
            <button 
              onClick={() => setActiveTab('qr')}
              className={`flex-1 flex items-center justify-center gap-2 py-5 font-bold text-sm transition-colors ${activeTab === 'qr' ? 'text-primary-600 dark:text-primary-400 bg-primary-50/50 dark:bg-slate-700/50 border-b-2 border-primary-600 dark:border-primary-400' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700'}`}
            >
              <QrCode className="w-5 h-5" /> QR Scanner
            </button>
          </div>

          <div className="p-6 md:p-10">
            {activeTab === 'url' ? (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Website URL</label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-slate-400" />
                      </div>
                      <input 
                        type="url" 
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleScan()}
                        placeholder="https://example.com" 
                        className="block w-full pl-11 pr-4 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none"
                      />
                    </div>
                    <button 
                      onClick={handleScan}
                      className="px-8 py-4 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-all shadow-md hover:shadow-lg hover:shadow-primary-600/20 whitespace-nowrap"
                    >
                      Analyze URL
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <span className="text-slate-500 font-medium">Try:</span>
                  {['https://google.com', 'http://paypal-security-alert.example', 'http://free-prize-login.example'].map(ex => (
                    <button 
                      key={ex}
                      onClick={() => { setInputValue(ex); }}
                      className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors font-medium border border-slate-200 dark:border-slate-600"
                    >
                      {ex.replace('https://','').replace('http://','')}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div 
                onClick={() => document.getElementById('qrFile').click()}
                className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-2xl p-12 text-center cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors flex flex-col items-center justify-center group"
              >
                <div className="w-16 h-16 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <UploadCloud className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Upload a QR code</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md mx-auto">
                  TrustLens extracts the hidden URL and runs the same security checks. Click to upload an image.
                </p>
                <input id="qrFile" type="file" accept="image/*" hidden onChange={handleQrUpload} />
              </div>
            )}

            {result && (
              <div className="mt-10 p-6 border border-slate-200 dark:border-slate-700 rounded-2xl bg-slate-50 dark:bg-slate-900 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                  <div className="mb-4 sm:mb-0 max-w-full">
                    <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1 block">Analysis Result</span>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white truncate max-w-md" title={result.url}>{result.url}</h4>
                  </div>
                  <div className={`text-4xl font-black ${getScoreColor(result.score).split(' ')[0]}`}>
                    {result.score}<span className="text-lg text-slate-400 font-medium">/100</span>
                  </div>
                </div>

                <div className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden mb-6">
                  <div 
                    className={`h-full rounded-full transition-all duration-1000 ${getScoreColor(result.score).split(' ')[1]}`} 
                    style={{ width: `${result.score}%` }}
                  ></div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  {result.score > 70 ? <ShieldCheck className="w-5 h-5 text-green-500" /> : <ShieldAlert className="w-5 h-5 text-red-500" />}
                  <span className={`font-bold text-lg ${getScoreColor(result.score).split(' ')[0]}`}>{result.level}</span>
                </div>

                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-medium">
                  {result.explanation}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-200 dark:border-slate-700 pt-6">
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block mb-1">URL Structure</span>
                    <span className={`font-bold ${result.score < 30 ? 'text-yellow-600 dark:text-yellow-500' : 'text-slate-900 dark:text-white'}`}>
                      {result.score < 30 ? 'Warning' : 'Passed'}
                    </span>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block mb-1">Reputation</span>
                    <span className={`font-bold ${result.score < 30 ? 'text-red-600 dark:text-red-500' : 'text-slate-900 dark:text-white'}`}>
                      {result.score < 30 ? 'Review' : 'Passed'}
                    </span>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block mb-1">Community Reports</span>
                    <span className={`font-bold ${result.score < 20 ? 'text-red-600 dark:text-red-500' : 'text-slate-900 dark:text-white'}`}>
                      {result.score < 20 ? 'Reported' : '0 reports'}
                    </span>
                  </div>
                </div>

                {result.score < 30 ? (
                  <div className="mt-6 p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800/30 rounded-xl flex gap-3">
                    <ShieldAlert className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm font-semibold text-orange-800 dark:text-orange-400">
                      Recommended action: Leave the page and use the official website directly.
                    </p>
                  </div>
                ) : (
                  <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/30 rounded-xl flex gap-3">
                    <ShieldCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm font-semibold text-green-800 dark:text-green-400">
                      Low-risk demo result. Always verify sensitive transactions independently.
                    </p>
                  </div>
                )}
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
