const Judul = (props) => {
  const { children, className } = props;

  return (
    <h1
      className={`font-bold text-[2rem] mb-3 z-10 leading-tight md:text-4xl lg:text-5xl xl:font-extrabold xl:text-6xl ${className}`}
    >
      {children}
    </h1>
  );
};

export default Judul;
