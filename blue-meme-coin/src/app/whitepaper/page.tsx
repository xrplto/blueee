"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import './whitepaper.css'; // We'll create this file for the wave animation

const WhitepaperPage: React.FC = () => {
  const [bubbleText, setBubbleText] = useState("Hi, I'm BLUE");
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
      // New funny tweets about the BLUE Whitepaper
      "Just read the $BLUE Whitepaper! It's so good, I'm thinking of framing it next to my diploma! 🎓💙 #XRPLBLUE",
      "The $BLUE Whitepaper is like a love letter to my wallet! 💌💰 Who knew finance could be so romantic? #XRPLBLUE",
      "Breaking: $BLUE Whitepaper nominated for a Pulitzer Prize in the 'Most Entertaining Financial Document' category! 🏆💙 #XRPLBLUE",
      "I tried using the $BLUE Whitepaper as a bedtime story. Now my kids won't stop asking for 'token allocations'! 😴💙 #XRPLBLUE",
      "The $BLUE Whitepaper: 50% groundbreaking tokenomics, 50% meme magic, 100% reason to FOMO in! 🧙‍♂️💙 #XRPLBLUE",
      "Just finished the $BLUE Whitepaper. My brain is now as smooth as a freshly minted BLUE token! 🧠💙 #XRPLBLUE",
      "The $BLUE Whitepaper is so hot, I'm using it to keep warm this winter! 🔥📄 Who needs a fireplace when you have tokenomics? #XRPLBLUE",
      "Unpopular opinion: The $BLUE Whitepaper is better than Shakespeare. 'To HODL or not to HODL' is the real question! 🎭💙 #XRPLBLUE",
      "I showed the $BLUE Whitepaper to my cat. Now she's trying to buy the dip with her catnip savings! 🐱💰 #XRPLBLUE",
      "The $BLUE Whitepaper: Turning 'I don't understand crypto' into 'I'm a financial genius' since 2023! 🤓💙 #XRPLBLUE",
    ];
    const randomTweet = tweets[Math.floor(Math.random() * tweets.length)];
    const tweetText = encodeURIComponent(randomTweet);
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
        downloadLink.download = 'blue_square.png';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-900 text-blue-200 min-h-screen relative overflow-hidden">
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

      <div className="max-w-5xl mx-auto px-4 py-16 relative z-10">
        <header className="text-center mb-16 relative pt-12 sm:pt-0">
          <Link href="/" className="absolute left-0 top-0 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors">
            ← Back
          </Link>
          <div className="relative w-[200px] h-[200px] mx-auto mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg shadow-lg transform rotate-3"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-blue-600 rounded-lg shadow-lg transform -rotate-3"></div>
            <div className="absolute inset-0 bg-[#3B82F6] rounded-[20px]"></div>
            <canvas ref={canvasRef} width="400" height="400" className="hidden"></canvas>
            {/* New Tweet and Download buttons */}
            <div className="absolute bottom-2 right-2 flex space-x-2">
              <button
                onClick={handleTweet}
                className="bg-blue-200 text-blue-800 font-bold py-1 px-2 rounded-full hover:bg-blue-300 transition-colors text-xs"
              >
                Tweet 🔵
              </button>
              <button
                onClick={handleDownload}
                className="bg-green-200 text-green-800 font-bold py-1 px-2 rounded-full hover:bg-green-300 transition-colors text-xs"
              >
                Download 📥
              </button>
            </div>
          </div>
          <div className="absolute -top-6 -right-6 bg-yellow-400 text-blue-800 rounded-full p-2 transform rotate-12 shadow-lg">
            <p className="text-xs font-bold whitespace-nowrap">{bubbleText}</p>
          </div>
          <h1 className="text-5xl font-extrabold mb-2 text-white">XRPL BLUE Whitepaper</h1>
          <h2 className="text-2xl font-light italic">The Blue Wave of the XRP Ledger</h2>
        </header>

        <nav className="mb-12 flex flex-wrap justify-center gap-4 text-lg">
          <a href="#project-purpose" className="hover:text-white transition-colors bg-blue-700 bg-opacity-50 px-3 py-1 rounded-full">Project Purpose</a>
          <a href="#token-utility" className="hover:text-white transition-colors bg-blue-700 bg-opacity-50 px-3 py-1 rounded-full">Token Utility</a>
          <a href="#distribution" className="hover:text-white transition-colors bg-blue-700 bg-opacity-50 px-3 py-1 rounded-full">Distribution</a>
          <a href="#legal-disclaimer" className="hover:text-white transition-colors bg-blue-700 bg-opacity-50 px-3 py-1 rounded-full">Legal Disclaimer</a>
          <a href="#risks" className="hover:text-white transition-colors bg-blue-700 bg-opacity-50 px-3 py-1 rounded-full">Risks</a>
        </nav>

        <main className="space-y-16">
          <section id="project-purpose">
            <h2 className="text-3xl font-bold mb-6 border-b border-blue-400 pb-2">Project Purpose</h2>
            <p className="mb-4 leading-relaxed">XRPL BLUE is designed to be the pulse-pounding social catalyst and community-driven meme coin of the XRP Ledger, seamlessly woven into the fabric of the XRPL ecosystem as a high-octane utility token. Our mission is to skyrocket through the crypto stratosphere by expanding our ever-growing constellation of integrations across the XRPL universe!</p>
            <p className="leading-relaxed">For too long, the XRP Ledger has been associated primarily with traditional finance use cases. XRPL BLUE aims to bring a fresh, vibrant energy to the ecosystem, showcasing the network&apos;s potential for community-driven projects and decentralized applications.</p>
          </section>

          <section id="token-utility">
            <h2 className="text-3xl font-bold mb-6 border-b border-blue-400 pb-2">Token Utility</h2>
            <p className="mb-4 leading-relaxed">XRPL BLUE (ticker symbol BLUE) is a native cryptographically-secure fungible protocol token of the XRPL BLUE ecosystem. It is a transferable representation of attributed utility functions specified in the protocol/code of the XRPL BLUE ecosystem, designed to be used solely as an interoperable utility token thereon.</p>
            <p className="mb-4 leading-relaxed">BLUE is a functional multi-utility token which will be used as the medium of exchange between participants who interact within the ecosystem on the XRP Ledger. The goal of introducing BLUE is to provide a convenient and secure mode of payment and settlement between participants who interact within the ecosystem without any intermediaries such as centralized third party entities/institutions/credit.</p>
            <p className="leading-relaxed">It is important to note that BLUE is not, and not intended to be, a medium of exchange accepted by the public as payment for goods or services or for the discharge of a debt. BLUE does not in any way represent any shareholding, participation, right, title, or interest in the Company, the Distributor, their respective affiliates, or any other company, enterprise or undertaking.</p>
          </section>

          <section id="distribution">
            <h2 className="text-3xl font-bold mb-6 border-b border-blue-400 pb-2">Distribution</h2>
            <p className="mb-4 leading-relaxed">XRPL BLUE is committed to a fair launch, ensuring a community-focused approach from day one. The distribution of XRPL BLUE tokens will be as follows:</p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>90% Community Distribution: Bought at First Ledger and then distributed to NFT holders</li>
              <li>10% AMM Pool: Left in the Automated Market Maker pool to ensure liquidity and support the fair token launch</li>
            </ul>
            <p className="mt-4 leading-relaxed">This distribution model ensures that the vast majority of the token supply is in the hands of the community from the start, promoting decentralization and fair participation in the XRPL BLUE ecosystem. The 10% left in the AMM pool helps maintain liquidity and supports the fair launch mechanism, allowing for smoother trading and price discovery.</p>
          </section>

          <section id="legal-disclaimer">
            <h2 className="text-3xl font-bold mb-6 border-b border-blue-400 pb-2">Legal Disclaimer</h2>
            <p className="mb-4 leading-relaxed">PLEASE READ THIS SECTION AND THE FOLLOWING SECTIONS CAREFULLY AS THEY CONTAIN IMPORTANT INFORMATION. IF YOU ARE IN ANY DOUBT AS TO THE ACTION YOU SHOULD TAKE, YOU SHOULD CONSULT YOUR LEGAL, FINANCIAL, TAX OR OTHER PROFESSIONAL ADVISOR(S).</p>
            <p className="mb-4 leading-relaxed">The XRPL BLUE tokens are not intended to constitute securities in any jurisdiction. This Whitepaper does not constitute a prospectus or offer document of any sort and is not intended to constitute an offer of securities or a solicitation for investment in securities in any jurisdiction.</p>
            <p className="leading-relaxed">This Whitepaper does not constitute or form part of any opinion on any advice to sell, or any solicitation of any offer by the distributor/vendor of the XRPL BLUE tokens to purchase any XRPL BLUE tokens nor shall it or any part of it nor the fact of its presentation form the basis of, or be relied upon in connection with, any contract or investment decision.</p>
          </section>

          <section id="risks">
            <h2 className="text-3xl font-bold mb-6 border-b border-blue-400 pb-2">Risks</h2>
            <p className="mb-4 leading-relaxed">The XRPL BLUE ecosystem is currently in the initial development stages and there are a variety of unforeseeable risks. You acknowledge and agree that there are numerous risks associated with acquiring BLUE, holding BLUE, and using BLUE for participation in the XRPL BLUE ecosystem.</p>
            <p className="mb-4 leading-relaxed">In the worst scenario, this could lead to the loss of all or part of BLUE held. IF YOU DECIDE TO ACQUIRE BLUE OR PARTICIPATE IN THE XRPL BLUE ECOSYSTEM, YOU EXPRESSLY ACKNOWLEDGE, ACCEPT AND ASSUME THE FOLLOWING RISKS:</p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>Uncertain Regulations and Enforcement Actions</li>
              <li>Inadequate disclosure of information</li>
              <li>Loss of talent</li>
              <li>Failure to develop</li>
              <li>Security weaknesses</li>
              <li>Other risks</li>
            </ul>
          </section>
        </main>

        <footer className="mt-16 text-center text-sm">
          <p><em>Disclaimer: This whitepaper is for informational purposes only and does not constitute financial advice. Please conduct your own research and consult with a financial advisor before making any investment decisions.</em></p>
        </footer>
      </div>
    </div>
  );
};

export default WhitepaperPage;
