import { Disclosure, Transition } from '@headlessui/react';
import { NavLink } from 'react-router-dom';

import { navigation } from '../utils';

import Logo from '../assets/img/logo/logo-christmas.svg';

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-transparent absolute w-full lg:w-auto z-50 font-sans">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-5 lg:px-20 py-1 lg:py-2">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth={3} 
                      stroke="#F2E5D2" 
                      className="w-7 h-7"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth={3} 
                      stroke="#F2E5D2" 
                      className="w-7 h-7"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center lg:items-center justify-start">
                  <NavLink to="/">
                    <img
                      className="block h-12 w-auto"
                      src={Logo}
                      alt="Sugarbaby"
                    />
                  </NavLink>
                <div className="hidden lg:ml-10 lg:block">
                  <div className="flex space-x-8">
                    {navigation.map((item) => (
                      <NavLink
                        end
                        key={item.name}
                        to={item.href}
                        className={({ isActive }) => "px-3 py-2 text-md font-black" + (isActive ? "text-secondary" : "text-gray-400 hover:text-primary")}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="lg:hidden">
              <div className="space-y-1 px-5 pt-2 pb-3 mx-4 rounded-md bg-white shadow-lg">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as={NavLink}
                    to={item.href}
                    className={({ isActive }) => "block py-2 text-base font-black uppercase " + (isActive ? "text-secondary" : "text-gray-400 hover:text-primary")}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
