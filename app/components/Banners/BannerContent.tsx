import Button from "../Buttons/Button";
import Heading from "../Headers/Headings";

interface Props {
  heading: string;
  text: string;
  buttonText: string;
}

const BannerContent = ({ heading, text, buttonText }: Readonly<Props>) => {
  return (
    <section className=" w-120 bg-black/80 p-10 rounded-lg text-white">
      <Heading variant="h2">{heading}</Heading>
      <p className=" text-xl py-4">{text}</p>
      <Button>{buttonText}</Button>
    </section>
  );
};

export default BannerContent;
