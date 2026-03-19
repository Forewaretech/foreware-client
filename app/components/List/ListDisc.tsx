interface Props {
  items: string[];
}

const ListDisc = ({ items }: Readonly<Props>) => {
  return (
    <ul className="list-disc">
      {items.map((text) => (
        <li key={text} className="ml-7">
          {text}
        </li>
      ))}
    </ul>
  );
};

export default ListDisc;
