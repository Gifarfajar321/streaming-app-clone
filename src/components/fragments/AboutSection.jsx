import { useEffect, useRef, useState } from "react";
import BtnToggle from "../elements/BtnToggle/BtnToggle";
import CardFilm from "../elements/card/CardFilm";
import CardReason from "../elements/card/CardReason";
import SubJudul from "../elements/SubJudul";
import { getListMovies } from "../../services/listmovies.services";
import arrow from "../../assets/Image/netflix-img/images/arrow-icon.png";
import display from "../../assets/Image/netflix-img/images/display-icon.png";
import download from "../../assets/Image/netflix-img/images/download-icon.png";
import teleskop from "../../assets/Image/netflix-img/images/teles-icon.png";
import profils from "../../assets/Image/netflix-img/images/acc-icon.png";
import Button from "../elements/inputJoin/Button";
import SmallDescription from "../elements/SmallDescription";

const AboutSection = () => {
  const [listMovie, setListMovie] = useState([]);
  const limitListMovie = listMovie.slice(0, 10);
  const [selectMovie, setSelectMovie] = useState([]);

  useEffect(() => {
    getListMovies((data) => {
      setListMovie(data.results);
    });
  }, []);

  const scrollCardRef = useRef(null);
  const scrollRightRef = useRef(null);
  const scrollLefttRef = useRef(null);

  const onScrollRight = () => {
    scrollCardRef.current.scrollTo({
      left: scrollCardRef.current.scrollWidth,
      behavior: "smooth",
    });
    scrollRightRef.current.classList.add("scroll-x-min");
    scrollRightRef.current.classList.remove("scroll-x-plus");
    scrollLefttRef.current.classList.add("scroll-x-plus");
    scrollLefttRef.current.classList.remove("scroll-x-min");
  };

  const onScrollLeft = () => {
    scrollCardRef.current.scrollTo({
      left: 0,
      behavior: "smooth",
    });
    scrollRightRef.current.classList.remove("scroll-x-min");
    scrollRightRef.current.classList.add("scroll-x-plus");
    scrollLefttRef.current.classList.remove("scroll-x-plus");
    scrollLefttRef.current.classList.add("scroll-x-min");
  };

  const modalMovieRef = useRef(null);

  const selectMovieCard = (movieId) => {
    const getMovieId = limitListMovie.find((movie) => movie.id === movieId);
    setSelectMovie(getMovieId);
    modalMovieRef.current.classList.add("modal-movie-active");
    modalMovieRef.current.classList.remove("modal-movie-close");
  };
  console.log(selectMovie);

  const closeSelectMovieCard = (e) => {
    e.preventDefault();
    modalMovieRef.current.classList.add("modal-movie-close");
    modalMovieRef.current.classList.remove("modal-movie-active");
  };

  return (
    <>
      <div className="w-full mx-auto px-5 md:px-10 lg:px-20 xl:px-32">
        <SubJudul className="text-white">Sedang Trend Sekarang</SubJudul>
        <div className="block lg:flex lg:w-1/4 gap-5">
          <BtnToggle
            toggleClassName="w-full py-2 mb-3 border-zinc-700 justify-between"
            iconClassName="hidden"
            spanClassName="block"
          >
            Indonesia
          </BtnToggle>
          <BtnToggle
            toggleClassName="w-full py-2 mb-3 border-zinc-700 justify-between"
            iconClassName="hidden"
            spanClassName="block"
          >
            Film
          </BtnToggle>
        </div>
      </div>
      <div className="relative px-4 py-2 mt-2 gap-3 flex flex-nowrap md:px-12 lg:px-20 xl:px-20">
        <div
          className="scroll-x-min flex items-center pb-7 mx-auto"
          ref={scrollLefttRef}
        >
          <div
            className="w-full h-28 bg-zinc-700 rounded-3xl flex justify-center items-center cursor-pointer lg:h-40"
            onClick={() => onScrollLeft()}
          >
            <div className="w-7 h-7 rotate-180">
              <img src={arrow} alt="arrow" />
            </div>
          </div>
        </div>
        <div
          className="max-w-[90%] w-auto flex gap-3 overflow-x-hidden lg:gap-5 transition-all duration-500"
          ref={scrollCardRef}
        >
          {limitListMovie.length > 0 &&
            limitListMovie.map((movie) => (
              <CardFilm
                key={movie.id}
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                onClick={() => selectMovieCard(movie.id)}
              >
                Baru Ditambahkan
              </CardFilm>
            ))}
        </div>

        <div
          className="scroll-x-plus flex items-center pb-7 mx-auto"
          ref={scrollRightRef}
        >
          <div
            className="w-full h-28 bg-zinc-700 rounded-3xl flex justify-center items-center cursor-pointer lg:h-40"
            onClick={() => onScrollRight()}
          >
            <div className="w-7 h-7">
              <img src={arrow} alt="arrow" />
            </div>
          </div>
        </div>

        <div
          className="w-full min-h-72 bg-white absolute left-0 rounded-xl overflow-hidden modal-movie-close"
          ref={modalMovieRef}
        >
          {selectMovie && (
            <div key={selectMovie.id}>
              <a
                href="#"
                className="absolute top-3 right-3"
                onClick={closeSelectMovieCard}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="35"
                  height="35"
                  viewBox="0 0 72 72"
                  fill="white"
                >
                  <path d="M 19 15 C 17.977 15 16.951875 15.390875 16.171875 16.171875 C 14.609875 17.733875 14.609875 20.266125 16.171875 21.828125 L 30.34375 36 L 16.171875 50.171875 C 14.609875 51.733875 14.609875 54.266125 16.171875 55.828125 C 16.951875 56.608125 17.977 57 19 57 C 20.023 57 21.048125 56.609125 21.828125 55.828125 L 36 41.65625 L 50.171875 55.828125 C 51.731875 57.390125 54.267125 57.390125 55.828125 55.828125 C 57.391125 54.265125 57.391125 51.734875 55.828125 50.171875 L 41.65625 36 L 55.828125 21.828125 C 57.390125 20.266125 57.390125 17.733875 55.828125 16.171875 C 54.268125 14.610875 51.731875 14.609875 50.171875 16.171875 L 36 30.34375 L 21.828125 16.171875 C 21.048125 15.391875 20.023 15 19 15 z"></path>
                </svg>
              </a>
              <div
                className="w-full h-56 px-5 py-3 flex flex-col justify-end bg-cover"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w500${selectMovie.backdrop_path})`,
                }}
              >
                <SubJudul className="font-semibold text-white">
                  {selectMovie.original_title}
                </SubJudul>
                <div className="flex gap-2">
                  {" "}
                  <a
                    href="#"
                    className="font-medium text-sm text-white px-1 py-0.5 rounded-sm bg-zinc-500"
                  >
                    {selectMovie.release_date}
                  </a>
                  <a
                    href="#"
                    className="font-medium text-sm text-white px-2 py-0.5 rounded-sm bg-zinc-500"
                  >
                    {selectMovie.original_language}
                  </a>
                </div>
              </div>
              <div className="w-full px-5 py-4 bg-zinc-700">
                <SmallDescription className="font-light text-white text-sm mb-3">
                  {selectMovie.overview}
                </SmallDescription>
                <Button className="w-full rounded-[0.5rem]">
                  {" "}
                  Get Started
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-full px-6 md:px-10 lg:px-20 xl:px-32">
        <SubJudul className="text-white">
          Alasan Lainnya Untuk Bergabung
        </SubJudul>
        <div className="block lg:flex lg:flex-wrap lg:justify-between">
          <CardReason>
            <CardReason.header>Nikmati di TV-mu</CardReason.header>
            <CardReason.body>
              Tonton di Smart TV, Playstation, Xbox, Chromecast, Apple TV,
              Pemutar Blure-ray, dan banyak lagi.
            </CardReason.body>
            <CardReason.icon image={display} />
          </CardReason>

          <CardReason>
            <CardReason.header>
              Download acara TV untuk menontonya secara offline
            </CardReason.header>
            <CardReason.body>
              Simpan favoritmu dengan mudah agar selalu ada acara TV dan film
              yang bisa ditonton.
            </CardReason.body>
            <CardReason.icon image={download} />
          </CardReason>

          <CardReason>
            <CardReason.header>Tonton di manapun</CardReason.header>
            <CardReason.body>
              Streaming film dan acara TV tidak terbatas di ponsel, tablet,
              laptop, dan TV-mu.
            </CardReason.body>
            <CardReason.icon image={teleskop} />
          </CardReason>

          <CardReason>
            <CardReason.header>Buat profil untuk anak</CardReason.header>
            <CardReason.body>
              Kirim anak-anak bertualang bersama karakter favorit didunia yang
              dibuat khusus untuk mereka -- gratis dengan keanggotanmu
            </CardReason.body>
            <CardReason.icon image={profils} />
          </CardReason>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
