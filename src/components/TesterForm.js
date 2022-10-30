import Image from '../assets/img/tester.jpg';
import { PrimaryButton } from './Button';

const TesterForm = () => {
  return (
    <section className="bg-white py-6 sm:py-8 lg:py-12" id="tester-form">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="text-white flex flex-col sm:flex-row bg-secondary rounded-lg">
          <div className="w-full sm:w-1/2 lg:w-2/5 flex flex-col p-6 sm:p-10">
            <h2 className=" text-xl md:text-3xl lg:text-5xl font-bold mb-4">Fulfill Your Cravings!</h2>

            <p className="max-w-md mb-8">As we will be opening our brand new store at November 13, 2022, we will be sending free samplea of our cakes right to your front door <strong><em>(For Medan Residences!)</em></strong>. You can write down your detail below and get the chances to taste our slice of happiness!</p>

            <form className="grid sm:grid-cols-2 gap-4 mx-auto">
              <div>
                <label htmlFor="first-name" className="inline-block text-sm sm:text-base mb-2 after:contents('*')">First name *</label>
                <input name="first-name" id="first-name" className="text-gray-900 w-full bg-gray-50 border focus:ring ring-tertiary rounded outline-none transition duration-100 px-3 py-2" />
              </div>

              <div>
                <label htmlFor="last-name" className="inline-block text-sm sm:text-base mb-2">Last name</label>
                <input name="last-name" className="text-gray-900 w-full bg-gray-50 border focus:ring ring-tertiary rounded outline-none transition duration-100 px-3 py-2" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="inline-block text-sm sm:text-base mb-2">Email *</label>
                <input name="email" className="text-gray-900 w-full bg-gray-50 border focus:ring ring-tertiary rounded outline-none transition duration-100 px-3 py-2" />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="subject" className="inline-block text-sm sm:text-base mb-2">Phone Number *</label>
                <input name="subject" className="text-gray-900 w-full bg-gray-50 border focus:ring ring-tertiary rounded outline-none transition duration-100 px-3 py-2" />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="inline-block text-sm sm:text-base mb-2">Home Address *</label>
                <textarea name="message" className="text-gray-900 w-full h-64 bg-gray-50 border focus:ring ring-tertiary rounded outline-none transition duration-100 px-3 py-2"></textarea>
              </div>

              <div className="sm:col-span-2 text-center sm:text-left">
                <PrimaryButton href="/" content="Send Form" />
              </div>
            </form>
            <p className="text-primary text-sm italic mt-10">By sending your data, you agree to our <a href="/" class="hover:text-white active:text-tertiary underline transition duration-100">Privacy Policy</a>.</p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-3/5 h-48 sm:h-[1080px] order-first sm:order-none bg-gray-700 rounded-tr-lg rounded-br-lg overflow-hidden">
            <img src={Image} loading="lazy" alt="Dom Hill" className="w-full h-full object-cover object-center" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TesterForm