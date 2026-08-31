"use client";

import React, { useState, useEffect } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = totalScroll / windowHeight;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Init
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="hidden md:block fixed right-0 top-0 h-full w-[3px] bg-[var(--border-color)] z-[60]">
      <div 
        className="w-full bg-gradient-to-b from-[#00F0FF] via-[#8B5CF6] to-[#FF6B35]"
        style={{ 
          height: '100%',
          transformOrigin: 'top',
          transform: `scaleY(${scrollProgress})`,
          transition: 'transform 0.1s ease-out'
        }}
      />
    </div>
  );
};

export default ScrollProgress;
