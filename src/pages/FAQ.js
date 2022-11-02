import { faqList } from "../utils";

const FAQ = () => {
  return (
    <section id="faq" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl mt-10">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <h3 className="inline-block px-5 py-2 mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-secondary">
              Sugarbaby.mdn
            </h3>
          </div>
          <h1 className="uppercase mb-3 text-4xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-5xl md:mx-auto">
            Frequently Asked Questions
          </h1>
          <p className="italic text-md text-gray-700 md:text-lg">
            Every day help for our customers. We have concluded some questions that you might asked.
          </p>
        </div>
      </div>
      <div className="max-w-screen-xl sm:mx-auto">
        <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
          {faqList.map(item => (
            <section key={item.id}>
              <h2 className="mb-4 text-xl font-bold">
                {item.question}
              </h2>
              <p className="text-gray-700">
                {item.answer}
              </p>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;