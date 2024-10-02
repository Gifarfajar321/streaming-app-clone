import Button from "../inputJoin/Button";
import SmallDescription from "../SmallDescription";
import SubJudul from "../SubJudul";

const ModalMovie = (props) => {
  const { selectMovie, closeSelectMovieCard } = props;

  return (
    <>
      {selectMovie && (
        <div key={selectMovie.id}>
          <a
            href="#"
            className="absolute top-3 right-3 drop-shadow-xl z-20"
            onClick={closeSelectMovieCard}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="35"
              height="35"
              viewBox="0 0 72 72"
              fill="#FFFF"
            >
              <path d="M 19 15 C 17.977 15 16.951875 15.390875 16.171875 16.171875 C 14.609875 17.733875 14.609875 20.266125 16.171875 21.828125 L 30.34375 36 L 16.171875 50.171875 C 14.609875 51.733875 14.609875 54.266125 16.171875 55.828125 C 16.951875 56.608125 17.977 57 19 57 C 20.023 57 21.048125 56.609125 21.828125 55.828125 L 36 41.65625 L 50.171875 55.828125 C 51.731875 57.390125 54.267125 57.390125 55.828125 55.828125 C 57.391125 54.265125 57.391125 51.734875 55.828125 50.171875 L 41.65625 36 L 55.828125 21.828125 C 57.390125 20.266125 57.390125 17.733875 55.828125 16.171875 C 54.268125 14.610875 51.731875 14.609875 50.171875 16.171875 L 36 30.34375 L 21.828125 16.171875 C 21.048125 15.391875 20.023 15 19 15 z"></path>
            </svg>
          </a>
          <div
            className="relative w-full h-56 px-5 py-3 flex flex-col justify-end bg-cover backdrop-bg lg:h-60"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500${selectMovie.backdrop_path})`,
            }}
          >
            <SubJudul className="font-bold text-white z-20">
              {selectMovie.original_title}
            </SubJudul>
            <div className="flex gap-2 z-20">
              <a
                href="#"
                className="font-medium text-sm text-white px-1 py-0.5 rounded-sm bg-zinc-500 shadow shadow-slate-500"
              >
                {selectMovie.release_date}
              </a>
              <a
                href="#"
                className="font-medium text-sm text-white px-2 py-0.5 rounded-sm bg-zinc-500 uppercase shadow shadow-slate-500"
              >
                {selectMovie.original_language}
              </a>
            </div>
          </div>
          <div className="w-full px-5 py-4 bg-zinc-700">
            <SmallDescription className="font-light text-white text-sm mb-3 lg:text-base">
              {selectMovie.overview && selectMovie.overview.substring(0, 300)}  ...
            </SmallDescription>
            <Button className="min-w-full rounded-[0.6rem]">
              {" "}
              Get Started
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalMovie;
