import Mascot from '../assets/img/logo/mascot.png';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section id="error-page" className="w-screen h-screen flex justify-center items-center overflow-hidden px-4 sm:px-6 lg:px-20">
      <div className="text-center">
        <img src={Mascot} className="mx-auto h-48 lg:h-64 object-cover object-center animate-bounce" alt="Sugarbaby Mascot" loading="lazy"/>
        <div className="mt-4">
          <h1 className="text-gray-900 font-extrabold text-6xl lg:text-7xl block tracking-widest">404</h1>
          <p className="text-gray-500 text-md lg:text-xl">Sorry, We couldn't find what you are looking for!</p>
        </div>
        <div className="text-center mt-5">
          <Link className="w-full lg:w-auto px-6 py-3 lg:px-10 lg:py-4 relative rounded-full group font-medium text-white inline-block" to="/">
            <span className="absolute top-0 left-0 w-full h-full rounded-full opacity-50 filter blur-sm bg-gradient-to-br from-secondary to-primary"></span>
            <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded-full opacity-50 from-secondary to-primary"></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded-full shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-secondary to-primary"></span>
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded-full bg-gradient-to-br to-primary from-secondary"></span>
            <span className=" relative text-sm font-extrabold">Back to Home</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Error