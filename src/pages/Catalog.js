import { cakeList, quicheList, breadList } from "../utils";
import { Link } from "react-router-dom";

const Catalog = () => {
  return (
    <section id="menu"  className="px-4 py-16 mx-auto md:px-24 lg:px-8 lg:py-20">
      <section id="cake" className="lg:mt-20 mt-10">
        <h2 className="text-3xl font-extrabold text-center lg:text-5xl mb-5">Cake List</h2>
        <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-x-6 gap-y-12 w-full">
          {cakeList.map(cake => (
            <section key={cake.id}>
              <Link to={cake.id} className="block h-auto rounded-lg shadow-lg bg-white overflow-hidden group">
                <img src={cake.urls} alt={cake.id} className="h-full w-full object-cover object-center group-hover:scale-125 transition duration-300" /> 
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
          <section>
            <Link to='quiche' className="block h-auto rounded-lg shadow-lg bg-white overflow-hidden group">
              <img src={quicheList.urls} alt={quicheList.id} className="h-full w-full object-cover object-center group-hover:scale-125 transition duration-300" />
            </Link>
            <Link to='quiche' className="block text-center mt-3">
              <h4 className="font-bold text-lg mb-3">{quicheList.name}</h4>
              <h6><span className="font-normal">Full Size:</span> Rp. {quicheList["full-price"].toLocaleString()}</h6>
              <h6><span className="font-normal">Slice Size:</span> Rp. {quicheList["slice-price"].toLocaleString()}</h6>
            </Link>
          </section>
        </div>
      </section>
      <section id="bread" className="lg:mt-20 mt-10">
        <h2 className="text-3xl font-extrabold text-center lg:text-5xl mb-5">Bread List</h2>
        <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-x-6 gap-y-12 w-full">
          {breadList.map(cake => (
            <section key={cake.id}>
              <Link to={cake.id} className="block h-auto rounded-lg shadow-lg bg-white overflow-hidden group">
                <img src={cake.urls} alt={cake.id} className="h-full w-full object-cover object-center group-hover:scale-125 transition duration-300" />
              </Link>
              <Link to={cake.id} className="block text-center mt-3">
                <h4 className="font-bold text-lg mb-3">{cake.name}</h4>
                <h6>Rp. {cake["price"].toLocaleString()}</h6>
              </Link>
            </section>
          ))}
        </div>
      </section>
    </section>
  )
}

export default Catalog