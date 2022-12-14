import Images1 from '../assets/img/1.jpg';
import Images2 from '../assets/img/2.jpg';
import Images3 from '../assets/img/3.jpg';
import { Link } from 'react-router-dom';

const Catalog = () => {
  return (
    <section id="catalog" className="mt-10 lg:mt-20 text-center">
      <h2 className="text-3xl lg:text-5xl font-extrabold uppercase">Catalog</h2>
      <p className="text-xs lg:text-sm font-medium uppercase mt-1 lg:mt-2 text-secondary">Everything was handmade and fresh from the oven.</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-5">
        <Link className="group flex justify-center items-center w-full h-96 cursor-pointer overflow-hidden" to="catalog">
          <img src={Images1} alt="Quiches" className="w-full h-full object-cover object-center group-hover:scale-125 transition duration-300" loading="lazy" />
          <div className="w-80 h-80 absolute z-30 justify-center items-center flex opacity-0 group-hover:opacity-100 transition duration-300">
            <div className="w-80 h-80 bg-secondary grid items-center">
              <h3 className="text-white text-2xl italic font-black mb-3">Quiches</h3>
            </div>
          </div>
        </Link>
        <Link className="group flex justify-center items-center w-full h-96 cursor-pointer overflow-hidden" to="catalog">
          <img src={Images2} alt="Cakes" className="w-full h-full object-cover object-center group-hover:scale-125 transition duration-300" loading="lazy" />
          <div className="w-80 h-80 absolute z-30 justify-center items-center flex opacity-0 group-hover:opacity-100 transition duration-300">
            <div className="w-80 h-80 bg-secondary grid items-center box-content">
              <h3 className="text-white text-2xl italic font-black mb-3">Cakes</h3>
            </div>
          </div>
        </Link>
        <Link className="group flex justify-center items-center w-full h-96 cursor-pointer overflow-hidden" to="catalog">
          <img src={Images3} alt="Breads" className="w-full h-full object-cover object-center group-hover:scale-125 transition duration-300" loading="lazy" />
          <div className="w-80 h-80 absolute z-30 justify-center items-center flex opacity-0 group-hover:opacity-100 transition duration-300">
            <div className="w-80 h-80 bg-secondary grid items-center">
              <h3 className="text-white text-2xl italic font-black mb-3">Breads</h3>
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}

export default Catalog