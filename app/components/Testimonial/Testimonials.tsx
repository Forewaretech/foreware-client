"use client";

import customer_1 from "@/public/images/customers/customer_1.jpg";
import customer_2 from "@/public/images/customers/customer_2.png";
import customer_3 from "@/public/images/customers/customer_3.jpg";
import customer_4 from "@/public/images/customers/customer_4.jpg";
import customer_5 from "@/public/images/customers/customer_5.jpg";

import { StaticImageData } from "next/image";
import { useState } from "react";
import { CompanyLogo } from "./CompanyLogo";
import { TestimonialCard } from "./TestimonialCard";
import { NavigationDots } from "./NavigationDots";

interface TestimonialDataType {
  quote: string;
  customerName: string;
  customerTitle: string;
  customerImage: CompanyLogoData;
}

export interface CompanyLogoData {
  src: StaticImageData | string;
  alt: string;
  size: "small" | "large";
}

const testimonials: TestimonialDataType[] = [
  {
    quote:
      "The partnership with Wragby has been rewarding. We were able to get customer insights across our business in real-time, the Wragby team were very supportive in guiding us all the way, they are indeed a trusted technology partner.",
    customerName: "Chukwuemeka Ikoro",
    customerTitle: "Head, Data and Digital Services, Betking",
    customerImage: {
      src: customer_1,
      alt: "Company logo 1",
      size: "small",
    },
  },
  {
    quote:
      "Working with this team has transformed our business operations. Their innovative solutions and dedicated support have exceeded our expectations at every turn.",
    customerName: "Sarah Johnson",
    customerTitle: "CEO, TechCorp Solutions",
    customerImage: {
      src: customer_2,
      alt: "Company logo 2",
      size: "large",
    },
  },
  {
    quote:
      "The level of professionalism and expertise demonstrated throughout our collaboration has been outstanding. They truly understand our industry needs.",
    customerName: "Michael Chen",
    customerTitle: "CTO, Innovation Labs",
    customerImage: {
      src: customer_3,
      alt: "Company logo 3",
      size: "large",
    },
  },
  {
    quote:
      "The level of professionalism and expertise demonstrated throughout our collaboration has been outstanding. They truly understand our industry needs.",
    customerName: "Michael Chen",
    customerTitle: "CTO, Innovation Labs",
    customerImage: {
      src: customer_4,
      alt: "Company logo 4",
      size: "large",
    },
  },
  {
    quote:
      "Nothing to say and expertise demonstrated throughout our collaboration has been outstanding. They truly understand our industry needs.",
    customerName: "Oyibo Boy",
    customerTitle: "CEO, BigThings Labs",
    customerImage: {
      src: customer_5,
      alt: "Company logo 5",
      size: "small",
    },
  },
];

const Testimonials = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentTestimonialIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentTestimonialIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentTestimonialIndex(index);
  };

  return (
    <section className="items-stretch flex flex-col bg-[#F2F2F2] pt-20 ">
      <div
        className="flex items-center gap-4 justify-center flex-wrap 
        min-w-full px-12"
      >
        <CompanyLogo
          src={testimonials[0].customerImage.src}
          alt={testimonials[0].customerImage.alt}
          size={testimonials[0].customerImage.size}
        />

        <CompanyLogo
          src={testimonials[1].customerImage.src}
          alt={testimonials[1].customerImage.alt}
          size={testimonials[1].customerImage.size}
        />

        <TestimonialCard testimonial={testimonials[currentTestimonialIndex]} />

        <CompanyLogo
          src={testimonials[3].customerImage.src}
          alt={testimonials[3].customerImage.alt}
          size={testimonials[3].customerImage.size}
        />

        <CompanyLogo
          src={testimonials[4].customerImage.src}
          alt={testimonials[4].customerImage.alt}
          size={testimonials[4].customerImage.size}
        />
      </div>

      <NavigationDots
        totalDots={testimonials.length}
        currentIndex={currentTestimonialIndex}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onDotClick={handleDotClick}
        className="self-center mt-10"
      />
    </section>
  );
};

export default Testimonials;
