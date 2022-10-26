import Images1 from '../assets/img/1.jpg';
import Images2 from '../assets/img/2.jpg';
import Images3 from '../assets/img/3.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row bg-white h-screen overflow-hidden" id="home">
      <div className="h-full w-full flex flex-col justify-end lg:justify-center text-center lg:text-left px-4 sm:px-6 lg:px-20 lg:w-1/2 pb-5 lg:pb-0 z-10">
        <h1 className="font-extrabold text-gray-900 text-4xl lg:text-7xl lg:leading-tight"><span className="text-secondary">Happiness</span> Always <br />Taste Heavenly.</h1>
        <p className="text-sm italic font-extralight lg:text-lg text-gray-500 lg:max-w-2xl mt-2 font-serif">
          A Korean-Inspired Pastry brand that not only tastes yummy, but also looks so sweet and cute - like Sugar Baby.
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start mt-6 uppercase w-full gap-2 lg:gap-4">
          <a className="btn-hero btn-primary" href="#catalog">Explore Menu</a>
          <a className="btn-hero btn-secondary" href="/">Order Now</a>
        </div>
      </div>
      <div className="hidden ml-auto w-1/2 lg:block h-screen">
        <Swiper
          effect={"fade"}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Autoplay, Pagination]}
          className="h-full w-full"
        >
          <SwiperSlide className="drop-shadow-md group">
            <img
              src={Images1}
              alt="Strawberry Cake"
              className="w-full h-full object-cover object-center group-hover:scale-125 transition duration-300"
            />
          </SwiperSlide>
          <SwiperSlide className="drop-shadow-md group">
            <img
              src={Images2}
              alt="Cheese Cake"
              className="w-full h-full object-cover object-center group-hover:scale-125 transition duration-300"
            />
          </SwiperSlide>
          <SwiperSlide className="drop-shadow-md group">
            <img
              src={Images3}
              alt="Lemon Cake"
              className="w-full h-full object-cover object-center group-hover:scale-125 transition duration-300"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default Hero