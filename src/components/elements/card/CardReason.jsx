const CardReason = ({ children }) => {
  return (
    <>
      <div className="w-full h-56 rounded-lg bg-card-gradient px-4 py-5 mb-2 md:h-48 lg:h-56 lg:w-[49%] xl:w-[22.5%] xl:h-[21rem] xl:rounded-xl">
        {children}
      </div>
    </>
  );
};

const header = (props) => {
  const { className, children } = props;

  return (
    <h2
      className={`font-bold text-2xl text-white mb-2 xl:text-[1.4rem] ${className}`}
    >
      {children}
    </h2>
  );
};
const body = (props) => {
  const { className, children } = props;

  return (
    <p
      className={`font-medium text-base text-slate-400 leading-snug xl:text-sm ${className}`}
    >
      {children}
    </p>
  );
};

CardReason.body = body;
CardReason.header = header;

export default CardReason;
