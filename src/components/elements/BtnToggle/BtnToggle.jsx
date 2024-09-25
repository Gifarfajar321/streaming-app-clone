import translate from "../../../assets/Image/netflix-img/images/translate.png";
import dropdown from "../../../assets/Image/netflix-img/images/down-icon.png";

const BtnToggle = (props) => {
  const { icon, iconClassName, toggleClassName, spanClassName, children } =
    props;

  return (
    <>
      <a
        href="#"
        className={`font-medium text-base text-white px-4 py-1.5 bg-transparent rounded border flex items-center ${toggleClassName}`}
      >
        <img src={icon} alt="" className={iconClassName} />{" "}
        <span className={`${spanClassName} text-nowrap sm:block`}>
          {children}
        </span>
        <span className="ml-2 sm:ml-5">
          <img src={dropdown} alt="" className="w-2" />
        </span>
      </a>
    </>
  );
};

export default BtnToggle;
