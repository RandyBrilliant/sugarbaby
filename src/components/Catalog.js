import Images1 from '../assets/img/1.jpg';
import Images2 from '../assets/img/2.jpg';
import Images3 from '../assets/img/3.jpg';

const Catalog = () => {
  return (
    <section id="about-us" className="mt-10 lg:mt-20 text-center">
      <h2 className="text-3xl lg:text-5xl font-extrabold uppercase">Catalog</h2>
      <p className="text-xs lg:text-sm font-medium uppercase mt-1 lg:mt-2 text-secondary">Everything was handmade and fresh from the oven.</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-5">
        <section className="group flex justify-center items-center w-full h-96 cursor-pointer overflow-hidden">
          <img src={Images1} alt="Cake" className="w-full h-full object-cover object-bottom group-hover:scale-125 transition duration-300" />
          <div className="w-80 h-80 border-2 p-2 absolute z-30 flex justify-center items-center">
            <div className="w-80 h-80 bg-white">
              <h3 className="text-gray-900 text-lg title-font font-medium mb-3">Slice Cake & Full Size</h3>
            </div>
          </div>
        </section>
        <section className="group flex justify-center items-center w-full h-96 bg-food-2 bg-cover bg-center cursor-pointer">
          <div className="w-3/4 h-3/4 p-5 bg-white flex justify-center items-center">
            <h3 className="text-gray-900 text-lg title-font font-medium mb-3">Slice Cake & Full Size</h3>
          </div>
        </section>
        <section className="group flex justify-center items-center w-full h-96 bg-food-3 bg-cover bg-center cursor-pointer">
          <div className="w-3/4 h-3/4 p-5 bg-white flex justify-center items-center">
            <h3 className="text-gray-900 text-lg title-font font-medium mb-3">Slice Cake & Full Size</h3>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Catalog