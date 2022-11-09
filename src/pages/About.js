import { Helmet } from 'react-helmet';

import BannerPicture from '../assets/img/banner.jpg';
import ProfilePicture from '../assets/img/profile-picture.jpg';
import VideoProfile from '../assets/img/sugarbaby01.mp4';
import ReactPlayer from 'react-player/lazy';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Sugarbaby</title>
        <meta name="description" content="Sugarbaby was founded in 2022, where the purpose is to serve freshly-made dessert for everyone to enjoy in the midst of their activities. We used only the finest and fresh ingredients, with no artifical flavourings and preservatives added. Our product also considered Halal (No Pork Contained)." />
      </Helmet>
      <section id="about-us" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 mt-10">
          <div>
            <h3 className="inline-block px-5 py-2 mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-secondary">
              Sugarbaby
            </h3>
          </div>
          <h1 className="uppercase max-w-lg mb-3 text-4xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-5xl md:mx-auto">
            About Us
          </h1>
          <h2 className="text-md text-bold italic text-gray-700 md:text-lg mb-6">
            The story behind the creation of Sugarbaby to serve you with a slice of happiness.
          </h2>
          <p className="text-base mb-6"> 
            Sugarbaby was founded in 2022, where the purpose is to serve freshly-made dessert for everyone to enjoy in the midst of their activities. We used only the finest and fresh ingredients, with no artifical flavourings and preservatives added. Our product also considered Halal (No Pork Contained).
          </p>
          <figure className="mb-6 text-center">
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96 transition-shadow duration-300 hover:shadow-xl"
              src={ProfilePicture}
              alt="Catherine Pho"
            />
            <figcaption className="font-serif font-bold mt-5 text-xl leading-none"><span className="block font-sans font-light uppercase tracking-wide mb-3 text-sm">MEET OUR CHEF</span>Catherine Pho</figcaption>
            <span className="font-normal italic text-sm leading-none">The Founder and Pastry Chef</span>
          </figure>
          <p className="text-base mt-5">
            Catherine Pho has pursued her passion in pastry industry where firstly she had founded Rose Gold Bake, a custom-made cake specially made for customers to celebrate their happy occasions. All of the curiosity from her has come towards her passion. She knew that by creating the best pastries will bring happiness to people. Catherine has also been certified as Pastry Chef.
          </p>
        </div>
        <div className="mx-auto lg:max-w-2xl mt-20">
          <div className="relative w-full transition-shadow duration-300 hover:shadow-xl overflow-hidden">
            <ReactPlayer url={VideoProfile} controls light={BannerPicture} width={"100%"} />
          </div>
        </div>
      </section>
    </>
  )
}

export default About