const AuthLayout = (props) => {
  const { className, children } = props;

  return (
    <>
      <div className={`container mx-auto ${className}`}>{children}</div>
    </>
  );
};

export default AuthLayout;
