import { productList } from "../utils";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <section id="menu" className="px-4 sm:px-6 lg:px-20 lg:mt-20 mt-10">
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12 w-full mt-6">
        {productList.filter(item => item.type === "christmas").map(cake => (
          <section key={cake.id} className="relative">
            <div className="animate-pulse absolute left-0 top-6 bg-red-700 rounded-tr-full rounded-br-full text-white text-sm py-1 px-3 italic font-bold text-shadow shadow-md">Christmas Limited!</div>
            <Link to={`catalog/${cake.id}`} className="block h-auto rounded-lg shadow-lg bg-white overflow-hidden group">
              <img src={cake.urls[0]} alt={cake.id} className="h-full w-full object-cover object-center group-hover:scale-125 transition duration-300" loading="lazy" />
            </Link>
            <Link to={`catalog/${cake.id}`} className="block text-center mt-3">
              <h4 className="font-bold text-lg mb-3">{cake.name}</h4>
              <h6><span className="font-normal">Price:</span> Rp. {cake["full-price"].toLocaleString()}</h6>
            </Link>
          </section>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="catalog" className="button w-full lg:w-auto rounded-full px-6 py-3 lg:px-10 lg:py-4 m-1 overflow-hidden relative text-xl font-medium button-christmas-style" type="submit">
          Browse More
        </Link>
      </div>
    </section>
  );
};

export default Menu