import { cakeList } from "../utils";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState();
  let { id } = useParams();

  useEffect(() => {
    setProduct(cakeList.filter(cake => cake.id.includes(id))[0]);

  }, [])

  return (
    <section id={product?.id} className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-lg px-4 md:px-8 mx-auto mt-16 lg:mt-20">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-gray-100 rounded-lg overflow-hidden relative">
              <img src={`../${product?.urls}`} loading="lazy" alt={product?.name} className="w-full h-full object-cover object-center" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <img src={`../${product?.urls}`} loading="lazy" alt={product?.name} className="w-full h-full object-cover object-center" />
              </div>
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <img src={`../${product?.urls}`} loading="lazy" alt={product?.name} className="w-full h-full object-cover object-center" />
              </div>
            </div>
          </div>
          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="inline-block text-gray-500 mb-0.5">Fancy Brand</span>
              <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold">{product?.name}</h2>
            </div>
            <div className="mb-4">
              <p className="text-gray-800 text-lg md:text-xl">Full Size: Rp. {product && product["full-price"].toLocaleString()}</p>
              <p className="text-gray-800 text-lg md:text-xl">Slice Size: Rp. {product && product["slice-price"].toLocaleString()}</p>
            </div>
            <div className="flex items-center text-gray-500 gap-2 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
              </svg>
              <span className="text-sm">Delivery Available</span>
            </div>
            <div className="mt-10 md:mt-16 lg:mt-20">
              <div className="text-gray-800 text-lg font-semibold mb-3">Description</div>
              <p className="text-gray-500">
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product