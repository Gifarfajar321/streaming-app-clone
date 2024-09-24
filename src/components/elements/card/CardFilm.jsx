const CardFilm = (props) => {
  const { image, children } = props;
  return (
    <div
      className="mb-10 h-44 w-32 px-2.5 py-1 bg-white rounded-md lg:w-40 lg:h-52 lg:py-2 xl:w-44 xl:h-60 xl:rounded-lg"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="h-full flex">
        <h3 className="self-end font-semibold text-xs text-white text-nowrap px-1 py-1 rounded bg-red-700 lg:text-base xl:text-lg">
          {children}
        </h3>
      </div>
    </div>
  );
};

export default CardFilm;
