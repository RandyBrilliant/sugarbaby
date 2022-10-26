import P1 from '../assets/img/p-1.png';
import P2 from '../assets/img/p-2.png';
import P3 from '../assets/img/p-3.png';
import P4 from '../assets/img/p-4.png';

const Catalog2 = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="px-20 mx-auto">
        <div className="flex flex-wrap -m-4 items-center justify-center">
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full text-center group">
            <a className="block relative h-80 w-full" href="/">
              <img alt="ecommerce" className="object-cover object-center w-full h-full block group-hover:scale-90 transition duration-500" src={P1} />
            </a>
            <h3 className="text-gray-500 text-xs mb-1 italic">Slice Cake</h3>
            <h2 className="text-gray-900 title-font text-lg font-bold font-serif">The Catalyzer</h2>
            <p className="mt-1">Rp. 30.000,-</p>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full text-center group">
            <a className="block relative h-80 w-full" href="/">
              <img alt="ecommerce" className="object-cover object-center w-full h-full block group-hover:scale-90 transition duration-500" src={P2} />
            </a>
            <h3 className="text-gray-500 text-xs mb-1 italic">Slice Cake</h3>
            <h2 className="text-gray-900 title-font text-lg font-bold font-serif">The Catalyzer</h2>
            <p className="mt-1">Rp. 30.000,-</p>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full text-center group">
            <a className="block relative h-80 w-full" href="/">
              <img alt="ecommerce" className="object-cover object-center w-full h-full block group-hover:scale-90 transition duration-500" src={P3} />
            </a>
            <h3 className="text-gray-500 text-xs mb-1 italic">Slice Cake</h3>
            <h2 className="text-gray-900 title-font text-lg font-bold font-serif">The Catalyzer</h2>
            <p className="mt-1">Rp. 30.000,-</p>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full text-center group">
            <a className="block relative h-80 w-full" href="/">
              <img alt="ecommerce" className="object-cover object-center w-full h-full block group-hover:scale-90 transition duration-500" src={P4} />
            </a>
            <h3 className="text-gray-500 text-xs mb-1 italic">Slice Cake</h3>
            <h2 className="text-gray-900 title-font text-lg font-bold font-serif">The Catalyzer</h2>
            <p className="mt-1">Rp. 30.000,-</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Catalog2