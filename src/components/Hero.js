import Images1 from '../assets/img/1.jpg';
import Images2 from '../assets/img/2.jpg';
import Images3 from '../assets/img/3.jpg';
import Logo1 from '../assets/img/1-1.svg';
import Logo2 from '../assets/img/1-3.png';
import Logo3 from '../assets/img/1-3.svg';
import { Swiper, SwiperSlide } from "swiper/react";
import { Zoom, EffectFade, Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { PrimaryButton, SecondaryButton } from './Button';

const Hero = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row bg-white h-screen max-h-screen overflow-hidden" id="home">
      <div className="w-full h-full flex flex-col justify-end lg:justify-center text-center lg:text-left px-4 sm:px-6 lg:px-20 lg:w-1/2 pb-5 lg:pb-0 z-20">
        <h1 className="font-extrabold text-gray-900 text-4xl lg:text-7xl lg:leading-snug"><span className="text-secondary">Happiness</span> Always <br />Taste Heavenly.</h1>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start mt-6 uppercase w-full gap-2 lg:gap-4">
          <PrimaryButton href="#catalog" content={"Explore Menu"} />
          <SecondaryButton href="#tester-form" content={"Order Now"} />
        </div>
        <section className="hidden lg:block absolute left-20 bottom-10">
          <h4 className="uppercase font-extrabold mb-3 text-md">Available on</h4>
          <div className="flex items-center gap-7">
            <img src={Logo1} alt="Grab Food" className="h-8 w-auto" />
            <img src={Logo3} alt="Go Food" className="h-8 w-auto" />
            <img src={Logo2} alt="Tokopedia" className="h-8 w-auto" />
          </div>
        </section>
      </div>
      <div className="absolute z-10 left-0 w-full background-divider top-0 h-screen lg:hidden" aria-disabled></div>
      <div className="ml-auto w-screen h-5/6 lg:w-1/2 lg:h-screen">
        <Swiper
          effect={"fade"}
          zoom={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Zoom, EffectFade, Autoplay, Pagination]}
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