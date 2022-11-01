import Delivery from '../assets/img/delivery.svg';
import Cake from '../assets/img/cake.svg';
import Gift from '../assets/img/gift.svg';

const Features = () => {
  return (
    <section id="features" className="container mx-auto mt-10 lg:mt-20 text-center px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-20 lg:gap-0 lg:grid-cols-3 place-content-start">
      <div className="flex flex-col items-center justify-start tracking-wide">
        <img src={Cake} alt="Cake" className="h-16 lg:h-20 mb-5" />
        <h3 className="text-gray-900 text-md lg:text-lg mb-1 lg:mb-3 uppercase font-bold">Fresh from Oven</h3>
        <p className="lg:leading-relaxed text-sm lg:text-base italic font-light font-serif lg:max-w-md">We served only with finest ingredients and freshly baked from oven everyday.</p>
      </div>
      <div className="flex flex-col items-center justify-start tracking-wide">
        <img src={Gift} alt="Cake" className="h-16 lg:h-20 mb-5" />
        <h3 className="text-gray-900 text-md lg:text-lg mb-1 lg:mb-3 uppercase font-bold">Best Gifts for Loved Ones</h3>
        <p className="lg:leading-relaxed text-sm lg:text-base italic font-light font-serif lg:max-w-md">Boost your loved one's day with our dessert as one of our key ingredients is love.</p>
      </div>
      <div className="flex flex-col items-center justify-start tracking-wide">
        <img src={Delivery} alt="Cake" className="h-16 lg:h-20 mb-5" />
        <h3 className="text-gray-900 text-md lg:text-lg mb-1 lg:mb-3 uppercase font-bold">Delivery Available</h3>
        <p className="lg:leading-relaxed text-sm lg:text-base italic font-light font-serif lg:max-w-md">Sugarbaby is available in your favorites application such as Gofood, Grabfood, Tokopedia and also you can chat us now for more informations!</p>
      </div>
    </section>
  )
}

export default Features