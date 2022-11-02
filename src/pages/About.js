import BannerImage from '../assets/img/banner.jpg'

const About = () => {
  return (
    <section id="about-us" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 mt-10">
        <div>
          <h3 className="inline-block px-5 py-2 mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-secondary">
            Sugarbaby.mdn
          </h3>
        </div>
        <h1 className="uppercase max-w-lg mb-3 text-4xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-5xl md:mx-auto">
          About Us
        </h1>
        <h2 className="text-md text-bold italic text-gray-700 md:text-lg mb-6">
          The story behind the creation of Sugarbaby to serve you with a slice of happiness.
        </h2>
        <p className="text-base">
          Sugarbaby was founded in 2022, where the purpose of the owner and the chef, Catherine Pho wants to provide a ready-made cake for customers to enjoy in the midst of their activities. Sugarbaby used only the pure and finest ingredients, with no artificial flavourings and preservatives added. Our product also considered Halal (No Pork Contained). 
        </p>
        <p className="text-base mt-5">
          Catherine Pho has pursued her passion in pastry industry where firstly she had founded Rose Gold Bake, a custom made cake specially made only for customers to celebrate their happy occasions. All of the curiosity from her has come towards passion. She knew that by creating the best pastries will bring happiness to people.
        </p>
      </div>
      <div className="mx-auto lg:max-w-2xl">
        <div className="relative w-full transition-shadow duration-300 hover:shadow-xl">
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
            src={BannerImage}
            alt="Catherine Pho"
          />
          <a
            href="/"
            aria-label="Play Video"
            className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
          >
            <div className="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110">
              <svg
                className="w-10 text-gray-900"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
              </svg>
            </div>
          </a>
        </div>
      </div>
  </section>
  )
}

export default About