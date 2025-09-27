// src/components/ScrollIndicator.jsx
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator = () => {
  const indicatorRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide indicator after user starts scrolling
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Floating animation
    gsap.to(indicatorRef.current, {
      y: -10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      ref={indicatorRef}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40"
    >
      <div className="flex flex-col items-center text-green-600 bg-white bg-opacity-90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
        <span className="text-sm font-medium mb-1">Scroll to Explore</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </div>
  );
};

export default ScrollIndicator;