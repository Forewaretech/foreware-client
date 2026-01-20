import { Zilla_Slab } from "next/font/google";
import { PropsWithChildren } from "react";

const zillaSlab = Zilla_Slab({
  weight: ["300", "400", "500", "600", "700"],
});

type HeadingVariant = "h2";

interface Props {
  variant: HeadingVariant;
}
const Heading = ({ variant, children }: Readonly<PropsWithChildren<Props>>) => {
  const baseClassNames = `${zillaSlab.className} font-bold`;

  switch (variant) {
    case "h2":
      return (
        <h2 className={`${baseClassNames} text-[32px] leading-10`}>
          {children}
        </h2>
      );

    default:
      return <h1 className={`${baseClassNames}`}>{children}</h1>;
  }
};

export default Heading;
