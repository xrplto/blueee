import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="container">
      <Image src="/xrpl-blue.png" alt="BLUE Logo" width={100} height={50} className="logo" />
      <ul>
        <li><Link href="#about">About</Link></li>
        <li><Link href="#features">Features</Link></li>
        <li><Link href="#roadmap">Roadmap</Link></li>
        <li><Link href="#team">Team</Link></li>
      </ul>
    </nav>
  )
}
