import { Zilla_Slab } from "next/font/google";
import { PropsWithChildren } from "react";

const zillaSlab = Zilla_Slab({
  weight: ["300", "400", "500", "600", "700"],
});

type HeadingVariant = "h1" | "h2" | "h4";

interface Props {
  variant: HeadingVariant;
  textColor?: "white" | "dark";
}
const Heading = ({
  variant,
  children,
  textColor = "dark",
}: Readonly<PropsWithChildren<Props>>) => {
  const baseClassNames = `${zillaSlab.className} ${textColor == "white" ? "text-white" : ""} font-bold`;
  // const baseClassNames = ` ${textColor == "white" ? "text-white" : ""} font-bold`;

  switch (variant) {
    case "h1":
      return (
        <h1 className={`${baseClassNames} text-[32px] leading-10`}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={`${baseClassNames} text-[32px] leading-10`}>
          {children}
        </h2>
      );
    case "h4":
      return <h4 className={`${baseClassNames} text-[20px] `}>{children}</h4>;

    default:
      return <h1 className={`${baseClassNames}`}>{children}</h1>;
  }
};

export default Heading;
