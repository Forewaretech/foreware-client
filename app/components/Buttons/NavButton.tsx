import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  onClick?: () => void;
  label?: string;
  isRight?: boolean;
  disabled?: boolean;
}

const NavButton = ({ label, isRight, onClick, disabled }: Readonly<Props>) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-10 h-10 rounded-full border-2
        flex items-center justify-center border-black
        text-foreground transition-colors duration-200
        hover:bg-black hover:text-white
        disabled:opacity-30 disabled:cursor-not-allowed
        disabled:hover:bg-transparent disabled:hover:text-foreground"
      aria-label={label ?? (isRight ? "Next" : "Previous")}
    >
      {isRight ? (
        <ChevronRight className="w-4 h-4" />
      ) : (
        <ChevronLeft className="w-4 h-4" />
      )}
    </button>
  );
};

export default NavButton;
