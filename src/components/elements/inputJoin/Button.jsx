const Button = (props) => {
  const { className, children } = props;

  return (
    <>
      <button
        href=""
        className={`block w-1/3 py-1 text-lg font-medium text-center leading-loose text-white mx-auto bg-red-700 ring-1 ring-red-700 rounded-sm after:content-[''] after:w-3 after:h-3 after:inline-block after:ml-1 after:border-l-2 after:border-t-2 after:border-white after:rotate-[135deg] sm:py-[0.5rem] md:py-[0.6rem] md:text-xl lg:w-1/4 ${className}`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
