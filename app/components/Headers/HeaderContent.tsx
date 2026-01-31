import { PropsWithChildren } from "react";
import HighlightButton from "../Buttons/HighlightButton";
import Heading from "./Headings";
import clsx from "clsx";

interface Props {
  highlightText?: string;
  heading: string;
  center?: boolean;
  variant?: "white";
  className?: string;
}

const HeaderContent = ({
  children,
  heading,
  highlightText,
  center,
  variant,
  className,
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

      <div className="py-4 font-semibold">
        <Heading variant="h2">{heading}</Heading>
      </div>
      <p className="text-xl">{children}</p>
    </header>
  );
};

export default HeaderContent;
