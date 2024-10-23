import Image from 'next/image'

export default function Team() {
  return (
    <section id="team">
      <h2>Our Team</h2>
      <div className="team-grid">
        <div className="team-member">
          <Image src="/placeholder-avatar.jpg" alt="Team Member 1" width={200} height={200} />
          <h3>John Doe</h3>
          <p>Founder & CEO</p>
        </div>
        <div className="team-member">
          <Image src="/placeholder-avatar.jpg" alt="Team Member 2" width={200} height={200} />
          <h3>Jane Smith</h3>
          <p>CTO</p>
        </div>
        <div className="team-member">
          <Image src="/placeholder-avatar.jpg" alt="Team Member 3" width={200} height={200} />
          <h3>Mike Johnson</h3>
          <p>Head of Marketing</p>
        </div>
      </div>
    </section>
  )
}
