import { Routes, Route } from "react-router-dom";
import { FloatingWhatsApp } from 'react-floating-whatsapp';

import Avatar from './assets/img/avatar.jpg';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Error from './pages/Error';
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Catalog from "./pages/Catalog";
import Product from "./pages/Product";
import Privacy from "./pages/Privacy";

const App = () => {
  return (
    <ScrollToTop>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<Product />} /> 
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp
        phoneNumber="628116541131"
        accountName="Sugarbaby"
        allowEsc
        allowClickAway
        notification
        notificationSound
        chatMessage={`Hello there! 🤝 \nHow can we help?`}
        avatar={Avatar}
        statusMessage={`Typically reply within 5 minutes`}
      />
    </ScrollToTop>
  )
}

export default App;