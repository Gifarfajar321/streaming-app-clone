const CardFilm = (props) => {
  const { image, children } = props;
  return (
    <div
      className="mb-10 h-40 w-28 py-1 flex-shrink-0 rounded-md bg-cover shadow-md shadow-slate-600 lg:w-44 lg:h-60 lg:py-2 xl:w-44 xl:h-64 xl:rounded-lg hover:scale-105 transition ease-in-out"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="h-full flex justify-center">
        <h3 className="self-end font-semibold text-[0.6rem] text-white text-nowrap px-2.5 py-1 rounded bg-red-700 lg:text-base xl:text-base">
          {children}
        </h3>
      </div>
    </div>
  );
};

export default CardFilm;
