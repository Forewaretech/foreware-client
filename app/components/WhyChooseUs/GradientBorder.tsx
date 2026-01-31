import { PropsWithChildren } from "react";

const GradientBorder = ({ children }: Readonly<PropsWithChildren>) => {
  return (
    <article
      className="p-1 rounded-lg bg-linear-to-r 
    from-secondary to-black
    shadow-[0_0_16px_0_#00000040]"
    >
      {children}
    </article>
  );
};

export default GradientBorder;
