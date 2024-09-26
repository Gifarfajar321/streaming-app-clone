import BtnToggle from "../elements/BtnToggle/BtnToggle";
import FooterList from "../elements/listFooter/FooterList";
import SmallDescription from "../elements/SmallDescription";
import translate from "../../assets/Image/netflix-img/images/translate.png";

const FooterSection = () => {
  return (
    <>
      <div className="w-full px-5 md:px-10 lg:px-20 xl:px-32">
        <SmallDescription className="text-zinc-400 lg:text-lg">
          Ada Pertanyaan? Hubungi{" "}
          <span className="underline text-lg">007-803-321-2148</span>
        </SmallDescription>
        <FooterList />
        <div className="w-[60%] justify-between my-5 md:w-1/3 lg:w-1/4 xl:w-[22%]">
          <BtnToggle
            toggleClassName="justify-between py-[0.2rem]"
            icon={translate}
            iconClassName="w-5 filter invert"
          >
            Bahasa Indonesia
          </BtnToggle>
          a
          <SmallDescription className="text-sm text-zinc-400 lg:text-base">
            Netflix Indonesia
          </SmallDescription>
        </div>
      </div>
    </>
  );
};

export default FooterSection;
