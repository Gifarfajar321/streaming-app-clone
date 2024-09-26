import BtnToggle from "../elements/BtnToggle/BtnToggle";
import CardFilm from "../elements/card/CardFilm";
import CardReason from "../elements/card/CardReason";
import SubJudul from "../elements/SubJudul";

const AboutSection = () => {
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
      <div className="px-6 py-2 mt-2 flex gap-5 overflow-x-auto md:px-12 lg:px-24 lg:gap-10 xl:px-36 ">
        <CardFilm>Baru Ditambahkan</CardFilm>
        <CardFilm>Baru Ditambahkan</CardFilm>
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
