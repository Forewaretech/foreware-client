import React from "react";

interface NavigationDotsProps {
  totalDots: number;
  currentIndex: number;
  onPrevious: () => void;
  onNext: () => void;
  onDotClick: (index: number) => void;
  className?: string;
}

export const NavigationDots: React.FC<NavigationDotsProps> = ({
  totalDots,
  currentIndex,
  onPrevious,
  onNext,
  onDotClick,
  className = "",
}) => {
  return (
    <nav
      className={`flex items-center gap-2 justify-center ${className}`}
      aria-label="Testimonial navigation"
    >
      <button
        onClick={onPrevious}
        className="justify-center items-center aspect-[1/1] bg-white flex min-h-10 flex-col overflow-hidden w-10 h-10 px-2.5 rounded-[100px] border-2 border-solid border-black hover:bg-gray-50 transition-colors"
        aria-label="Previous testimonial"
      >
        <div className="flex min-h-5 w-5 items-center gap-2.5 justify-center">
          <img
            src="https://api.builder.io/api/v1/image/assets/83b35b25ebb44659aa674fb7854b15ec/8bf85ffabcdd90da452cde4be9b571bff50a5656?placeholderIfAbsent=true"
            alt=""
            className="aspect-[2/1] object-contain w-1 stroke-[2px] stroke-black"
            aria-hidden="true"
          />
        </div>
      </button>

      {Array.from({ length: totalDots }, (_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`flex shrink-0 h-2 rounded-[100px] transition-all hover:scale-110 ${
            index === currentIndex
              ? "items-center border gap-2.5 overflow-hidden w-4 h-4 p-1 border-solid border-[#C4A742]"
              : "w-2 bg-black"
          }`}
          aria-label={`Go to testimonial ${index + 1}`}
          aria-current={index === currentIndex ? "true" : "false"}
        >
          {index === currentIndex && (
            <div className="flex min-h-2 w-2 h-2 bg-[#C4A742] rounded-[100px]" />
          )}
        </button>
      ))}

      <button
        onClick={onNext}
        className="justify-center items-center aspect-[1/1] bg-white flex min-h-10 flex-col overflow-hidden w-10 h-10 px-2.5 rounded-[100px] border-2 border-solid border-black hover:bg-gray-50 transition-colors"
        aria-label="Next testimonial"
      >
        <div className="flex min-h-5 w-5 items-center gap-2.5 justify-center">
          <img
            src="https://api.builder.io/api/v1/image/assets/83b35b25ebb44659aa674fb7854b15ec/457f94d2618b6f49c971ff2ceda0b5df7742274d?placeholderIfAbsent=true"
            alt=""
            className="aspect-[2/1] object-contain w-1 stroke-[2px] stroke-black"
            aria-hidden="true"
          />
        </div>
      </button>
    </nav>
  );
};
