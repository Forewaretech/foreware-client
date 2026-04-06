import Link from "next/link";
import HeaderContent from "../Headers/HeaderContent";
import BaseSpacing from "../Spacing/BaseSpacing";
import Button from "../Buttons/Button";
import Image from "next/image";
import enterprise_scale from "@/public/images/enterprise_scale.svg";

const Services = () => {
  return (
    <section
      className="flex flex-col justify-between gap-4
      lg:flex-row"
    >
      <div className="min-w-1/2">
        <HeaderContent heading="Enterprise Software Solutions for Businesses of All Sizes.">
          Modern enterprise solutions that unify operations, increase
          visibility, and drive efficiency across every function.
        </HeaderContent>
        <BaseSpacing />
        <Link href="/contact">
          <Button>Talk to an Expert</Button>
        </Link>
      </div>

      <div className="min-w-1/2">
        <Image
          src={enterprise_scale}
          alt="Enterprise Systems That Scale"
          className=" w-full "
        />
      </div>
    </section>
  );
};

export default Services;
