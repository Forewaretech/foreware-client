import Link from "next/link";
import HeaderContent from "../Headers/HeaderContent";
import BaseSpacing from "../Spacing/BaseSpacing";
import Button from "../Buttons/Button";
import Image from "next/image";
import enterprise_scale from "@/public/images/enterprise_scale.svg";
import { AnimatePresence } from "framer-motion";

const services = [
  {
    heading: "Enterprise Software Solutions for Businesses of All Sizes.",
    text: `Modern enterprise solutions that unify operations, increase
          visibility, and drive efficiency across every function.`,
    buttonText: "Talk to an Expert",
    animatedImages: (
      <div className="min-w-1/2">
        <Image
          src={enterprise_scale}
          alt="Enterprise Systems That Scale"
          className=" w-full "
        />
      </div>
    ),
  },
];

interface Props {
  currentIdex: number;
}
const Services = ({ currentIdex }: Readonly<Props>) => {
  return (
    <section
      className="flex flex-col justify-between gap-4
      lg:flex-row"
    >
      <AnimatePresence></AnimatePresence>
      <div className="min-w-1/2">
        <HeaderContent heading={services[currentIdex].heading}>
          {services[currentIdex].text}
        </HeaderContent>
        <BaseSpacing />
        <Link href="/contact">
          <Button> {services[currentIdex].buttonText}</Button>
        </Link>
      </div>

      <div>{services[currentIdex].animatedImages}</div>
    </section>
  );
};

export default Services;
