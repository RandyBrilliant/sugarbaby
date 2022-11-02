import Image from '../assets/img/tester.jpg';
import TextInput from './Input/TextInput';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { TesterSchema } from '../validators/schema';
import TextAreaInput from './Input/TextAreaInput';
import Dropdown from './Input/Dropdown';

const TesterForm = () => {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(TesterSchema)
  });

  const handleTester = data => {
    console.log(data);
  }


  return (
    <section className="bg-white py-6 sm:py-8 lg:py-12" id="tester-form">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="text-white flex flex-col sm:flex-row bg-secondary rounded-lg">
          <div className="w-full sm:w-1/2 lg:w-2/5 flex flex-col p-6 sm:p-10 mt-10">
            <h2 className=" text-xl md:text-3xl lg:text-5xl font-bold mb-4">Fulfill Your Cravings!</h2>
            <p className="mb-8">
              <span className="block text-lg font-bold italic">Hi There!</span> We are pleased to tell you that we will be launching our brand new online dessert shop on <strong><em>November 13th</em></strong>! <br />Hence, we will be sending free samples of our baked goods to all of you.<br /> Please write down your detail below and feel free to choose and taste our slice of happiness.
              <span className="block italic mt-2">(medan residences only and free of charges)</span>
            </p>
            <form className="grid sm:grid-cols-2 gap-2 gap-y-1 mx-auto w-full" onSubmit={handleSubmit(handleTester)} noValidate>
              <TextInput
                label={"First Name"}
                name={'text'}
                placeholder={'Enter your First Name'}
                type={"first_name"}
                register={register}
                errors={errors}
                required
              />
              <TextInput
                label={"Last Name"}
                name={'text'}
                placeholder={'Enter your Last Name'}
                type={"last_name"}
                register={register}
                errors={errors}
              />
              <div className="block w-full col-span-full">
                <TextInput
                  label={"Email Address"}
                  name={'email'}
                  placeholder={'Enter your Email Address'}
                  type={"email"}
                  required
                  register={register}
                  errors={errors}
                />
              </div>
              <div className="block w-full col-span-full">
                <TextInput
                  label={"Phone Number"}
                  name={'phone_number'}
                  placeholder={'Enter your Phone Number'}
                  type={"text"}
                  required
                  register={register}
                  errors={errors}
                />
              </div>
              <div className="block w-full col-span-full">
                <Dropdown
                  label={"Choose your favorites!"}
                  name={'type'}
                  register={register}
                  errors={errors}
                  required
                />
              </div>
              <div className="block w-full col-span-full">
                <TextAreaInput
                  label={"Home Address"}
                  name={'address_line'}
                  required
                  register={register}
                  errors={errors}
                />
              </div>

              <div className="sm:col-span-2 text-center sm:text-left">
                <button className="w-full lg:w-auto px-6 py-3 lg:px-10 lg:py-4 relative rounded-full group font-medium text-white inline-block" type="submit">
                  <span className="absolute top-0 left-0 w-full h-full rounded-full opacity-50 filter blur-sm bg-gradient-to-br from-secondary to-primary"></span>
                  <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded-full opacity-50 from-secondary to-primary"></span>
                  <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded-full shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-secondary to-primary"></span>
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded-full bg-gradient-to-br to-primary from-secondary"></span>
                  <span className=" relative text-sm font-extrabold">Send Form</span>
                </button>
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