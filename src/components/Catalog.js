import Images1 from '../assets/img/1.jpg';
import Images2 from '../assets/img/2.jpg';
import Images3 from '../assets/img/3.jpg';

const Catalog = () => {
  return (
    <section id="category" className="mt-10 lg:mt-20 text-center">
      <h2 className="text-3xl lg:text-5xl font-extrabold uppercase">Catalog</h2>
      <p className="text-xs lg:text-sm font-medium uppercase mt-1 lg:mt-2 text-secondary">Everything was handmade and fresh from the oven.</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-5">
        <section className="group flex justify-center items-center w-full h-96 cursor-pointer overflow-hidden">
          <img src={Images1} alt="Cake" className="w-full h-full object-cover object-center group-hover:scale-125 transition duration-300" />
          <div className="w-80 h-80 absolute z-30 justify-center items-center flex invisible group-hover:visible transition duration-300">
            <div className="w-80 h-80 bg-secondary grid items-center">
              <h3 className="text-white text-lg font-serif italic font-light mb-3">Quiches</h3>
            </div>
          </div>
        </section>
        <section className="group flex justify-center items-center w-full h-96 cursor-pointer overflow-hidden">
          <img src={Images2} alt="Cake" className="w-full h-full object-cover object-center group-hover:scale-125 transition duration-300" />
          <div className="w-80 h-80 absolute z-30 justify-center items-center flex invisible group-hover:visible transition duration-300">
            <div className="w-80 h-80 bg-secondary grid items-center">
              <h3 className="text-white text-lg font-serif italic font-light mb-3">Slice Cake</h3>
            </div>
          </div>
        </section>
        <section className="group flex justify-center items-center w-full h-96 cursor-pointer overflow-hidden">
          <img src={Images3} alt="Cake" className="w-full h-full object-cover object-center group-hover:scale-125 transition duration-300" />
          <div className="w-80 h-80 absolute z-30 justify-center items-center flex invisible group-hover:visible transition duration-300">
            <div className="w-80 h-80 bg-secondary grid items-center">
              <h3 className="text-white text-lg font-serif italic font-light mb-3">Bread</h3>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Catalog