const ParentList = ({ children }) => {
  return (
    <>
      <div className="w-full md:w-1/3">
        <ul>{children}</ul>
      </div>
    </>
  );
};

export default ParentList;
