const ToggleCard = (props) => {
  const { toggleClick, refToggleBtn, children } = props;

  return (
    <div className="w-full h-20 bg-zinc-800 flex justify-between items-center px-5 peer hover:bg-zinc-600 transition duration-300 ease-in-out">
      <h2 className="font-medium text-lg text-white lg:text-2xl">{children}</h2>
      <a
        href="#"
        className="font-light text-5xl text-white mb-2 transition duration-300 ease-in-out"
        onClick={toggleClick}
      >
        +
      </a>
    </div>
  );
};

export default ToggleCard;
