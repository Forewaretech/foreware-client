import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  onClick?: () => void;
  label?: string;
  isRight?: boolean;
}

const NavButton = ({ label, isRight, onClick }: Readonly<Props>) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="w-10 h-10 rounded-full border-2 
        flex items-center justify-center border-black
        text-foreground transition-colors duration-200
        hover:bg-black hover:text-white"
        aria-label={label}
      >
        {isRight ? (
          <ChevronRight className="w-4 h-4" />
        ) : (
          <ChevronLeft className="w-4 h-4" />
        )}
      </button>
    </div>
  );
};

export default NavButton;
