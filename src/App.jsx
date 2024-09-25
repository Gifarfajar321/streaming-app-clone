import background from "./assets/Image/netflix-img/images/header-image.png";
import dropdown from "./assets/Image/netflix-img/images/down-icon.png";
import logo from "./assets/Image/netflix-img/images/pngwing.com.png";
import SubJudul from "./components/elements/SubJudul";
import Judul from "./components/elements/Judul";
import SmallDescription from "./components/elements/SmallDescription";
import CardReason from "./components/elements/card/CardReason";
import CardFilm from "./components/elements/card/CardFilm";
import "../src/index.css";
import GroupCardToggle from "./components/elements/card/CardQ&A/GroupCardToggle";
import InputJoin from "./components/elements/inputJoin/InputJoin";
import Button from "./components/elements/inputJoin/Button";
import BtnToggle from "./components/elements/BtnToggle/BtnToggle";
import translate from "./assets/Image/netflix-img/images/translate.png";

const App = () => {
  return (
    <>
      <header className="py-6 absolute top-0 left-0 right-0 bg-transparent z-10">
        <div className="flex items-center justify-between px-5 lg:px-14">
          <div className="w-[5.5rem] lg:w-36">
            <img src={logo} alt="" />
          </div>
          <div className="flex gap-2">
            <BtnToggle
              toggleClassName="w-3/4 border-zinc-600"
              icon={translate}
              iconClassName="w-5 filter invert"
              spanClassName="hidden"
            >
              Bahasa Indonesia
            </BtnToggle>
            <a
              href=""
              className="font-medium text-base text-white px-4 py-1.5 bg-red-700 rounded"
            >
              Masuk
            </a>
          </div>
        </div>
      </header>
      <section
        className="pt-28 pb-32 bg-black bg-cover bg-center relative after:content-[' '] after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-black after:opacity-80 after:z-0 lg:min-h-screnn"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="container relative z-10 xl:mx-auto">
          <div className="w-full mx-auto px-10 text-center mt-5 md:w-2/3 md:px-0 lg:w-1/2 xl:pt-20 xl:px-4">
            <Judul className="text-white">
              Film, acara TV tak terbatas dan Banyak lagi
            </Judul>
            <SmallDescription className="text-white xl:text-xl xl:font-semibold">
              Harga mulai dari Rp 54.000. Batalkan kapan pun
            </SmallDescription>
            <SmallDescription className="text-white">
              Siap menonton? Masukkan email untuk membuat atau memulai lagi
              keanggotanmu.
            </SmallDescription>
          </div>
          <div className="w-full px-10 mx-auto mt-5 sm:flex sm:items-start sm:gap-3 md:w-3/4 lg:w-3/5 xl:px-32">
            <InputJoin id="email" errorHandle="Masukan alamat email yang vaild">
              Alamat email
            </InputJoin>
            <Button>Mulai</Button>
          </div>
        </div>
      </section>
      <section className="relative w-full min-h-screen bg-gradient-to-t from-red-700 to-black">
        <div className="bottom-0 left-0 w-full h-full bg-gradient-to-b from-red-700 to-transparent clip-curve-top pt-1">
          <div className="relative w-full min-h-screen bg-gradient-to-t from-red-700 to-transparent">
            <div className="bottom-0 left-0 w-full h-full bg-gradient-to-b from-black to-black clip-curve-top pt-14 pb-14">
              <div className="container mx-auto">
                <div className="w-full px-5 md:px-10 lg:px-20 xl:px-32">
                  <SubJudul className="text-white">
                    Sedang Trend Sekarang
                  </SubJudul>
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
                <div className="px-6 mt-5 flex gap-5 overflow-x-auto md:px-12 lg:px-24 lg:gap-10 xl:px-36 ">
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
                        Tonton di Smart TV, Playstation, Xbox, Chromecast, Apple
                        TV, Pemutar Blure-ray, dan banyak lagi.
                      </CardReason.body>
                    </CardReason>

                    <CardReason>
                      <CardReason.header>
                        Download acara TV untuk menontonya secara offline
                      </CardReason.header>
                      <CardReason.body>
                        Simpan favoritmu dengan mudah agar selalu ada acara TV
                        dan film yang bisa ditonton.
                      </CardReason.body>
                    </CardReason>

                    <CardReason>
                      <CardReason.header>Tonton di manapun</CardReason.header>
                      <CardReason.body>
                        Streaming film dan acara TV tidak terbatas di ponsel,
                        tablet, laptop, dan TV-mu.
                      </CardReason.body>
                    </CardReason>

                    <CardReason>
                      <CardReason.header>
                        Buat profil untuk anak
                      </CardReason.header>
                      <CardReason.body>
                        Kirim anak-anak bertualang bersama karakter favorit
                        didunia yang dibuat khusus untuk mereka -- gratis dengan
                        keanggotanmu
                      </CardReason.body>
                    </CardReason>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-black">
        <div className="container xl:mx-auto">
          <div className="w-full px-5 md:px-10 lg:px-20 xl:px-32">
            <div className="w-full">
              <SubJudul className="text-white">Tanya Jawab Umum</SubJudul>
              <div className="w-full">
                <GroupCardToggle
                  header="Apa itu Netflix?"
                  textFillTop="Netflix adalah layanan streaming yang menawarkan berbagai acara TV pemenang penghargaan, film, anime, dokumenter, dan banyak lagi di ribuan perangkat yang terhubung ke Internet."
                  textFillBottom="Kamu bisa menonton sepuasnya, kapan pun kamu mau, tanpa satu iklan pun – semuanya dengan satu harga bulanan yang murah. Selalu ada tontonan baru dan acara TV serta film baru yang ditambahkan setiap minggu!"
                />

                <GroupCardToggle
                  header="Berapa biaya berlangganan Netflix?"
                  textFillTop="Tonton Netflix di smartphone, tablet, smart TV, laptop, atau perangkat streaming-mu, semuanya dengan satu harga bulanan tetap Rentang harga mulai dari Rp 54.000 hingga Rp 186.000 per bulan. Tanpa biaya ekstra, tanpa kontrak."
                  className="mb-0"
                />

                <GroupCardToggle
                  header="Dimana saya bisa menonton?"
                  textFillTop="Tonton dimana pun, kapan pun. Masuk ke akun Netflix-mu untuk menonton langsung di netflix.com dari komputer pribadi atau diperangkat yang terhubung ke internet dan mendukung aplikasi Netflix, termasuk smart TV, smartphone, tablet, pemutar media streaming, dan konsol game. "
                  textFillBottom="Kamu juga bisa men-download acara favoritmu dengan aplikasi IOS atau Android. Gunakan download untuk menonton saat kamu di perjalanan dan tidak punya koneksi internet. Bawa Netflix kemana saja"
                />

                <GroupCardToggle
                  header="Bagaimana cara membatalkanya?"
                  textFillTop="Netflix fleksibel. Tanpa kontrak menyebalkan dan tanpa komitmen. Kamu dapat dengan mudah membatalkan akunmu secara online dengan dua kali klik. Tanpa biaya pembatalan – mulai atau hentikan akunmu kapan pun."
                  className="mb-0"
                />

                <GroupCardToggle
                  header="Apa yang bisa ditonton di Netflix?"
                  textFillTop="Netflix memiliki pustaka lengkap yang berisi film panjang, film dokumenter, acara TV, anime, Netflix original pemenang pernghargaan, dan lebih banyak lagi. Tonton sepuasnya, kapan pun kamu mau."
                  className="mb-0"
                />

                <GroupCardToggle
                  header="Apakah Netflix sesuai bagi anak-anak?"
                  textFillTop="Pengalaman Netflix anak disertakan dengan keanggotaan agar kamu punya kontrol orang tua saat anak-anak menikmati acara TV dan film untuk keluarga dirumah"
                  textFIllBottom="Profil anak dilengkapi kontrol orang tua yang dilindungi PIN sehingga kamu bisa membatasi rating usia konten yang bisa ditonton anak dan memblokir judul tertentu yang tidak boleh ditonton anak-anak."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-black">
        <div className="container xl:mx-auto">
          <div className="w-full px-5 md:px-10 lg:px-36 xl:px-52">
            <div className="w-full">
              <SmallDescription className="text-white md:text-center lg:text-lg ">
                Siap menonton?Masukkan email untuk membuat keanggotaan atau
                memulai lagi keanggotaan.
              </SmallDescription>
              <div className="w-full mx-auto mt-5 sm:flex sm:items-start sm:gap-3 lg:gap-4">
                <InputJoin
                  id="alamat-email"
                  errorHandle="Masukan alamat email yang valid!"
                  labelClass="lg:h-14"
                >
                  Alamat Email
                </InputJoin>
                <Button className="mx-0 lg:h-14 lg:text-2xl">Mulai</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="py-10 bg-black">
        <div className="container xl:mx-auto">
          <div className="w-full px-5 md:px-10 lg:px-20 xl:px-32">
            <SmallDescription className="text-zinc-400 lg:text-lg">
              Ada Pertanyaan? Hubungi{" "}
              <span className="underline text-lg">007-803-321-2148</span>
            </SmallDescription>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/3">
                <ul>
                  <li className="font-medium text-sm text-zinc-400 underline mb-2.5 lg:text-base">
                    <a href="#">Tanya Jawab</a>
                  </li>
                  <li className="font-medium text-sm text-zinc-400 underline mb-2.5 lg:text-base">
                    <a href="#">Pusat Bantuan</a>
                  </li>
                  <li className="font-medium text-sm text-zinc-400 underline mb-2.5 lg:text-base">
                    <a href="#">Akun</a>
                  </li>
                  <li className="font-medium text-sm text-zinc-400 underline mb-2.5 lg:text-base">
                    <a href="#">Pusat Media</a>
                  </li>
                  <li className="font-medium text-sm text-zinc-400 underline mb-2.5 lg:text-base">
                    <a href="#">Hubungan Investor</a>
                  </li>
                  <li className="font-medium text-sm text-zinc-400 underline mb-2.5 lg:text-base">
                    <a href="#">Lowongan Kerja</a>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/3">
                <ul>
                  <li className="font-medium text-sm text-zinc-400 underline mb-2.5 lg:text-base">
                    <a href="#">Tukar Kartu Hadiah</a>
                  </li>
                  <li className="font-medium text-sm text-zinc-400 underline mb-2.5 lg:text-base">
                    <a href="#">Beli Kartu Hadiah</a>
                  </li>
                  <li className="font-medium text-sm text-zinc-400 underline mb-2.5 lg:text-base">
                    <a href="#">Cara Menonton</a>
                  </li>
                  <li className="font-medium text-sm text-zinc-400 underline mb-2.5 lg:text-base">
                    <a href="#">Ketentuan Pengguna</a>
                  </li>
                  <li className="font-medium text-sm text-zinc-400 underline mb-2.5 lg:text-base">
                    <a href="#">Privasi</a>
                  </li>
                  <li className="font-medium text-sm text-zinc-400 underline mb-2.5 lg:text-base">
                    <a href="#">Preferensi Cookie</a>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/3">
                <ul>
                  <li className="font-medium text-sm text-zinc-400 underline mb-2.5 lg:text-base">
                    <a href="#">Informasi Perusahaan</a>
                  </li>
                  <li className="font-medium text-sm text-zinc-400 underline mb-2.5 lg:text-base">
                    <a href="#">Hubungi Kami</a>
                  </li>
                  <li className="font-medium text-sm text-zinc-400 underline mb-2.5 lg:text-base">
                    <a href="#">Uji Kecepatan</a>
                  </li>
                  <li className="font-medium text-sm text-zinc-400 underline mb-2.5 lg:text-base">
                    <a href="#">Informasi Legal</a>
                  </li>
                  <li className="font-medium text-sm text-zinc-400 underline mb-2.5 lg:text-base">
                    <a href="#">Hanya di Netflix</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-[60%] justify-between my-5 md:w-1/3 lg:w-1/4 xl:w-[22%]">
              <BtnToggle
                toggleClassName="justify-between py-[0.2rem]"
                icon={translate}
                iconClassName="w-5 filter invert"
              >
                Bahasa Indonesia
              </BtnToggle>
              a
              <SmallDescription className="text-sm text-zinc-400 lg:text-base">Netflix Indonesia</SmallDescription>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
