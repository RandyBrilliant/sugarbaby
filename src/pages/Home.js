import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Catalog from '../components/Catalog';
import Features from '../components/Features';
import About from '../components/About';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Avatar from '../assets/img/avatar.jpg';
import Menu from '../components/Menu';
import TesterForm from '../components/TesterForm';

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
        <TesterForm />
        <Catalog />
        <Menu />
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