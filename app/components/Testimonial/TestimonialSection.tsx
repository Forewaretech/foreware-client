"use client";

import React, { useState } from "react";
import { CompanyLogo } from "./CompanyLogo";
import { TestimonialCard } from "./TestimonialCard";
import { NavigationDots } from "./NavigationDots";

import customer_1 from "@/public/images/customers/customer_1.jpg";
import customer_2 from "@/public/images/customers/customer_2.png";
import customer_3 from "@/public/images/customers/customer_3.jpg";
import customer_4 from "@/public/images/customers/customer_4.jpg";
import customer_5 from "@/public/images/customers/customer_5.jpg";

import { StaticImageData } from "next/image";

interface TestimonialData {
  quote: string;
  customerName: string;
  customerTitle: string;
  customerImage: StaticImageData | string;
}

interface CompanyLogoData {
  src: string;
  alt: string;
  size: "small" | "large";
}

const testimonials: TestimonialData[] = [
  {
    quote:
      "The partnership with Wragby has been rewarding. We were able to get customer insights across our business in real-time, the Wragby team were very supportive in guiding us all the way, they are indeed a trusted technology partner.",
    customerName: "Chukwuemeka Ikoro",
    customerTitle: "Head, Data and Digital Services, Betking",
    customerImage: customer_1,
  },
  {
    quote:
      "Working with this team has transformed our business operations. Their innovative solutions and dedicated support have exceeded our expectations at every turn.",
    customerName: "Sarah Johnson",
    customerTitle: "CEO, TechCorp Solutions",
    customerImage: customer_2,
  },
  {
    quote:
      "The level of professionalism and expertise demonstrated throughout our collaboration has been outstanding. They truly understand our industry needs.",
    customerName: "Michael Chen",
    customerTitle: "CTO, Innovation Labs",
    customerImage: customer_3,
  },
];

const companyLogos: CompanyLogoData[] = [
  {
    src: "https://api.builder.io/api/v1/image/assets/83b35b25ebb44659aa674fb7854b15ec/62f2c49a2d9099beceb29ed6b9155bf7a7ecd547?placeholderIfAbsent=true",
    alt: "Company logo 1",
    size: "small",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/83b35b25ebb44659aa674fb7854b15ec/242a33acc6a51c634ab16b6d0dc15d7f495b3c80?placeholderIfAbsent=true",
    alt: "Company logo 2",
    size: "large",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/83b35b25ebb44659aa674fb7854b15ec/0ba0458d96ef3308636e7d40c7d60d2f059af6f5?placeholderIfAbsent=true",
    alt: "Company logo 3",
    size: "large",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/83b35b25ebb44659aa674fb7854b15ec/463820acc0aa81be0f4201cea8092e3d5278e132?placeholderIfAbsent=true",
    alt: "Company logo 4",
    size: "small",
  },
];

export const TestimonialSection: React.FC = () => {
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
    <section className="items-stretch flex flex-col bg-[#F2F2F2] px-[200px] py-20 max-md:px-5">
      <div className="flex w-full items-center gap-4 justify-center flex-wrap max-md:max-w-full">
        <CompanyLogo
          src={companyLogos[0].src}
          alt={companyLogos[0].alt}
          size={companyLogos[0].size}
          className="self-stretch my-auto"
        />

        <CompanyLogo
          src={companyLogos[1].src}
          alt={companyLogos[1].alt}
          size={companyLogos[1].size}
          className="self-stretch my-auto"
        />

        <TestimonialCard
          testimonial={testimonials[currentTestimonialIndex]}
          className="self-stretch my-auto"
        />

        <CompanyLogo
          src={companyLogos[2].src}
          alt={companyLogos[2].alt}
          size={companyLogos[2].size}
          className="self-stretch my-auto"
        />

        <CompanyLogo
          src={companyLogos[3].src}
          alt={companyLogos[3].alt}
          size={companyLogos[3].size}
          className="self-stretch my-auto"
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
