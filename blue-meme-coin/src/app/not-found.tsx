"use client";

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import './not-found.css';

export default function NotFound() {
  const [bubbleText, setBubbleText] = useState("404 Not Found");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const texts = [
      "404 Not Found",
      "Oops!",
      "Where am I?",
      "Lost in BLUE",
      "Page MIA"
    ];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % texts.length;
      setBubbleText(texts[currentIndex]);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const handleTweet = () => {
    const tweetText = encodeURIComponent("I got lost in the BLUE world, but it's so beautiful here! 💙 #XRPLBLUE #404NotFound");
    const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
    window.open(tweetUrl, '_blank');
  };

  const handleDownload = () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Create gradient
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, '#60A5FA');  // blue-400
        gradient.addColorStop(1, '#2563EB');  // blue-600

        // Set up rounded rectangle
        const width = 400;
        const height = 400;
        const radius = 40;

        // Draw rounded rectangle with gradient
        ctx.beginPath();
        ctx.moveTo(radius, 0);
        ctx.arcTo(width, 0, width, height, radius);
        ctx.arcTo(width, height, 0, height, radius);
        ctx.arcTo(0, height, 0, 0, radius);
        ctx.arcTo(0, 0, width, 0, radius);
        ctx.closePath();

        ctx.fillStyle = gradient;
        ctx.fill();

        // Convert canvas to PNG
        const dataUrl = canvas.toDataURL('image/png');
        const downloadLink = document.createElement('a');
        downloadLink.href = dataUrl;
        downloadLink.download = 'blue_square_404.png';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 text-blue-200 relative overflow-hidden">
      {/* Wave-like background */}
      <div className="absolute inset-0 z-0">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="waves">
            <use xlinkHref="#wave" x="48" y="0" fill="rgba(147, 197, 253, 0.7)" />
            <use xlinkHref="#wave" x="48" y="3" fill="rgba(96, 165, 250, 0.5)" />
            <use xlinkHref="#wave" x="48" y="5" fill="rgba(59, 130, 246, 0.3)" />
            <use xlinkHref="#wave" x="48" y="7" fill="rgba(37, 99, 235, 0.1)" />
          </g>
        </svg>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen relative z-10">
        <h1 className="text-4xl font-bold text-blue-200 mb-8">It&apos;s a BLUE World</h1>
        
        <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] flex items-center justify-center mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg shadow-lg transform rotate-3"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-blue-600 rounded-lg shadow-lg transform -rotate-3"></div>
          <canvas ref={canvasRef} width="400" height="400" className="hidden"></canvas>
          <div className="w-full h-full bg-[#3B82F6] rounded-[40px]"></div>
          <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 flex space-x-2">
            <button
              onClick={handleTweet}
              className="bg-blue-200 text-blue-800 font-bold py-1 px-2 sm:py-2 sm:px-4 rounded-full hover:bg-blue-300 transition-colors text-xs sm:text-sm"
            >
              Tweet 🔵
            </button>
            <button
              onClick={handleDownload}
              className="bg-green-200 text-green-800 font-bold py-1 px-2 sm:py-2 sm:px-4 rounded-full hover:bg-green-300 transition-colors text-xs sm:text-sm"
            >
              Download 📥
            </button>
          </div>
          <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 bg-yellow-400 text-blue-800 rounded-full p-2 sm:p-3 transform rotate-12 shadow-lg">
            <p className="text-xs sm:text-sm font-bold whitespace-nowrap">{bubbleText}</p>
          </div>
        </div>

        <p className="mt-8 text-xl text-blue-200">Oops! Page not found.</p>
        <Link href="/" className="mt-4 px-6 py-2 bg-blue-200 text-blue-800 font-bold rounded-full hover:bg-blue-300 transition-colors">
          Go Home
        </Link>
      </div>
    </div>
  );
}
