import background from "./assets/Image/netflix-img/images/header-image.png";
import logo from "./assets/Image/netflix-img/images/pngwing.com.png";
import translate from "./assets/Image/netflix-img/images/translate.png";
import dropdown from "./assets/Image/netflix-img/images/down-icon.png";
import SubJudul from "./components/elements/SubJudul";
import Judul from "./components/elements/Judul";
import SmallDescription from "./components/elements/SmallDescription";

const App = () => {
  return (
    <>
      <header className="py-6 absolute top-0 left-0 right-0 bg-transparent z-10">
        <div className="flex items-center justify-between px-5 lg:px-14">
          <div className="w-[5.5rem] lg:w-36">
            <img src={logo} alt="" />
          </div>
          <div className="flex gap-2">
            <a
              href=""
              className="font-medium text-base text-white px-4 py-0.5 bg-transparent rounded-md border border-gray-500 flex items-center gap-1"
            >
              <img src={translate} alt="" className="w-5 filter invert" />{" "}
              <span className="hidden sm:block">Bahasa Indonesia</span>
              <span className="ml-2 sm:ml-10">
                {" "}
                <img src={dropdown} alt="" className="w-2" />
              </span>
            </a>
            <a
              href=""
              className="font-medium text-sm text-white px-4 py-0.5 bg-red-700 rounded-md"
            >
              Masuk
            </a>
          </div>
        </div>
      </header>
      <section
        className="py-28 bg-black bg-cover bg-center relative after:content-[' '] after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-black after:opacity-80 after:z-0 lg:min-h-screnn"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="container relative z-10 mx-auto">
          <div className="w-full px-10 mx-auto text-center mt-5 md:w-2/3 md:px-0 lg:w-1/2 xl:pt-20 xl:px-10">
            <Judul>Film, acara TV tak terbatas dan Banyak lagi</Judul>
            <SmallDescription className="text-white">
              Harga mulai dari Rp 54.000. Batalkan kapan pun
            </SmallDescription>
            <SmallDescription className="text-white">
              Siap menonton? Masukkan email untuk membuat atau memulai lagi
              keanggotanmu.
            </SmallDescription>
          </div>
          <div className="w-full px-10 mx-auto mt-5  sm:flex sm:items-start sm:gap-3 md:w-3/4 lg:w-3/5 xl:px-8">
            <label
              htmlFor="email"
              className="w-full h-auto relative group mb-5 peer sm:mb-0"
            >
              <input
                type="email"
                name="email"
                id="email"
                className="w-full h-full text-sm text-white bg-transparent ring-1 ring-white rounded-md px-5 pt-5 z-10 pb-2 outline-none peer invalid:ring-red-700"
              />
              <span className="text-sm text-slate-600 whitespace-nowrap absolute left-5 top-1 -translate-y-1/2  peer-focus:-translate-y-4 peer-focus:text-xs peer-focus:transition-all duration-300 ease-in-out sm:top-6">
                Alamat Email
              </span>
              <p className="font-bold text-xs text-red-700 invisible mt-2 my-1 peer-invalid:visible">
                Masukan aamat email yang valid
              </p>
            </label>

            <button
              href=""
              className="block w-1/3 text-base font-medium text-center leading-loose text-white mx-auto bg-red-700 ring-1 ring-red-700 rounded-md after:content-[''] after:w-3 after:h-3 after:inline-block after:ml-1 after:border-l-2 after:border-t-2 after:border-white after:rotate-[135deg] sm:py-[0.5rem] md:py-[0.6rem] md:text-xl lg:w-1/4"
            >
              Mulai
            </button>
          </div>
        </div>
      </section>
      <section className="relative w-full min-h-screen bg-gradient-to-t from-red-700 to-black">
        <div className="bottom-0 left-0 w-full h-full bg-gradient-to-b from-red-700 to-transparent clip-curve-top pt-1">
          <div className="relative w-full min-h-screen bg-gradient-to-t from-red-700 to-transparent">
            <div className="bottom-0 left-0 w-full h-full bg-gradient-to-b from-black to-black clip-curve-top pt-14 pb-14">
              <div className="container mx-auto">
                <div className="w-fulll px-5 md:px-10 lg:px-20 xl:px-32">
                  <SubJudul>Sedang Trend Sekarang</SubJudul>
                  <div className="block lg:flex lg:w-1/3  gap-5">
                    <div className="w-full px-4 py-2 mb-3 bg-transparent rounded-md border border-slate-700 flex justify-between items-center">
                      <a href="" className="font-medium text-base text-white">
                        Indonesia
                      </a>
                      <img src={dropdown} alt="" className="w-3" />
                    </div>
                    <div className="w-full px-4 py-2 mb-3 bg-transparent rounded-md border border-slate-700 flex justify-between items-center">
                      <a href="" className="font-medium text-base text-white">
                        Film
                      </a>
                      <img src={dropdown} alt="" className="w-3" />
                    </div>
                  </div>
                </div>
                <div className="px-6 mt-5 flex gap-2 overflow-x-scroll md:px-12 lg:px-24 xl:px-36 ">
                  <div className="mb-10 h-44 w-32 px-2.5 py-1 bg-white rounded-md lg:w-40 lg:h-52 lg:py-2 xl:w-44 xl:h-60 xl:rounded-lg">
                    <div className="h-full flex">
                      <h3 className="self-end font-semibold text-xs text-white text-nowrap px-1 py-1 rounded bg-red-700 lg:text-base xl:text-lg">
                        Baru Ditambahkan
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="w-full px-6 md:px-10 lg:px-20 xl:px-32">
                  <SubJudul>Alasan Lainnya Untuk Bergabung</SubJudul>
                  <div className="block lg:flex lg:flex-wrap lg:justify-between">
                    <div className="w-full h-56 rounded-lg bg-card-gradient px-4 py-5 mb-2 md:h-48 lg:h-56 lg:w-[49%] xl:w-[22.5%] xl:h-[21rem]">
                      <h2 className="font-bold text-2xl text-white mb-2 xl:text-[1.4rem]">
                        Nikmati di Tv-mu
                      </h2>
                      <p className="font-medium text-base text-slate-400 leading-snug xl:text-sm">
                        Tonton di Smart TV, Playstation, Xbox, Chromecast, Apple
                        TV, pemutar Blue-ray, dan banyak lagi.
                      </p>
                    </div>
                    <div className="w-full h-56 rounded-lg bg-card-gradient px-4 py-5 mb-2 md:h-48 lg:h-56 lg:w-[49%] xl:w-[22.5%] xl:h-[21rem]">
                      <h2 className="font-bold text-2xl text-white mb-2 xl:text-[1.4rem]">
                        Download acara TV untuk menontonya secara offline
                      </h2>
                      <p className="font-medium text-base text-slate-400 leading-snug xl:text-sm">
                        Simpan favoritmu dengan mudah agar selalu ada acara TV
                        dan film yang bisa ditonton.
                      </p>
                    </div>
                    <div className="w-full h-56 rounded-lg bg-card-gradient px-4 py-5 mb-2 md:h-48 lg:h-56 lg:w-[49%] xl:w-[22.5%] xl:h-[21rem]">
                      <h2 className="font-bold text-2xl text-white mb-2 xl:text-[1.4rem]">
                        Tonton di manapun
                      </h2>
                      <p className="font-medium text-base text-slate-400 leading-snug xl:text-sm">
                        Streaming film dan acara TV tidak terbatas di ponsel,
                        tablet, laptop, dan TV-mu.
                      </p>
                    </div>
                    <div className="w-full h-56 rounded-lg bg-card-gradient px-4 py-5 mb-2 md:h-48 lg:h-56 lg:w-[49%] xl:w-[22.5%] xl:h-[21rem]">
                      <h2 className="font-bold text-2xl text-white mb-2 xl:text-[1.4rem]">
                        Buat profil untuk anak
                      </h2>
                      <p className="font-medium text-base text-slate-400 leading-snug xl:text-sm">
                        Kirim anak-anak untuk bertualang bersama karakter
                        favorit didunia yang dibuat khusus untuk mereka --
                        gratis dengan keanggotaanmu.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
