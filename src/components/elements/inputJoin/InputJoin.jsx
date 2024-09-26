const InputJoin = (props) => {
  const { id, labelClass, errorHandle, children } = props;

  return (
    <label
      htmlFor={id}
      className={`w-full h-auto relative group mb-5 peer sm:mb-0 ${labelClass}`}
    >
      <input
        type="email"
        name="email"
        id={id}
        className="w-full h-full text-sm text-white bg-transparent ring-1 ring-white rounded-sm px-5 pt-5 z-10 pb-2 outline-none peer invalid:ring-red-700"
      />
      <span className="font-medium text-base text-slate-300 whitespace-nowrap absolute left-5 top-1 -translate-y-1/2 peer-focus:text-slate-400 peer-focus:-translate-y-4 peer-focus:text-xs peer-focus:transition-all duration-300 ease-in-out sm:top-6">
        {children}
      </span>
      <p className="font-bold text-xs text-red-700 invisible mt-1 mb-1.5 peer-invalid:visible">
        {errorHandle}
      </p>
    </label>
  );
};

export default InputJoin;
