import { Carousel } from "flowbite-react";
import Images1 from '../assets/img/1.jpg';
import Images2 from '../assets/img/2.jpg';
import Images3 from '../assets/img/3.jpg';
import HeroMobile from '../assets/img/hero-mobile.jpg';


const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row bg-white h-screen overflow-hidden">
      <div className="item lg:hidden h-screen">
      <div className="img-wrap h-screen">
          <img src={HeroMobile} alt="..." className="h-screen" />
        </div>
      </div>
      <div className="h-full flex flex-col items-start justify-end lg:justify-center text-center lg:text-left px-8 lg:px-12 lg:w-1/2 pb-4 lg:pb-0">
        <h1 className=" font-extrabold text-gray-900 text-4xl lg:text-7xl lg:leading-tight"><span className="text-secondary">Happiness</span> Always <br />Taste Heavenly.</h1>
        <p className="text-md lg:text-xl text-gray-500 max-w-2xl mt-2 lg:mt-5">
          A Korean-Inspired Pastry brand that not only tastes yummy, but also looks so sweet and cute - like Sugar Baby.
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start mt-6 uppercase w-full gap-4">
          <a className="btn-hero btn-primary" href="/">Explore Menu</a>
          <a className="btn-hero btn-secondary" href="/">Order Now</a>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2">
        <Carousel slideInterval={5000} leftControl=" " rightControl=" ">
          <img
            src={Images1}
            alt="Strawberry Cake"
            className="object-cover object-center"
          />
          <img
            src={Images2}
            alt="Cheese Cake"
            className="object-cover object-center"
          />
          <img
            src={Images3}
            alt="Lemon Cake"
            className="object-cover object-center"
          />
        </Carousel>  
      </div>
    </section>
  )
}

export default Hero