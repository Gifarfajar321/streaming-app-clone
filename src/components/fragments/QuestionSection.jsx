import GroupCardToggle from "../elements/card/CardQ&A/GroupCardToggle";
import SubJudul from "../elements/SubJudul";

const QuestionSection = () => {
  return (
    <>
      <div className="w-full px-5 md:px-10 lg:px-20 xl:px-32">
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
    </>
  );
};


export default QuestionSection