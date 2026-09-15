import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import BrowserExtension from '../components/BrowserExtension';
import Community from '../components/Community';
import AboutRoadmap from '../components/AboutRoadmap';

export default function LandingPage() {
  return (
    <>
      <Hero />
      <BrowserExtension />
      <Features />
      <Community />
      <AboutRoadmap />
    </>
  );
}
