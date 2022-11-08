import Image from '../assets/img/tester.jpg';
import TextInput from './Input/TextInput';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { TesterSchema } from '../validators/schema';
import TextAreaInput from './Input/TextAreaInput';
import { useState } from 'react';
import Dropdown from './Input/Dropdown';

import axios from 'axios';

const TesterForm = () => {
  const [isCake, setIsCake] = useState(true);
  const { register, handleSubmit, formState:{ errors }, getValues } = useForm({
    resolver: yupResolver(TesterSchema),
    defaultValues: {
      type: 'cake',
    }
  });

  const handleTester = async data => {
    // axios.post({
    //   method: 'post',
    //   url: 'https://v1.nocodeapi.com/randybrilliant/google_sheets/gyoziXYfxWVCRcTL?tabId=Form', 
    //   params: {},
    //   data: ([[data.first_name, data.last_name, data.email, data.phone_number, data.type, data.flavours, data.address_line]])
    // }).then(function (response) {
    //   // handle success
    //   console.log(response.data);
    // }).catch(function (error) {
    //   // handle error
    //   console.log(error);
    // })
    const config = {
      headers: {
        'Accept' : "application/json",
        'content-type': 'application/json',
      }
    }

    const params = {};

    axios.post('https://v1.nocodeapi.com/randybrilliant/google_sheets/gyoziXYfxWVCRcTL?tabId=Form', [[data.first_name, data.last_name, data.email, data.phone_number, data.type, data.flavours, data.address_line]], params, config)
    // try {
    //   const response = await fetch(
    //       "https://v1.nocodeapi.com/randybrilliant/google_sheets/gyoziXYfxWVCRcTL?tabId=Form",
    //       {
    //           method: "post",
    //           data: JSON.stringify([[data.first_name, data.last_name, data.email, data.phone_number, data.type, data.flavours, data.address_line]]),
    //           params: {},
    //           headers: {
    //             "Content-Type": "application/json"
    //           }
    //       }
    //   );
    //   const json = await response.json();
    //   const { success } = await 
      
    // } catch (error) {
    //     console.log(error);
    // }
  }

  return (
    <section className="bg-white py-6 sm:py-8 lg:py-12" id="tester-form">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="text-white flex flex-col sm:flex-row bg-secondary rounded-lg">
          <div className="w-full sm:w-1/2 lg:w-2/5 flex flex-col p-6 sm:p-10 mt-10">
            <h2 className=" text-xl md:text-3xl lg:text-5xl font-bold mb-4">Fulfill Your Cravings!</h2>
            <p className="mb-8">
              <span className="block text-lg font-bold italic">Hi There!</span> We are pleased to tell you that we will be launching our brand new online dessert shop on <strong><em>November 12th</em></strong>! <br />Hence, we will be sending free samples of our baked goods to all of you.<br /> Please write down your detail below and feel free to choose and taste our slice of happiness.
              <span className="block italic mt-2">(medan residences only and free of charges)</span>
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
                  isSetCake={setIsCake}
                />
              </div>
              
              <div className={`${isCake ? "block" : "hidden"} w-full col-span-full`}>
                <p className="text-md font-bold">Pick your desired flavours! <span className="font-normal italic">(You can pick up to 2 flavours.)</span></p>
                <div>
                  <label className="relative w-full inline-flex items-center" htmlFor="strawberry_bliss">
                    <input
                      type='checkbox'
                      name='flavours'
                      id="strawberry_bliss"
                      value='Strawberry Bliss'
                      placeholder='Strawberry Bliss'
                      {...register('flavours')}
                      className="mr-3"
                    />
                    Strawberry Bliss
                  </label>
                  <label className="relative w-full inline-flex items-center" htmlFor="milk_tea_chocolate">
                    <input
                      type='checkbox'
                      name='flavours'
                      id="milk_tea_chocolate"
                      value='Milk Tea Chocolate'
                      placeholder='Milk Tea Chocolate'
                      {...register('flavours')}
                      className="mr-3"
                    />
                    Milk Tea Chocolate
                  </label>
                  <label className="relative w-full inline-flex items-center" htmlFor="vanilla_creme_brulee">
                    <input
                      type='checkbox'
                      name='flavours'
                      id="vanilla_creme_brulee"
                      value='Vanilla Creme Brulee'
                      placeholder='Vanilla Creme Brulee'
                      {...register('flavours')}
                      className="mr-3"
                    />
                    Vanilla Creme Brulee
                  </label>
                  <label className="relative w-full inline-flex items-center" htmlFor="mango_tango">
                    <input
                      type='checkbox'
                      name='flavours'
                      id="mango_tango"
                      value='Mango Tango'
                      placeholder='Mango Tango'
                      {...register('flavours')}
                      className="mr-3"
                    />
                    Mango Tango
                  </label>
                  <label className="relative w-full inline-flex items-center" htmlFor="sunny_lemonade">
                    <input
                      type='checkbox'
                      name='flavours'
                      id="sunny_lemonade"
                      value='Sunny Lemonade'
                      placeholder='Sunny Lemonade'
                      {...register('flavours')}
                      className="mr-3"
                    />
                    Sunny Lemonade
                  </label>
                </div>
                {errors["flavours"] && <p className="italic text-sm font-normal mb-5 mt-1">{errors['flavours'].message}</p>}
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
          <div className="w-full sm:w-1/2 lg:w-3/5 h-48 sm:h-full order-first sm:order-none bg-gray-700 rounded-tr-lg rounded-br-lg overflow-hidden">
            <img src={Image} loading="lazy" alt="Dom Hill" className="w-full h-full object-cover object-center" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TesterForm