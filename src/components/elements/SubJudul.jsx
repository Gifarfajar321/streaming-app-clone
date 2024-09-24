const SubJudul = (props) => {
  const { className, children } = props;

  return (
    <h3
      className={`font-bold text-xl mb-5 lg:text-2xl ${className}`}
    >
      {children}
    </h3>
  );
};

export default SubJudul;
