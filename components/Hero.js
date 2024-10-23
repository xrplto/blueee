import Image from 'next/image'

export default function Hero() {
  return (
    <header className="hero">
      <div className="container">
        <Image src="/xrpl-blue.png" alt="BLUE Mascot" width={100} height={100} className="mascot" />
        <h1>BLUE</h1>
        <p>The Ultimate XRP Ledger Meme Coin</p>
        <a href="#" className="cta-button">Get Started</a>
      </div>
    </header>
  )
}
