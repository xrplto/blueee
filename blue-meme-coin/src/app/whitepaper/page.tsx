import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WhitepaperPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-900 text-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <header className="text-center mb-16 relative">
          <Link href="/" className="absolute left-0 top-0 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors">
            ← Back
          </Link>
          <Image src="/xrpl-blue.png" alt="XRPL BLUE Logo" width={100} height={100} className="mx-auto mb-6" />
          <h1 className="text-5xl font-extrabold mb-2">XRPL BLUE Whitepaper</h1>
          <h2 className="text-2xl font-light italic">The Blue Wave of the XRP Ledger</h2>
        </header>

        <nav className="mb-12 flex justify-center space-x-6 text-lg">
          <a href="#project-purpose" className="hover:text-blue-300 transition-colors">Project Purpose</a>
          <a href="#token-utility" className="hover:text-blue-300 transition-colors">Token Utility</a>
          <a href="#distribution" className="hover:text-blue-300 transition-colors">Distribution</a>
          <a href="#legal-disclaimer" className="hover:text-blue-300 transition-colors">Legal Disclaimer</a>
          <a href="#risks" className="hover:text-blue-300 transition-colors">Risks</a>
        </nav>

        <main className="space-y-16">
          <section id="project-purpose">
            <h2 className="text-3xl font-bold mb-6 border-b border-blue-400 pb-2">Project Purpose</h2>
            <p className="mb-4 leading-relaxed">XRPL BLUE is designed to be the pulse-pounding social catalyst and community-driven meme coin of the XRP Ledger, seamlessly woven into the fabric of the XRPL ecosystem as a high-octane utility token. Our mission is to skyrocket through the crypto stratosphere by expanding our ever-growing constellation of integrations across the XRPL universe!</p>
            <p className="leading-relaxed">For too long, the XRP Ledger has been associated primarily with traditional finance use cases. XRPL BLUE aims to bring a fresh, vibrant energy to the ecosystem, showcasing the network's potential for community-driven projects and decentralized applications.</p>
          </section>

          <section id="token-utility">
            <h2 className="text-3xl font-bold mb-6 border-b border-blue-400 pb-2">Token Utility</h2>
            <p className="mb-4 leading-relaxed">XRPL BLUE (ticker symbol BLUE) is a native cryptographically-secure fungible protocol token of the XRPL BLUE ecosystem. It is a transferable representation of attributed utility functions specified in the protocol/code of the XRPL BLUE ecosystem, designed to be used solely as an interoperable utility token thereon.</p>
            <p className="mb-4 leading-relaxed">BLUE is a functional multi-utility token which will be used as the medium of exchange between participants who interact within the ecosystem on the XRP Ledger. The goal of introducing BLUE is to provide a convenient and secure mode of payment and settlement between participants who interact within the ecosystem without any intermediaries such as centralized third party entities/institutions/credit.</p>
            <p className="leading-relaxed">It is important to note that BLUE is not, and not intended to be, a medium of exchange accepted by the public as payment for goods or services or for the discharge of a debt. BLUE does not in any way represent any shareholding, participation, right, title, or interest in the Company, the Distributor, their respective affiliates, or any other company, enterprise or undertaking.</p>
          </section>

          <section id="distribution">
            <h2 className="text-3xl font-bold mb-6 border-b border-blue-400 pb-2">Distribution</h2>
            <p className="mb-4 leading-relaxed">XRPL BLUE aims for a fair and wide distribution to ensure true community ownership. The total supply of 100 billion XRPL BLUE tokens will be distributed as follows:</p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>40% Community Airdrop: Distributed to active XRPL users, developers, and community members</li>
              <li>20% Ecosystem Development: Reserved for future partnerships, integrations, and ecosystem growth</li>
              <li>15% Team and Advisors: Subject to a 3-year linear vesting schedule</li>
              <li>10% Community Treasury: Controlled by XRPL BLUE DAO for community-driven initiatives</li>
              <li>10% Liquidity Provision: To ensure trading liquidity across decentralized exchanges</li>
              <li>5% Marketing and Awareness: For promoting XRPL BLUE and the wider XRPL ecosystem</li>
            </ul>
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

        <footer className="mt-16 text-center text-sm text-blue-200">
          <p><em>Disclaimer: This whitepaper is for informational purposes only and does not constitute financial advice. Please conduct your own research and consult with a financial advisor before making any investment decisions.</em></p>
        </footer>
      </div>
    </div>
  );
};

export default WhitepaperPage;
