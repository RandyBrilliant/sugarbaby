import { featuresList } from "../utils"

const Features = () => {
  return (
    <section id="features" className="container mx-auto mt-10 lg:mt-20 text-center px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-20 lg:gap-0 lg:grid-cols-3 place-content-start">
      {featuresList.map(feature => (
        <section className="flex flex-col items-center justify-start tracking-wide" key={feature.id}>
          <img src={feature.urls} alt={feature.title} className="h-16 lg:h-20 mb-5" />
          <h3 className="text-gray-900 text-md lg:text-lg mb-1 lg:mb-3 uppercase font-black">{feature.title}</h3>
          <p className="text-sm lg:leading-normal lg:text-base italic font-light lg:max-w-md">{feature.description}</p>
        </section>
      ))}
    </section>
  )
}

export default Features