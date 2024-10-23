"use client";

import { useState, useEffect } from "react";
import Head from 'next/head';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [bubbleText, setBubbleText] = useState("Hi, I'm BLUE");

  useEffect(() => {
    const texts = [
      "Hi, I'm BLUE",
      "HYPE Airdrop",
      "Coming Soon!",
      "NFT holders",
      "BLUE to the moon!"
    ];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % texts.length;
      setBubbleText(texts[currentIndex]);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/xrpl-blue.png" />
      </Head>
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
              <use xlinkHref="#wave" x="48" y="0" fill="rgba(147, 197, 253, 0.7)" /> {/* blue-300 */}
              <use xlinkHref="#wave" x="48" y="3" fill="rgba(96, 165, 250, 0.5)" /> {/* blue-400 */}
              <use xlinkHref="#wave" x="48" y="5" fill="rgba(59, 130, 246, 0.3)" /> {/* blue-500 */}
              <use xlinkHref="#wave" x="48" y="7" fill="rgba(37, 99, 235, 0.1)" /> {/* blue-600 */}
            </g>
          </svg>
        </div>

        <main className="flex-grow flex flex-col items-center justify-center p-8 text-center relative z-10">
          <div className="relative">
            {/* Updated styling without the "B" letter */}
            <div className="relative w-80 h-80 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg shadow-lg transform rotate-3"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-blue-600 rounded-lg shadow-lg transform -rotate-3"></div>
            </div>
            {/* Updated animated bubble */}
            <div className="absolute -top-8 -right-8 bg-yellow-400 text-blue-800 rounded-full p-3 transform rotate-12 shadow-lg">
              <p className="text-sm font-bold whitespace-nowrap">{bubbleText}</p>
            </div>
          </div>
          <h1 className="text-4xl font-bold mt-10 mb-2 text-blue-200">BLUE</h1>
          <p className="text-xl mb-6 text-blue-200">The cutest meme coin on the XRP Ledger!</p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-blue-200 text-blue-800 font-bold py-2 px-6 rounded-full hover:bg-blue-300 transition-colors">
              Buy Now
            </button>
            <button
              className="bg-transparent border-2 border-blue-200 text-blue-200 font-bold py-2 px-6 rounded-full hover:bg-blue-200 hover:text-blue-800 transition-colors"
              onClick={() => setShowModal(true)}
            >
              Learn More
            </button>
            <a
              href="https://xrplblue.printful.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-blue-800 font-bold py-2 px-6 rounded-full hover:bg-yellow-300 transition-colors"
            >
              Shop Merch
            </a>
            <a
              href="https://t.me/xrplblue"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-800 text-blue-200 font-bold py-2 px-6 rounded-full hover:bg-blue-900 transition-colors"
            >
              Join Telegram
            </a>
          </div>

          {/* Update Whitepaper link here */}
          <a
            href="/whitepaper"
            className="mt-4 text-blue-200 underline hover:text-yellow-400 transition-colors"
          >
            Read our Whitepaper
          </a>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl">
            <div className="bg-blue-800/50 p-6 rounded-lg backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-2 text-blue-200">Fast</h2>
              <p className="text-blue-200">Lightning-quick transactions on the XRP Ledger</p>
            </div>
            <div className="bg-blue-800/50 p-6 rounded-lg backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-2 text-blue-200">Cute</h2>
              <p className="text-blue-200">The most adorable mascot in the crypto world</p>
            </div>
            <div className="bg-blue-800/50 p-6 rounded-lg backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-2 text-blue-200">Community</h2>
              <p className="text-blue-200">Join our growing family of XRPL BLUE enthusiasts</p>
            </div>
          </div>
        </main>

        <footer className="py-4 text-center text-sm text-blue-200 relative z-10">
          <p>&copy; 2023 XRPL BLUE. All rights reserved.</p>
          <div className="mt-2">
            <a
              href="https://x.com/xrplblue"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-200 hover:text-yellow-400 transition-colors"
            >
              Follow us on X
            </a>
          </div>
        </footer>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-blue-800 text-blue-200 p-8 rounded-lg max-w-2xl w-full">
              <h2 className="text-3xl font-bold mb-4">About XRPL BLUE</h2>
              <p className="mb-4">
                BLUE IS THE PULSE-POUNDING SOCIAL CATALYST AND COMMUNITY-DRIVEN MEME COIN OF THE XRP LEDGER, SEAMLESSLY WOVEN INTO THE FABRIC OF THE XRPL ECOSYSTEM AS A HIGH-OCTANE UTILITY TOKEN. OUR MISSION? TO SKYROCKET THROUGH THE CRYPTO STRATOSPHERE BY EXPANDING OUR EVER-GROWING CONSTELLATION OF INTEGRATIONS ACROSS THE XRPL UNIVERSE!
              </p>
              <p className="mb-4">
                We&apos;re committed to a fair launch, with 90% of the supply being bought at First Ledger and then distributed to NFT holders. This ensures a community-focused approach from day one.
              </p>
              <p className="mb-4">
                Join our vibrant community and be part of the BLUE revolution in the XRP Ledger ecosystem!
              </p>
              <button
                className="bg-blue-200 text-blue-800 font-bold py-2 px-6 rounded-full hover:bg-blue-300 transition-colors"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Add styles for wave animation */}
      <style jsx>{`
        @keyframes move-forever {
          0% { transform: translate3d(-90px, 0, 0); }
          100% { transform: translate3d(85px, 0, 0); }
        }
        .waves > use {
          animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
        }
        .waves > use:nth-child(1) { animation-delay: -2s; animation-duration: 7s; }
        .waves > use:nth-child(2) { animation-delay: -3s; animation-duration: 10s; }
        .waves > use:nth-child(3) { animation-delay: -4s; animation-duration: 13s; }
        .waves > use:nth-child(4) { animation-delay: -5s; animation-duration: 20s; }
      `}</style>
    </>
  );
}
