import Head from 'next/head'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import About from '../components/About'
import Features from '../components/Features'
import Roadmap from '../components/Roadmap'
import Team from '../components/Team'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>BLUE - The XRP Ledger Meme Coin</title>
        <meta name="description" content="The Ultimate XRP Ledger Meme Coin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <main className="container">
        <About />
        <Features />
        <Roadmap />
        <Team />
        <CTA />
      </main>
    </Layout>
  )
}
