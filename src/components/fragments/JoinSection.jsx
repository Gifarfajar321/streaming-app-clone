import Button from "../elements/inputJoin/Button";
import InputJoin from "../elements/inputJoin/InputJoin";
import SmallDescription from "../elements/SmallDescription";

const JoinSection = () => {
  return (
    <>
      <div className="w-full px-5 md:px-10 lg:px-36 xl:px-52">
        <SmallDescription className="text-white md:text-center lg:text-lg ">
          Siap menonton?Masukkan email untuk membuat keanggotaan atau memulai
          lagi keanggotaan.
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
    </>
  );
};

export default JoinSection;
