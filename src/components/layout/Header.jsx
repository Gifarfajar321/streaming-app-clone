import BtnToggle from "../elements/BtnToggle/BtnToggle";
import logo from "../../assets/Image/netflix-img/images/logo.png";
import translate from "../../assets/Image/netflix-img/images/translate.png";

const Header = () => {
  return (
    <>
      <header className="py-6 absolute top-0 left-0 right-0 bg-transparent z-10">
        <div className="flex items-center justify-between px-5 lg:px-14 xl:px-24">
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
    </>
  );
};

export default Header;
