const Dropdown = ({name, label, errors, required, register}) => {
  return (
    <div>
      <label className={`text-md font-bold relative w-full ${required && "after:content-['*'] after:ml-1"}`} htmlFor={name}>
        {label}
      </label>
      <select 
          {...register(name, { required })}
          className={`py-3 px-2 mt-2 block w-full rounded-md border-primary shadow-sm text-gray-900 focus:border-primary focus:ring focus:ring-tertiary focus:ring-opacity-50 outline-none transition duration-100 ${!errors[name] && 'mb-5'}`} 
          name={name}
          id={name}
      >
        <option value="cake">Slice Cakes</option>
        <option value="quiches">Ultimate Quiches Lorraine</option>
      </select>
      {errors[name] && <p className="italic text-sm font-normal mb-5 mt-1">{errors[name].message}</p>}
    </div>
  )
};

export default Dropdown;