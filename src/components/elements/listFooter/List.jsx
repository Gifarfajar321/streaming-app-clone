const List = (props) => {
  const { className, link = "#", children } = props;

  return (
    <li
      className={`font-medium text-sm text-zinc-400 underline mb-2.5 ${className}`}
    >
      <a href={link}>{children}</a>
    </li>
  );
};

export default List;
