import Link from "next/link";
import Button from "../Buttons/Button";
import Heading from "../Headers/Headings";

interface Props {
  heading: string;
  text: string;
  buttonText?: string;
  href?: string;
}

const BannerContent = ({
  heading,
  text,
  buttonText,
  href,
}: Readonly<Props>) => {
  return (
    <section
      className=" bg-black/80 p-10 rounded-lg text-white
      lg:w-120"
    >
      <Heading variant="h1">{heading}</Heading>
      <p className="text-xl py-4">{text}</p>
      {buttonText && (
        <Link href={href || "/contact"}>
          <Button>{buttonText}</Button>
        </Link>
      )}
    </section>
  );
};

export default BannerContent;
