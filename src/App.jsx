// src/App.jsx
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './Components/Header';
import Intro from './Components/Intro';
import Problem from './Components/Problem';
import Solution from './Components/Solution';
import Benefits from './Components/Benefits';
import CTA from './Components/CTA';
import Footer from './Components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize GSAP
    gsap.config({
      force3D: true
    });

    // Smooth scrolling for anchor links
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Add click listeners to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Intro />
        <Problem />
        <Solution />
        <Benefits />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;