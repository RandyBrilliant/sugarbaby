import { cakeList } from "../utils";
import { Link } from "react-router-dom";

const Catalog = () => {
  return (
    <section id="menu"  className="px-4 py-16 mx-auto md:px-24 lg:px-8 lg:py-20">
      <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12 w-full lg:mt-20 mt-10">
        {cakeList.map(cake => (
          <section key={cake.id}>
            <Link to={`cake/${cake.id}`} className="block h-auto rounded-lg shadow-lg bg-white overflow-hidden group">
              <img src={cake.urls} alt={cake.id} className="h-full w-full object-cover object-center group-hover:scale-125 transition duration-300" />
            </Link>
            <Link to={`cake/${cake.id}`} className="block text-center mt-3">
              <h4 className="font-bold text-lg mb-3">{cake.name}</h4>
              <h6><span className="font-normal">Full Size:</span> Rp. {cake["full-price"].toLocaleString()}</h6>
              <h6><span className="font-normal">Slice Size:</span> Rp. {cake["slice-price"].toLocaleString()}</h6>
            </Link>
          </section>
        ))}
      </div>
    </section>
  )
}

export default Catalog