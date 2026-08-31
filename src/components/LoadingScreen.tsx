"use client";

import React, { useEffect, useState } from 'react';

// Attempting to import quotes, but falling back to default if unavailable in data
import { quotes } from '@/data/portfolio';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [opacity, setOpacity] = useState(1);
  const [quoteIndex, setQuoteIndex] = useState(0);

  const defaultQuotes = [
    "Building the future, one line of code at a time.",
    "Design is not just what it looks like, it's how it works.",
    "Innovation distinguishes between a leader and a follower.",
    "The best way to predict the future is to invent it."
  ];

  useEffect(() => {
    const availableQuotes = (quotes && quotes.length > 0) ? quotes : defaultQuotes;
    setQuoteIndex(Math.floor(Math.random() * availableQuotes.length));

    const fadeOutTimer = setTimeout(() => {
      setOpacity(0);
    }, 2500);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3000); // Wait for transition

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  const displayQuote = (quotes && quotes.length > 0) ? quotes[quoteIndex] : defaultQuotes[quoteIndex];

  return (
    <div 
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0A0A0F] transition-opacity duration-500"
      style={{ opacity }}
    >
      <div className="relative w-32 h-32 mb-12">
        <div className="absolute inset-0 rounded-full blur-2xl animate-[spin_3s_linear_infinite]"
             style={{ background: 'conic-gradient(from 0deg, #00F0FF, #8B5CF6, #FF6B35, #00F0FF)' }}>
        </div>
        <div className="absolute inset-2 bg-[#0A0A0F] rounded-full z-10 flex items-center justify-center shadow-[inset_0_0_20px_rgba(0,240,255,0.2)]">
          <div className="w-12 h-12 rounded-full border-t-2 border-r-2 border-[#00F0FF] animate-spin"></div>
        </div>
      </div>

      <div className="max-w-md px-6 text-center z-10">
        <p className="text-xl italic text-gray-300 font-light tracking-wide">
          <span className="text-[#00F0FF] font-serif text-3xl mr-1">"</span>
          {displayQuote}
          <span className="text-[#8B5CF6] font-serif text-3xl ml-1">"</span>
        </p>
      </div>

      <div className="absolute bottom-12 flex space-x-3 z-10">
        <div className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse shadow-[0_0_8px_#00F0FF]"></div>
        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
