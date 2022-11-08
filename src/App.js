import { Routes, Route } from "react-router-dom";
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import {useState, useEffect} from 'react';



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

const loader = document.querySelector(".preloader");

const showLoader = () => loader.classList.remove("preloader");
const addClass = () => loader.classList.add("loader-hide");

const App = () => {
  const [isLoading, setLoading] = useState(true);

  function someRequest() { //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  } 

  useEffect(() => {
    someRequest().then(() => {
      const loaderElement = document.querySelector(".preloader");
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    });
  });
  
  if (isLoading) {
    return null;
  } else {
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
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:id" element={<Product />} /> 
            <Route path="*" element={<Error />} />
          </Routes>
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
      </ScrollToTop>
    )
  }

  
}

export default App;