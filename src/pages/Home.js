import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Catalog from '../components/Catalog';
import About from '../components/About';
import Features from '../components/Features';

export default function Home() {
  return (
    <>
    <header>
      <Navbar />
      <Hero />
    </header>
      <main>
        <About />
        <Features />
        <Catalog />
      </main>
      <Footer />
    </>
  )
}