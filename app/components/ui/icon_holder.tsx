import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  size?: "sm" | "md" | "lg";
}
const IconHolder = ({ icon, size = "sm" }: Readonly<Props>) => {
  const sizes: { [key in "sm" | "md" | "lg"]: string } = {
    sm: "min-h-10 min-w-10",
    md: "min-h-12.5 min-w-12.5",
    lg: "min-h-20 min-w-20",
  };
  return (
    <div
      className={`${sizes[size]} rounded-lg flex items-center 
        justify-center bg-dark-2 text-white hover:bg-red-500 
        duration-300`}
    >
      <span>{icon}</span>
    </div>
  );
};

export default IconHolder;
