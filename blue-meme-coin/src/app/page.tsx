"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Head from 'next/head';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [bubbleText, setBubbleText] = useState("HYPE Airdrop");

  useEffect(() => {
    const texts = [
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
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 text-white">
        <main className="flex-grow flex flex-col items-center justify-center p-8 text-center">
          <div className="relative">
            <Image
              src="/xrpl-blue.png"
              alt="XRPL BLUE mascot"
              width={200}
              height={200}
              priority
            />
            {/* Animated HYPE Airdrop bubble */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-blue-800 rounded-full p-3 transform rotate-12 shadow-lg">
              <p className="text-sm font-bold whitespace-nowrap">{bubbleText}</p>
            </div>
          </div>
          <h1 className="text-4xl font-bold mt-8 mb-2">XRPL BLUE</h1>
          <p className="text-xl mb-6">The cutest meme coin on the XRP Ledger!</p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white text-blue-600 font-bold py-2 px-6 rounded-full hover:bg-blue-100 transition-colors">
              Buy Now
            </button>
            <button
              className="bg-transparent border-2 border-white font-bold py-2 px-6 rounded-full hover:bg-white hover:text-blue-600 transition-colors"
              onClick={() => setShowModal(true)}
            >
              Learn More
            </button>
            <a
              href="https://xrplblue.printful.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-blue-600 font-bold py-2 px-6 rounded-full hover:bg-yellow-300 transition-colors"
            >
              Shop Merch
            </a>
          </div>

          {/* Update Whitepaper link here */}
          <a
            href="/whitepaper"
            className="mt-4 text-white underline hover:text-yellow-400 transition-colors"
          >
            Read our Whitepaper
          </a>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl">
            <div className="bg-white/20 p-6 rounded-lg backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-2">Fast</h2>
              <p>Lightning-quick transactions on the XRP Ledger</p>
            </div>
            <div className="bg-white/20 p-6 rounded-lg backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-2">Cute</h2>
              <p>The most adorable mascot in the crypto world</p>
            </div>
            <div className="bg-white/20 p-6 rounded-lg backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-2">Community</h2>
              <p>Join our growing family of XRPL BLUE enthusiasts</p>
            </div>
          </div>
        </main>

        <footer className="py-4 text-center text-sm">
          <p>&copy; 2023 XRPL BLUE. All rights reserved.</p>
        </footer>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white text-blue-600 p-8 rounded-lg max-w-2xl w-full">
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
                className="bg-blue-600 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-700 transition-colors"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
