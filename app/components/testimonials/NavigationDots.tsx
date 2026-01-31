import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import NavButton from "../Buttons/NavButton";

interface NavigationDotsProps {
  totalDots: number;
  currentIndex: number;
  onPrevious: () => void;
  onNext: () => void;
  onDotClick: (index: number) => void;
}

export const NavigationDots = ({
  totalDots,
  currentIndex,
  onPrevious,
  onNext,
  onDotClick,
}: NavigationDotsProps) => {
  return (
    <nav
      className="flex items-center gap-2 justify-center"
      aria-label="Testimonial navigation"
    >
      {/* Previous button */}

      <NavButton onClick={onPrevious} label="Previous testimonial" />

      {/* Dots */}
      <div className="flex items-center gap-2">
        {Array.from({ length: totalDots }, (_, index) => (
          <motion.button
            key={index}
            onClick={() => onDotClick(index)}
            className={`flex items-center justify-center rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-4 h-4 border border-secondary p-0.5"
                : "w-2 h-2"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to testimonial ${index + 1}`}
            aria-current={index === currentIndex ? "true" : "false"}
          >
            <div
              className={`rounded-full ${
                index === currentIndex
                  ? "w-2 h-2 bg-secondary"
                  : "w-2 h-2 bg-black hover:bg-muted-foreground"
              }`}
            />
          </motion.button>
        ))}
      </div>

      {/* Next button */}
      <NavButton onClick={onNext} label="Previous testimonial" isRight />
    </nav>
  );
};
