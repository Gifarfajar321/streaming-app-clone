import Button from "../elements/inputJoin/Button";
import InputJoin from "../elements/inputJoin/InputJoin";
import Judul from "../elements/Judul";
import SmallDescription from "../elements/SmallDescription";

const HeroSection = () => {
  return (
    <>
      <div className="w-full mx-auto  px-10 text-center mt-5 md:w-2/3 md:px-0 lg:w-1/2 xl:pt-20 xl:px-4">
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
      <div className="w-ful px-10 mx-auto mt-5 sm:flex sm:items-start sm:gap-3 md:w-3/4 lg:w-3/5 xl:px-32">
        <InputJoin id="email" errorHandle="Masukan alamat email yang vaild">
          Alamat email
        </InputJoin>
        <Button>Mulai</Button>
      </div>
    </>
  );
};

export default HeroSection;
