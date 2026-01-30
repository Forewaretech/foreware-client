import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
}
const IconHolder = ({ icon }: Readonly<Props>) => {
  return (
    <div
      className="h-10 w-10 rounded-lg flex items-center justify-center
        bg-dark-2 text-white hover:bg-red-500 duration-300"
    >
      <span>{icon}</span>
    </div>
  );
};

export default IconHolder;
