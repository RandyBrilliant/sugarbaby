import AboutBanner from '../assets/img/banner.jpg';
import AvatarImage from '../assets/img/avatar.jpg';
import Signature from '../assets/img/signature.png';
import { Avatar } from 'flowbite-react';

const About = () => {
  return (
    <section id="about-us" className="mt-10 lg:mt-20 text-center">
      <h2 className="text-4xl lg:text-6xl font-extrabold uppercase">our story</h2>
      <p className="text-xs lg:text-sm font-medium uppercase mt-2 text-secondary">How Sugarbaby was founded at 2022.</p>
      <div className="container px-8 lg:px-5 py-5 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-64 overflow-hidden">
            <img 
              alt="Sugarbaby history" 
              className="object-cover object-center h-full w-full" 
              src={AboutBanner} 
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="flex items-center justify-center">
                <Avatar
                  img={AvatarImage}
                  rounded={true}
                  size="lg"
                />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h3 className="font-bold mt-4 text-gray-900 text-lg">Catherine Pho</h3>
                <div className="w-12 h-1 bg-secondary rounded mt-2 mb-4"></div>
                <p className="text-base italic">"You can't buy happiness, but you can buy dessert and that's kind of the same thing."</p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">
                It’s been a long day, sometimes we feel tired and need a mood booster. Let Sugar Baby sweeten your mood, sweetened your day. A slice a cake a day, keeps the bad mood away. Serving you only heavenly sweetness. Let us fulfill your cravings with a dose of cute aegyo, because you are our ultimate sweet ones.
              </p>
              <img src={Signature} alt="Catherine's Signature" className="w-40 h-auto block mx-auto lg:inline" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About