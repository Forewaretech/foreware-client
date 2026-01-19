import { PropsWithChildren } from "react";

type HeadingVariant = "h2";

interface Props {
  variant: HeadingVariant;
}
const Heading = ({ variant, children }: Readonly<PropsWithChildren<Props>>) => {
  switch (variant) {
    case "h2":
      return <h2 className={`text-[32px] leading-10`}>{children}</h2>;

    default:
      return <h1>{children}</h1>;
  }
};

export default Heading;
