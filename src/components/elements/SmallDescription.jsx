const SmallDescription = (props) => {
  const { className, children } = props;

  return (
    <p
      className={`font-medium text-base text-white mb-6 xl:text-xl xl:font-semibold ${className}`}
    >
      {children}
    </p>
  );
};

export default SmallDescription;
