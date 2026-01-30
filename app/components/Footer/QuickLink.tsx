import clsx from "clsx";
import Link from "next/link";
import { PropsWithChildren } from "react";

interface Props {
  href: string;
  className?: string;
}

const QuickLink = ({
  href,
  children,
  className,
}: Readonly<PropsWithChildren<Props>>) => {
  return (
    <Link
      href={href}
      className={clsx(
        "relative inline-block w-fit",
        "after:absolute after:left-1/2 after:bottom-0",
        "after:h-0.5 after:w-0 after:bg-primary",
        "after:transition-all after:duration-200 after:ease-out",
        "hover:after:left-0 hover:after:w-full",
        className,
      )}
    >
      {children}
    </Link>
  );
};

export default QuickLink;
