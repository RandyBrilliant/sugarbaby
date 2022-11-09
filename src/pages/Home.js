import {Helmet} from "react-helmet";

import Catalog from '../components/Catalog';
import Features from '../components/Features';
import Menu from '../components/Menu';
import Hero from '../components/Hero';
import TesterForm from '../components/TesterForm';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Sugarbaby | Medan</title>
        <meta
          name="description"
          content="It has been a long day, sometimes we feel tired and need a mood booster. Let Sugarbaby sweeten your mood, sweeten your day. A slice of cake a day, keeps the bad mood away. Serving you only heavenly sweetness. Let us fulfill your cravings with a dose of cute aegyo, because you are our ultimate sweet ones."
        />
      </Helmet>
      <Hero />
      <Features />
      <TesterForm />
      <Catalog />
      <Menu />
    </>
  )
}