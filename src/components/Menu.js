import P1 from '../assets/img/p-1.png';
import P2 from '../assets/img/p-2.png';
import P3 from '../assets/img/p-3.png';
import P4 from '../assets/img/p-4.png';

const Menu = () => {
  return (
    <section id="menu" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 place-items-center place-content-center">
      <div className="grid gap-8 row-gap-5 mb-8 grid-cols-2 lg:grid-cols-3 lg:row-gap-8">
        <div className="group text-center">
          <img
            className="object-cover object-center w-full h-56 mb-6 md:h-64 xl:h-96 group-hover:scale-125 transition duration-300"
            src={P1}
            alt="Cake 1"
          />
          <p className="mb-1 lg:mb-2 text-lg lg:text-xl font-bold leading-none sm:text-2xl text-secondary">
            Strawberry Bliss
          </p>
          <p className="text-gray-700 font-serif italic">
            Rp. 30.000,-
          </p>
        </div>
        <div className="group text-center">
          <img
            className="object-cover object-center w-full h-56 mb-6 md:h-64 xl:h-96 group-hover:scale-125 transition duration-300"
            src={P2}
            alt="Cake 1"
          />
          <p className="mb-1 lg:mb-2 text-lg font-bold leading-none sm:text-2xl text-secondary">
            Milk Tea Chocolate
          </p>
          <p className="text-gray-700 font-serif italic">
            Rp. 30.000,-
          </p>
        </div>
        <div className="group text-center">
          <img
            className="object-cover object-center w-full h-56 mb-6 md:h-64 xl:h-96 group-hover:scale-125 transition duration-300"
            src={P3}
            alt="Cake 1"
          />
          <p className="mb-1 lg:mb-2 text-lg font-bold leading-none sm:text-2xl text-secondary">
            Vanilla Creme Brulee
          </p>
          <p className="text-gray-700 font-serif italic">
            Rp. 30.000,-
          </p>
        </div>
        <div className="group text-center">
          <img
            className="object-cover object-center w-full h-56 mb-6 md:h-64 xl:h-96 group-hover:scale-125 transition duration-300"
            src={P4}
            alt="Cake 1"
          />
          <p className="mb-1 lg:mb-2 text-lg font-bold leading-none sm:text-2xl text-secondary">
            Mango Tango
          </p>
          <p className="text-gray-700 font-serif italic">
            Rp. 30.000,-
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu