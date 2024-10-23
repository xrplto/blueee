import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faPalette, faLaughBeam, faUsers } from '@fortawesome/free-solid-svg-icons'

export default function Features() {
  return (
    <section id="features">
      <h2>Features</h2>
      <div className="feature-grid">
        <div className="feature-item">
          <FontAwesomeIcon icon={faBolt} />
          <h3>Built on XRP Ledger</h3>
          <p>Leverage the speed and efficiency of the XRP Ledger.</p>
        </div>
        <div className="feature-item">
          <FontAwesomeIcon icon={faPalette} />
          <h3>100% Blue</h3>
          <p>Embrace the power of blue in every aspect of our ecosystem.</p>
        </div>
        <div className="feature-item">
          <FontAwesomeIcon icon={faLaughBeam} />
          <h3>Meme-powered</h3>
          <p>Harness the viral nature of memes for explosive growth.</p>
        </div>
        <div className="feature-item">
          <FontAwesomeIcon icon={faUsers} />
          <h3>Community-driven</h3>
          <p>Shape the future of BLUE with our passionate community.</p>
        </div>
      </div>
    </section>
  )
}
