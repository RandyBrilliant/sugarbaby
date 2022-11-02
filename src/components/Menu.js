import { cakeList } from "../utils";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <section id="menu" className="px-4 sm:px-6 lg:px-20 lg:mt-20 mt-10">
      <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12 w-full mt-6">
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
      <div className="text-center mt-10">
        <Link className="w-full lg:w-auto px-6 py-3 lg:px-10 lg:py-4 relative rounded-full group font-medium text-white inline-block" to="catalog">
          <span className="absolute top-0 left-0 w-full h-full rounded-full opacity-50 filter blur-sm bg-gradient-to-br from-secondary to-primary"></span>
          <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded-full opacity-50 from-secondary to-primary"></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded-full shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-secondary to-primary"></span>
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded-full bg-gradient-to-br to-primary from-secondary"></span>
          <span className=" relative text-sm font-extrabold">Browse More</span>
        </Link>
      </div>
    </section>
  );
};

export default Menu