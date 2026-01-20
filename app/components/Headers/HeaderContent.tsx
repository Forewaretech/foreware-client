import { PropsWithChildren } from "react";
import HighlightButton from "../Buttons/HighlightButton";
import Heading from "./Headings";

interface Props {
  highlightText?: string;
  heading: string;
  center?: boolean;
}

const HeaderContent = ({
  children,
  heading,
  highlightText,
  center,
}: Readonly<PropsWithChildren<Props>>) => {
  return (
    <header
      className={`${center ? "mx-auto text-center" : ""} 
        max-w-145`}
    >
      {highlightText && (
        <div className={`${center ? "flex justify-center items-center" : ""}`}>
          <HighlightButton>{highlightText}</HighlightButton>
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
