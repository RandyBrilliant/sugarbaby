export const PrimaryButton = ({href, content}) => {
  return (
    <a href={href} className="w-full lg:w-auto px-6 py-3 lg:px-10 lg:py-4 relative rounded-full group font-medium text-white inline-block">
      <span className="absolute top-0 left-0 w-full h-full rounded-full opacity-50 filter blur-sm bg-gradient-to-br from-secondary to-primary"></span>
      <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded-full opacity-50 from-secondary to-primary"></span>
      <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded-full shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-secondary to-primary"></span>
      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded-full bg-gradient-to-br to-primary from-secondary"></span>
      <span className=" relative text-sm font-extrabold">{content}</span>
    </a>
  )
}

export const SecondaryButton = ({href, content}) => {
  return (
    <a href={href} className="w-full lg:w-auto rounded-full px-6 py-3 lg:px-10 lg:py-4 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-secondary text-secondary">
      <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-secondary top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
      <span className=" relative text-sm font-extrabold text-secondary transition duration-300 group-hover:text-white ease">{content}</span>
    </a>
  )
}