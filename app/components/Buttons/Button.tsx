import { ArrowRight2 } from "iconsax-react";
import { PropsWithChildren } from "react";

type ButtonVariantType = "primary" | "secondary";

interface Props {
  variant?: ButtonVariantType;
}
const Button = ({
  children,
  variant = "primary",
}: Readonly<PropsWithChildren<Props>>) => {
  const btnStyles: { [key in ButtonVariantType]: string } = {
    primary: "bg-primary text-white hover:bg-foreware-3",
    secondary: "",
  };

  return (
    <button
      className={`${btnStyles[variant]} py-2.25 px-4 
      text-white font-bold text-xs rounded-lg 
      flex gap-1 items-center duration-200`}
    >
      <span>{children}</span>
      <ArrowRight2 size={14} color="currentColor" className=" font-bold" />
    </button>
  );
};

export default Button;
