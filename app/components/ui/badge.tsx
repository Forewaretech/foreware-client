import { PropsWithChildren } from "react";

const Badge = ({ children }: Readonly<PropsWithChildren>) => {
  return (
    <div
      className="px-2 h-4.5 rounded-full bg-red-600 text-whit text-xs
    flex items-start justify-center"
    >
      <span>{children}</span>
    </div>
  );
};

export default Badge;
