import Image from '../assets/img/tester.jpg';
import TextInput from './Input/TextInput';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { NewsletterSchema } from '../validators/schema';
import { useState, useEffect } from 'react';

import axios from 'axios';

const Newsletter = () => {
  const [isReset, setIsReset] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState:{ errors }, reset } = useForm({
    resolver: yupResolver(NewsletterSchema),
  });

  const handleTester = async data => {
    setIsReset(false);
    setLoading(true);
    setMessage("");
    axios.post('https://sheet.best/api/sheets/7e1b32df-ba45-4c84-badc-4b0c4d24ae93', data)
    .then(response => {
      if (response.status === 200) {
        setMessage("Thank you for your response, we will get in touch with you shortly...");
        setIsReset(true);
      } else {
        setMessage("Please try again later");
      };
      setLoading(false);
    })
  }

  useEffect(() => {
    if (isReset) {
      reset();
    }
  }, [isReset, reset])

  return (
    <section className="bg-white py-6 sm:py-8 lg:py-12" id="tester-form">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="text-white flex flex-col sm:flex-row bg-secondary rounded-lg">
          <div className="w-full sm:w-1/2 lg:w-2/5 flex flex-col p-6 sm:p-10 mt-5">
            <h2 className=" text-xl md:text-3xl lg:text-5xl font-bold mb-4">Get in touch with us!</h2>
            <p className="mb-8">
              <span className="block text-lg font-bold italic">Hi There!</span> Please leave your contact information and we will get back to you shortly...
            </p>
            <form className="grid sm:grid-cols-2 gap-2 gap-y-1 mx-auto w-full" onSubmit={handleSubmit(handleTester)} noValidate>
              <TextInput
                label={"First Name"}
                name={"first_name"}
                placeholder={'Enter your First Name'}
                type={"text"}
                register={register}
                errors={errors}
                required
              />
              <TextInput
                label={"Last Name"}
                name={'last_name'}
                placeholder={'Enter your Last Name'}
                type={"text"}
                register={register}
                errors={errors}
              />
              <TextInput
                label={"Email Address"}
                name={'email'}
                placeholder={'Enter your Email Address'}
                type={"email"}
                required
                register={register}
                errors={errors}
              />
              <TextInput
                label={"Phone Number"}
                name={'phone_number'}
                placeholder={'Enter your Phone Number'}
                type={"text"}
                required
                register={register}
                errors={errors}
              />
              <div className="sm:col-span-2 text-center sm:text-left">
                <button className="w-full lg:w-auto px-6 py-3 lg:px-10 lg:py-4 relative rounded-full group font-medium text-white inline-block" type="submit" disabled={loading} aria-disabled={loading}>
                  <span className="absolute top-0 left-0 w-full h-full rounded-full opacity-50 filter blur-sm bg-gradient-to-br from-secondary to-primary"></span>
                  <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded-full opacity-50 from-secondary to-primary"></span>
                  <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded-full shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-secondary to-primary"></span>
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded-full bg-gradient-to-br to-primary from-secondary"></span>
                  {loading ? <div className="relative loader ease-linear rounded-full border-4 border-t-4 border-primary h-6 w-6 mx-auto"></div> : <span className=" relative text-sm font-extrabold">Send Form</span>}
                </button>
              </div>
              {message && <p className="italic text-sm font-normal mb-5 mt-1">{message}</p>}
            </form>
            <p className="text-primary text-sm italic mt-10">By sending your data, you agree to our <a href="/" className="hover:text-white active:text-tertiary underline transition duration-100">Privacy Policy</a>.</p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-3/5 h-48 sm:h-[765px] rounded-tl-lg order-first sm:order-none bg-gray-700 sm:rounded-tl-none rounded-tr-lg rounded-br-lg overflow-hidden">
            <img src={Image} loading="lazy" alt="Sugarbaby Tester Form" className="w-full h-full object-cover object-center" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter