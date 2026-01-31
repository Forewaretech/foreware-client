import Image from "next/image";
import React from "react";
import { CompanyLogoData } from "./Testimonials";

interface TestimonialData {
  quote: string;
  customerName: string;
  customerTitle: string;
  customerImage: CompanyLogoData;
}

interface TestimonialCardProps {
  testimonial: TestimonialData;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  className = "",
}) => {
  return (
    <article
      className={`border bg-[rgba(255,255,255,0.80)] min-w-60 overflow-hidden w-[301px] p-4 rounded-lg border-solid border-[#E6E6E6] ${className}`}
    >
      <blockquote className="w-full font-normal">
        <div className="text-black text-4xl" aria-hidden="true">
          "
        </div>
        <p className="text-black text-xs">{testimonial.quote}</p>
      </blockquote>

      <hr className="border bg-[#E6E6E6] min-h-px w-full mt-3 border-[rgba(230,230,230,1)] border-solid" />

      <footer className="flex w-full gap-3 text-xs mt-3">
        <Image
          src={testimonial.customerImage.src}
          alt={`${testimonial.customerName} profile`}
          className="aspect-[1] object-contain w-14 shrink-0 rounded-lg"
        />
        <div className="flex-1 shrink basis-[0%]">
          <cite className="text-black font-bold not-italic">
            {testimonial.customerName}
          </cite>
          <div className="text-[#00A7E5] italic font-normal mt-1.25">
            {testimonial.customerTitle}
          </div>
        </div>
      </footer>
    </article>
  );
};
