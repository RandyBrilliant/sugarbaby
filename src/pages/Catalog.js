import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { productList } from "../utils";

const Catalog = () => {
  return (
    <>
      <Helmet>
        <title>Catalog | Sugarbaby</title>
        <meta name="description" content="It has been a long day, sometimes we feel tired and need a mood booster. Let Sugarbaby sweeten your mood, sweeten your day. A slice of cake a day, keeps the bad mood away. Serving you only heavenly sweetness. Let us fulfill your cravings with a dose of cute aegyo, because you are our ultimate sweet ones." />
      </Helmet>
      <section id="menu"  className="px-4 py-16 mx-auto md:px-24 lg:px-8 lg:py-20">
        <section id="cake" className="lg:mt-20 mt-10">
          <h2 className="text-3xl font-extrabold text-center lg:text-5xl mb-5">Cake List</h2>
          <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-x-6 gap-y-12 w-full">
            {productList.filter(item => item.type === "cake").map(cake => (
              <section key={cake.id}>
                <Link to={cake.id} className="block h-auto rounded-lg shadow-lg bg-white overflow-hidden group">
                  <img src={cake.urls[0]} alt={cake.id} className="h-full w-full object-cover object-center group-hover:scale-125 transition duration-300" /> 
                </Link>
                <Link to={cake.id} className="block text-center mt-3">
                  <h4 className="font-bold text-lg mb-3">{cake.name}</h4>
                  <h6><span className="font-normal">Full Size:</span> Rp. {cake["full-price"].toLocaleString()}</h6>
                  <h6><span className="font-normal">Slice Size:</span> Rp. {cake["slice-price"].toLocaleString()}</h6>
                </Link>
              </section>
            ))}
          </div>
        </section>
        <section id="quiche" className="lg:mt-20 mt-10">
          <h2 className="text-3xl font-extrabold text-center lg:text-5xl mb-5">Quiche List</h2>
          <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-x-6 gap-y-12 w-full">
            {productList.filter(item => item.type === "quiche").map(cake => (
              <section key={cake.id}>
                <Link to={cake.id} className="block h-auto rounded-lg shadow-lg bg-white overflow-hidden group">
                  <img src={cake.urls[0]} alt={cake.id} className="h-full w-full object-cover object-center group-hover:scale-125 transition duration-300" /> 
                </Link>
                <Link to={cake.id} className="block text-center mt-3">
                  <h4 className="font-bold text-lg mb-3">{cake.name}</h4>
                  <h6><span className="font-normal">Full Size:</span> Rp. {cake["full-price"].toLocaleString()}</h6>
                  <h6><span className="font-normal">Slice Size:</span> Rp. {cake["slice-price"].toLocaleString()}</h6>
                </Link>
              </section>
            ))}
          </div>
        </section>
        <section id="bread" className="lg:mt-20 mt-10">
          <h2 className="text-3xl font-extrabold text-center lg:text-5xl mb-5">Bread List</h2>
          <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-x-6 gap-y-12 w-full">
            {productList.filter(item => item.type === "bread").map(cake => (
              <section key={cake.id}>
                <Link to={cake.id} className="block h-auto rounded-lg shadow-lg bg-white overflow-hidden group">
                  <img src={cake.urls[0]} alt={cake.id} className="h-full w-full object-cover object-center group-hover:scale-125 transition duration-300" />
                </Link>
                <Link to={cake.id} className="block text-center mt-3">
                  <h4 className="font-bold text-lg mb-3">{cake.name}</h4>
                  <h6>Rp. {cake["full-price"].toLocaleString()}</h6>
                </Link>
              </section>
            ))}
          </div>
        </section>
      </section>
    </>
  )
}

export default Catalog