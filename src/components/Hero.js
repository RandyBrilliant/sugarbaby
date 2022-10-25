import { Carousel } from "flowbite-react";
import Images1 from '../assets/img/1.jpg';
import Images2 from '../assets/img/2.jpg';
import Images3 from '../assets/img/3.jpg';
import { CarouselItem } from "../utils";
{/* <div className="hidden w-1/2 lg:block">
        <Carousel slideInterval={5000} leftControl=" " rightControl=" ">
          {carouselItem.map(item => (
            <img
              id={item.id}
              src={item.img}
              alt={item.name}
              className="object-cover object-center"
            />
          ))}
        </Carousel>  
      </div> */}

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row bg-white h-screen overflow-hidden" id="home">
      <div className="h-full flex flex-col justify-end lg:justify-center text-center lg:text-left px-4 sm:px-6 lg:px-8 lg:w-1/2 pb-5 lg:pb-0 z-10">
        <h1 className=" font-extrabold text-gray-900 text-4xl lg:text-7xl lg:leading-tight"><span className="text-secondary">Happiness</span> Always <br />Taste Heavenly.</h1>
        <p className="text-sm lg:text-xl text-gray-500 lg:max-w-2xl mt-2 lg:mt-5">
          A Korean-Inspired Pastry brand that not only tastes yummy, but also looks so sweet and cute - like Sugar Baby.
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start mt-6 uppercase w-full gap-2 lg:gap-4">
          <a className="btn-hero btn-primary" href="#catalog">Explore Menu</a>
          <a className="btn-hero btn-secondary" href="/">Order Now</a>
        </div>
      </div>
      <div className="hidden w-1/2 ml-auto lg:block">
        <Carousel slideInterval={5000} leftControl=" " rightControl=" ">
          <img
            src={Images1}
            alt="Strawberry Cake"
            className="object-cover hover:scale-125 transition duration-500"
          />
          <img
            src={Images2}
            alt="Cheese Cake"
            className="object-cover hover:scale-125 transition duration-500"
          />
          <img
            src={Images3}
            alt="Lemon Cake"
            className="object-cover hover:scale-125 transition duration-500"
          />
        </Carousel>  
      </div>
    </section>
  )
}

export default Hero