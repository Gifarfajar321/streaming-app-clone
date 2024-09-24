const SmallDescription = (props) => {
  const { className, children } = props;

  return (
    <p
      className={`font-medium text-base mb-6  ${className}`}
    >
      {children}
    </p>
  );
};

export default SmallDescription;
