import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

import quote from "@/public/icons/quote.svg";

interface TestimonialData {
  quote: string;
  customerName: string;
  customerTitle: string;
  customerImage: StaticImageData | string;
}

interface TestimonialCardProps {
  testimonial: TestimonialData;
  direction: number;
}

export const TestimonialCard = ({
  testimonial,
  direction,
}: TestimonialCardProps) => {
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  return (
    <motion.article
      key={testimonial.customerName}
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
      className="w-75.25 bg-card/80 backdrop-blur-sm border border-line rounded-lg p-4"
    >
      {/* Quote mark */}
      <blockquote className="w-full">
        <Image src={quote} alt="Quote" />
        <p className="text-foreground text-xs leading-relaxed mt-1">
          {testimonial.quote}
        </p>
      </blockquote>

      {/* Divider */}
      <hr className="border-line my-3" />

      {/* Customer info */}
      <footer className="flex items-center gap-3">
        <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0">
          <Image
            src={testimonial.customerImage}
            alt={`${testimonial.customerName} profile`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <cite className="block text-foreground text-xs font-bold not-italic">
            {testimonial.customerName}
          </cite>
          <span className="text-primary text-xs italic mt-1 block">
            {testimonial.customerTitle}
          </span>
        </div>
      </footer>
    </motion.article>
  );
};
