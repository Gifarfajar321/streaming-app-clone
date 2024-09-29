const CardReason = ({ children }) => {
  return (
    <>
      <div className="relative w-full h-56 rounded-lg bg-card-gradient px-4 py-5 mb-3 md:h-48 lg:h-56 lg:w-[49%] xl:w-[22.5%] xl:h-[21rem] xl:rounded-xl">
        {children}
      </div>
    </>
  );
};

const header = (props) => {
  const { className, children } = props;

  return (
    <h2
      className={`font-bold text-[1.4rem] text-white mb-3 lg:text-3xl ${className}`}
    >
      {children}
    </h2>
  );
};
const body = (props) => {
  const { className, children } = props;

  return (
    <p
      className={`font-medium text-base text-slate-400 leading-snug ${className}`}
    >
      {children}
    </p>
  );
};

const icon = (props) => {
  const { image } = props;

  return (
    <>
      <div className="w-12 h-12 absolute bottom-3 right-3 lg:w-14 lg:h-14">
        <img src={image} alt={image} />
      </div>
    </>
  );
};

CardReason.body = body;
CardReason.header = header;
CardReason.icon = icon;

export default CardReason;
