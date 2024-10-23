import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><Link href="#about">About</Link></li>
              <li><Link href="#features">Features</Link></li>
              <li><Link href="#roadmap">Roadmap</Link></li>
              <li><Link href="#team">Team</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Community</h3>
            <ul>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Telegram</a></li>
              <li><a href="#">Discord</a></li>
              <li><a href="#">Medium</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Legal</h3>
            <ul>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <p>&copy; 2023 BLUE Meme Coin. All rights reserved.</p>
      </div>
    </footer>
  )
}
