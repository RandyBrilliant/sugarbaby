import Mascot from '../assets/img/logo/mascot.png';
import { PrimaryButton } from '../components/Button';

const Error = () => {
  return (
    <section id="error-page" className="w-screen h-screen flex justify-center items-center overflow-hidden px-4 sm:px-6 lg:px-20">
      <div className="text-center">
        <img src={Mascot} className="mx-auto h-48 lg:h-64 object-cover object-center animate-bounce" alt="Sugarbaby Mascot" />
        <div className="mt-4">
          <h1 className="text-gray-900 font-extrabold text-6xl lg:text-7xl block tracking-widest">404</h1>
          <p className="text-gray-500 text-md lg:text-xl">Sorry, We couldn't find what you are looking for!</p>
        </div>
        <div className="mt-5">
          <PrimaryButton href="/" content="Go Back" />
        </div>
      </div>
    </section>
  )
}

export default Error