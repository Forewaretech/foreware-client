import { PropsWithChildren } from "react";
import HighlightButton from "../Buttons/HighlightButton";
import Heading from "./Headings";
import clsx from "clsx";
import Button from "../Buttons/Button";

interface Props {
  highlightText?: string;
  heading?: string;
  center?: boolean;
  variant?: "white";
  className?: string;
  buttonText?: string;
}

const HeaderContent = ({
  children,
  heading,
  highlightText,
  center,
  variant,
  className,
  buttonText,
}: Readonly<PropsWithChildren<Props>>) => {
  return (
    <header
      className={clsx(
        `${center ? "mx-auto text-center" : ""} 
        max-w-145`,
        className,
      )}
    >
      {highlightText && (
        <div className={`${center ? "flex justify-center items-center" : ""}`}>
          <HighlightButton variant={variant ?? "transparent"}>
            {highlightText}
          </HighlightButton>
        </div>
      )}

      {heading && (
        <div className="py-4 font-semibold">
          <Heading variant="h2">{heading}</Heading>
        </div>
      )}
      <div className={`${center ? " text-center" : "text-justify"} text-xl`}>
        {children}
      </div>
      {buttonText && (
        <div className={`${center && "flex justify-center items-center"} my-4`}>
          <Button>{buttonText}</Button>
        </div>
      )}
    </header>
  );
};

export default HeaderContent;
