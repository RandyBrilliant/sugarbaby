import { Carousel } from "flowbite-react";
import Images1 from '../assets/img/1.jpg';
import Images2 from '../assets/img/2.jpg';
import Images3 from '../assets/img/3.jpg';

const Catalog = () => {
  return (
    <section className="flex flex-col items-center justify-center text-sm font-medium text-center text-gray-500 mt-20" id="catalog">
      <h2 className="text-5xl font-bold mb-5 text-gray-900">Browse Catalog</h2>
      {/* <ul className="flex items-center justify-center flex-wrap -mb-px uppercase">
        <li className="mr-2">
          <a href="/" className="inline-block p-4 rounded-t-lg border-b-2 border-secondary active text-secondary">Slice Cakes</a>
        </li>
        <li className="mr-2">
          <a href="/" className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-primary hover:border-primary">Quiches</a>
        </li>
        <li className="mr-2">
          <a href="/" className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-primary hover:border-primary">Breads</a>
        </li>
      </ul> */}
      <div class="container px-5 py-10 mx-auto flex flex-wrap">
        <div class="flex flex-wrap md:-m-2 -m-1">
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-1/2">
              <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300" />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/501x301" />
            </div>
            <div class="md:p-2 p-1 w-full">
              <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://dummyimage.com/600x360" />
            </div>
          </div>
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-full">
              <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://dummyimage.com/601x361" />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/502x302" />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/503x303" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Catalog