import "../../../../index.css";

const QandACard = (props) => {
  const { refCard, children } = props;

  return (
    <>
      <div
        className="w-full h-0 min-h-0 px-5 bg-zinc-800 mt-0.5 mb-1 overflow-hidden transition-all duration-300 ease-in-out"
        ref={refCard}
      >
        {children}
      </div>
    </>
  );
};

const TopBody = ({ className, children }) => {
  return (
    <>
      <p
        className={`font-medium text-base text-white mb-7 lg:text-xl ${className}`}
      >
        {children}
      </p>
    </>
  );
};

const BottomBody = ({ children }) => {
  return (
    <>
      <p className="font-medium text-base text-white lg:text-xl">{children}</p>
    </>
  );
};

QandACard.TopBody = TopBody;
QandACard.BottomBody = BottomBody;

export default QandACard;
