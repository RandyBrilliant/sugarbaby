import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";

import { carouselChristmasList, merchantList } from "../utils";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";


import { PrimaryButton, ChristmasButton } from './Button';

const Hero = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row bg-white h-screen max-h-screen overflow-hidden" id="home">
      <div className="w-full h-full flex flex-col justify-end lg:justify-center text-center lg:text-left px-4 sm:px-6 lg:px-20 lg:w-1/2 pb-5 lg:pb-0 z-20">
        <h1 className="font-black text-gray-900 text-4xl lg:text-6xl xl:text-7xl lg:leading-tight"><span className="text-secondary">Happiness</span> Always <br />Taste Heavenly.</h1>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start mt-6 uppercase w-full gap-2 lg:gap-4">
          <ChristmasButton href="#catalog" content={"Explore Menu"} />
          <PrimaryButton href="#tester-form" content={"Order Now"} />
        </div>
        <section className="hidden lg:block absolute left-20 bottom-10">
          <h4 className="uppercase font-black italic mb-3 text-md">Available on</h4>
          <div className="flex items-center gap-5">
            {merchantList.map(merchant => (
              <img src={merchant.urls} alt={merchant.title} key={merchant.id} className="h-8 w-auto" />
            ))}
          </div>
        </section>
      </div>
      <div className="absolute z-10 left-0 w-full background-divider top-0 h-screen lg:hidden" aria-disabled></div>
      <div className="ml-auto w-screen h-5/6 lg:w-1/2 lg:h-screen">
        <Swiper
          effect={"fade"}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          modules={[EffectFade, Autoplay]}
          className="h-full w-full"
        > 
          {carouselChristmasList.map(cake => (
            <SwiperSlide className="drop-shadow-md" key={cake.id}>
              <img
                src={cake.urls}
                alt={cake.alt}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Hero