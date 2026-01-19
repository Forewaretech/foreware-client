import Link from "next/link";

const navigations = [
  {
    text: "About Us",
    href: "",
  },
  {
    text: "Our Services",
    href: "",
  },
  {
    text: "Insight",
    href: "",
  },
  {
    text: "Career",
    href: "",
  },
];

const Navigations = () => {
  return (
    <ul className=" flex items-center ">
      {navigations.map(({ text, href }) => (
        <li key={text}>
          <Link className=" py-2 px-4 " href={href}>
            {text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigations;
