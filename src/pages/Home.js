import Catalog from '../components/Catalog';
import Features from '../components/Features';
import Menu from '../components/Menu';
import Hero from '../components/Hero';
import TesterForm from '../components/TesterForm';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <TesterForm />
      <Catalog />
      <Menu />
    </>
  )
}