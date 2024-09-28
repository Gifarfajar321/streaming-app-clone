import { useEffect, useRef, useState } from "react";
import BtnToggle from "../elements/BtnToggle/BtnToggle";
import CardFilm from "../elements/card/CardFilm";
import CardReason from "../elements/card/CardReason";
import SubJudul from "../elements/SubJudul";
import { getListMovies } from "../../services/listmovies.services";

const AboutSection = () => {
  const [listMovie, setListMovie] = useState([]);
  const limitListMovie = listMovie.slice(0, 10);

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
      <div className="px-4 py-2 mt-2 gap-3 flex flex-nowrap md:px-12 lg:px-20 xl:px-20">
        <div
          className="scroll-x-min flex items-center pb-7 mx-auto"
          ref={scrollLefttRef}
        >
          <div
            className="w-full h-28 bg-zinc-500 rounded-3xl flex justify-center lg:h-36"
            onClick={() => onScrollLeft()}
          >
            <div className="w-5 h-5 text-xs text-transparent ml-3 self-center border-l-[3px] border-t-[3px] border-white -rotate-45 lg:w-7 lg:h-[1.1rem] xl:h-5">
              .
            </div>
          </div>
        </div>
        <div
          className="max-w-[90%] w-auto flex gap-3 overflow-x-hidden lg:gap-5"
          ref={scrollCardRef}
        >
          {limitListMovie.length > 0 &&
            limitListMovie.map((movie) => (
              <CardFilm
                key={movie.id}
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
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
            className="w-full h-28 bg-zinc-500 rounded-3xl flex justify-center lg:h-36"
            onClick={() => onScrollRight()}
          >
            <div className="w-5 h-5 text-xs text-transparent mr-3 self-center border-r-[3px] border-t-[3px] border-white rotate-45 lg:w-7 lg:h-[1.1rem] xl:h-5">
              .
            </div>
          </div>
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
          </CardReason>

          <CardReason>
            <CardReason.header>
              Download acara TV untuk menontonya secara offline
            </CardReason.header>
            <CardReason.body>
              Simpan favoritmu dengan mudah agar selalu ada acara TV dan film
              yang bisa ditonton.
            </CardReason.body>
          </CardReason>

          <CardReason>
            <CardReason.header>Tonton di manapun</CardReason.header>
            <CardReason.body>
              Streaming film dan acara TV tidak terbatas di ponsel, tablet,
              laptop, dan TV-mu.
            </CardReason.body>
          </CardReason>

          <CardReason>
            <CardReason.header>Buat profil untuk anak</CardReason.header>
            <CardReason.body>
              Kirim anak-anak bertualang bersama karakter favorit didunia yang
              dibuat khusus untuk mereka -- gratis dengan keanggotanmu
            </CardReason.body>
          </CardReason>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
