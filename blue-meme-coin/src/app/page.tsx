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
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const handleTweet = () => {
    const tweets = [
      "🟦 $BLUE to the moon! 🚀 The cutest meme coin on the XRP Ledger is taking off! 🌙 #XRPLBLUE",
      "Just aped into $BLUE! 🦍💙 This meme coin is going to change the game! 🎮💰 #XRPLBLUE",
      "🟦 $BLUE is the new green! 💙💹 #XRPLBLUE is pumping and I'm here for it! 📈",
      "Feeling $BLUE in the best way possible! 😎 #XRPLBLUE is the hottest meme coin on XRPL! 🔥",
      "Who needs gold when you have $BLUE? 💙 #XRPLBLUE is my ticket to financial freedom! 💸",
      "🟦 $BLUE skies ahead for #XRPLBLUE hodlers! ☁️💙 This meme coin is going stratospheric! 🛸",
      "Just filled my bags with $BLUE! 💼💙 Ready for this rocket ship to Uranus! 🚀🪐 #XRPLBLUE",
      "🟦 $BLUE to the moon and beyond! 🌙✨ The XRP Ledger's cutest astronaut is blasting off! #XRPLBLUE",
      "$BLUE wave incoming! 🌊💙 Surf's up on the XRP Ledger! 🏄‍♂️ #XRPLBLUE",
      "🟦 Forget diamond hands, I've got $BLUE hands now! 💎➡️💙 #XRPLBLUE to the moon! 🚀",
      "The future is $BLUE! 🔮💙 Watch #XRPLBLUE paint the crypto world in shades of awesome! 🎨",
      "🟦 $BLUE: Because every portfolio needs a splash of cuteness! 😍💙 #XRPLBLUE to the moon! 🌙",
      // New tweets added below
      "I'm not sad, I'm just $BLUE with excitement! 😄💙 #XRPLBLUE is making waves! 🌊",
      "🟦 $BLUE: The only coin that looks good with my Smurf costume! 🧙‍♂️💙 #XRPLBLUE",
      "Just convinced my grandma to buy $BLUE! She said it matches her hair! 👵💙 #XRPLBLUE",
      "🟦 $BLUE is so hot right now, I'm using it to toast my marshmallows! 🔥🍡 #XRPLBLUE",
      "I tried to buy the dip, but $BLUE only goes up! 📈💙 #XRPLBLUE to infinity and beyond! 🚀",
      "🟦 $BLUE: The official currency of Cookie Monster's dreams! 🍪💙 #XRPLBLUE nom nom nom!",
      // New tweets with lore characters
      "Just saw Brad 'Big Blue' Sailhouse surfing the $BLUE waves! 🏄‍♂️💙 This captain knows how to HODL! #XRPLBLUE",
      "David 'Deep Blue' Wavewartz just fixed a bug while scuba diving! 🐠💻 $BLUE runs deep! #XRPLBLUE",
      "Rumor has it, Arthur 'The Unseen Blue' Subbritto communicates only in $BLUE emojis! 👻💙 #XRPLBLUE",
      "Chris 'Blue Turbo' Larsplash just made $BLUE faster than his digital Porsche! 🏎️💨 #XRPLBLUE to the moon!",
      "Jed 'Blue Drift' McWhaleb left, but $BLUE keeps swimming! 🐳💙 Once BLUE, always BLUE! #XRPLBLUE",
      "The $BLUE crew is assembling! 🦸‍♂️🦸‍♀️ Who's your favorite BLUE legend? #XRPLBLUE",
      // New funny tweets with link
      "Just found out my mood ring turns $BLUE when I check my portfolio! 💍💙 Must be a good sign! 🚀 Learn more: https://xrpl.blue #XRPLBLUE",
      "Breaking: Scientists confirm $BLUE is the official color of financial freedom! 🧑‍🔬💙 Join the revolution: https://xrpl.blue #XRPLBLUE",
      "My therapist said I talk about $BLUE too much. So I got a new therapist! 🛋️💙 Find out why: https://xrpl.blue #XRPLBLUE",
      "I tried to paint the town red, but it came out $BLUE instead! 🎨💙 Best mistake ever! Discover more: https://xrpl.blue #XRPLBLUE",
      "Roses are red, violets are $BLUE, if you're not holding XRPL BLUE, what are you gonna do? 🌹💙 Get in now: https://xrpl.blue #XRPLBLUE",
      "I asked my magic 8 ball if $BLUE will moon. It turned blue and said 'Absolutely!' 🎱💙 See the future: https://xrpl.blue #XRPLBLUE",
    ];
    const randomTweet = tweets[Math.floor(Math.random() * tweets.length)];
    const tweetText = encodeURIComponent(randomTweet);
    const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
    window.open(tweetUrl, '_blank');
  };

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
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58-18 88-18 v44h-352z"
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

        <main className="flex-grow flex flex-col items-center justify-center p-4 text-center relative z-10">
          <div className="relative">
            <div className="relative w-64 h-64 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg shadow-lg transform rotate-3"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-blue-600 rounded-lg shadow-lg transform -rotate-3"></div>
              {/* New Tweet button */}
              <button
                onClick={handleTweet}
                className="absolute bottom-2 right-2 bg-blue-200 text-blue-800 font-bold py-1 px-3 rounded-full hover:bg-blue-300 transition-colors text-xs"
              >
                Tweet 🔵
              </button>
            </div>
            <div className="absolute -top-6 -right-6 bg-yellow-400 text-blue-800 rounded-full p-2 transform rotate-12 shadow-lg">
              <p className="text-xs font-bold whitespace-nowrap">{bubbleText}</p>
            </div>
          </div>
          <h1 className="text-3xl font-bold mt-6 mb-2 text-blue-200">BLUE</h1>
          <p className="text-lg mb-4 text-blue-200">The cutest meme coin on the XRP Ledger!</p>

          <div className="flex flex-wrap gap-2 justify-center">
            <button className="bg-blue-200 text-blue-800 font-bold py-1 px-4 rounded-full hover:bg-blue-300 transition-colors text-sm">
              Buy Now
            </button>
            <button
              className="bg-transparent border-2 border-blue-200 text-blue-200 font-bold py-1 px-4 rounded-full hover:bg-blue-200 hover:text-blue-800 transition-colors text-sm"
              onClick={() => setShowModal(true)}
            >
              Learn More
            </button>
            <a
              href="https://xrplblue.printful.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-blue-800 font-bold py-1 px-4 rounded-full hover:bg-yellow-300 transition-colors text-sm"
            >
              Shop Merch
            </a>
            <a
              href="https://t.me/xrplblue"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-800 text-blue-200 font-bold py-1 px-4 rounded-full hover:bg-blue-900 transition-colors text-sm"
            >
              Join Telegram
            </a>
          </div>

          <a
            href="/whitepaper"
            className="mt-2 text-blue-200 underline hover:text-yellow-400 transition-colors text-sm"
          >
            Read our Whitepaper
          </a>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
            <div className="bg-blue-800/50 p-4 rounded-lg backdrop-blur-sm">
              <h2 className="text-xl font-bold mb-1 text-blue-200">Fast</h2>
              <p className="text-blue-200 text-sm">Lightning-quick transactions on the XRP Ledger</p>
            </div>
            <div className="bg-blue-800/50 p-4 rounded-lg backdrop-blur-sm">
              <h2 className="text-xl font-bold mb-1 text-blue-200">Cute</h2>
              <p className="text-blue-200 text-sm">The most adorable mascot in the crypto world</p>
            </div>
            <div className="bg-blue-800/50 p-4 rounded-lg backdrop-blur-sm">
              <h2 className="text-xl font-bold mb-1 text-blue-200">Community</h2>
              <p className="text-blue-200 text-sm">Join our growing family of XRPL BLUE enthusiasts</p>
            </div>
          </div>
        </main>

        <section className="py-8 px-4 bg-blue-800/70 backdrop-blur-sm relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-blue-200">The Legend of $BLUE</h2>
            <p className="text-blue-200 mb-2 leading-relaxed text-sm">
              In the deep waters of the XRP Ledger, where $BLUE rules the currents, there&apos; s no shortage of legendary captains steering this digital ship. At the helm, you&apos; ve got Brad &ldquo;Big Blue&rdquo; Sailhouse, a man who could trade in a hurricane without losing his sea legs, and his trusty co-captain, David &ldquo;Deep Blue&rdquo; Wavewartz, the code-writing genius who can debug smart contracts while snorkeling.
            </p>
            <p className="text-blue-200 mb-2 leading-relaxed text-sm">
              Lurking in the shadows was Arthur &ldquo;The Unseen Blue&rdquo; Subbritto, a figure so mysterious that people say he communicates through blockchain ripples, never seen but always felt. Then, of course, there&apos; s Chris &ldquo;Blue Turbo&rdquo; Larsplash, who&apos; s more interested in speeding up transactions—and his digital Porsche—than anything else, always pushing for faster trades.
            </p>
            <p className="text-blue-200 mb-2 leading-relaxed text-sm">
              But let&apos; s not forget Jed &ldquo;Blue Drift&rdquo; McWhaleb, who made waves by charting his own course, sailing off to explore new oceans but leaving behind a legacy of tidal shifts in the ledger. Together, these characters turned $BLUE from a simple currency into a legendary treasure that flows through the decentralized seas, offering power, protection, and a lot of good-natured maritime banter!
            </p>
          </div>
        </section>

        <footer className="py-2 text-center text-xs text-blue-200 relative z-10">
          <p>&copy; 2023 XRPL BLUE. All rights reserved.</p>
          <div className="mt-1">
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
            <div className="bg-blue-800 text-blue-200 p-6 rounded-lg max-w-xl w-full">
              <h2 className="text-2xl font-bold mb-3">About XRPL BLUE</h2>
              <p className="mb-3 text-sm">
                BLUE IS THE PULSE-POUNDING SOCIAL CATALYST AND COMMUNITY-DRIVEN MEME COIN OF THE XRP LEDGER, SEAMLESSLY WOVEN INTO THE FABRIC OF THE XRPL ECOSYSTEM AS A HIGH-OCTANE UTILITY TOKEN. OUR MISSION? TO SKYROCKET THROUGH THE CRYPTO STRATOSPHERE BY EXPANDING OUR EVER-GROWING CONSTELLATION OF INTEGRATIONS ACROSS THE XRPL UNIVERSE!
              </p>
              <p className="mb-3 text-sm">
                We&apos;re committed to a fair launch, with 90% of the supply being bought at First Ledger and then distributed to NFT holders. This ensures a community-focused approach from day one.
              </p>
              <p className="mb-3 text-sm">
                Join our vibrant community and be part of the BLUE revolution in the XRP Ledger ecosystem!
              </p>
              <button
                className="bg-blue-200 text-blue-800 font-bold py-1 px-4 rounded-full hover:bg-blue-300 transition-colors text-sm"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

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
