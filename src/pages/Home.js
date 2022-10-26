import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Catalog from '../components/Catalog';
import About from '../components/About';
import Features from '../components/Features';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Avatar from '../assets/img/avatar.jpg';
import Catalog2 from '../components/Catalog2';

export default function Home() {
  return (
    <>
    <header>
      <Navbar />
      <Hero />
    </header>
      <main>
        <Catalog2 />
        <About />
        <Features />
        <Catalog />
      </main>
      <Footer />
      <FloatingWhatsApp
        phoneNumber="6288261306403"
        accountName="Sugarbaby.mdn"
        allowEsc
        allowClickAway
        notification
        notificationSound
        chatMessage={`Hello there! 🤝 \nHow can we help?`}
        avatar={Avatar}
        statusMessage={`Typically reply within 5 minutes`}
      />
    </>
  )
}