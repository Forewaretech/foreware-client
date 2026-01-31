"use client";

import { useState, useCallback, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { CustomerAvatar } from "./CustomerAvatar";
import { TestimonialCard } from "./TestimonialCard";
import { NavigationDots } from "./NavigationDots";

import customer1 from "@/public/images/customers/customer_1.jpg";
import customer2 from "@/public/images/customers/customer_2.png";
import customer3 from "@/public/images/customers/customer_3.jpg";
import customer4 from "@/public/images/customers/customer_4.jpg";
import customer5 from "@/public/images/customers/customer_5.jpg";
import { StaticImageData } from "next/image";

interface TestimonialData {
  quote: string;
  customerName: string;
  customerTitle: string;
  customerImage: StaticImageData | string;
  avatarSize: "small" | "large";
}

const testimonials: TestimonialData[] = [
  {
    quote:
      "The partnership with Wragby has been rewarding. We were able to get customer insights across our business in real-time, the Wragby team were very supportive in guiding us all the way, they are indeed a trusted technology partner.",
    customerName: "Chukwuemeka Ikoro",
    customerTitle: "Head, Data and Digital Services, Betking",
    customerImage: customer1,
    avatarSize: "small",
  },
  {
    quote:
      "Working with this team has transformed our business operations. Their innovative solutions and dedicated support have exceeded our expectations at every turn.",
    customerName: "Sarah Johnson",
    customerTitle: "CEO, TechCorp Solutions",
    customerImage: customer2,
    avatarSize: "large",
  },
  {
    quote:
      "The level of professionalism and expertise demonstrated throughout our collaboration has been outstanding. They truly understand our industry needs.",
    customerName: "Michael Chen",
    customerTitle: "CTO, Innovation Labs",
    customerImage: customer3,
    avatarSize: "large",
  },
  {
    quote:
      "Their approach to problem-solving is refreshingly innovative. The results speak for themselves - our efficiency improved by 40% within the first quarter.",
    customerName: "Amanda Williams",
    customerTitle: "VP Operations, GlobalTech Inc",
    customerImage: customer4,
    avatarSize: "large",
  },
  {
    quote:
      "Exceptional service and cutting-edge solutions. They've become an invaluable extension of our team, delivering consistent value month after month.",
    customerName: "Omar Hassan",
    customerTitle: "CEO, BigThings Labs",
    customerImage: customer5,
    avatarSize: "small",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const handlePrevious = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
    setIsAutoPlaying(false);
  }, []);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  }, []);

  const handleDotClick = useCallback(
    (index: number) => {
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
      setIsAutoPlaying(false);
    },
    [currentIndex],
  );

  const handleAvatarClick = useCallback(
    (index: number) => {
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
      setIsAutoPlaying(false);
    },
    [currentIndex],
  );

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, handleNext]);

  // Avatars layout: index 0,1 on left, index 3,4 on right
  const leftAvatarIndices = [0, 1];
  const rightAvatarIndices = [3, 4];

  return (
    <section
      className="bg-muted  pb-10
    lg:pt-20"
    >
      {/* Main content area */}
      <div className="flex items-center gap-4 justify-center flex-wrap min-w-full px-4 md:px-12">
        {/* Left avatars */}
        <div className="hidden md:flex items-center gap-4">
          {leftAvatarIndices.map((idx) => (
            <CustomerAvatar
              key={testimonials[idx].customerName}
              src={testimonials[idx].customerImage}
              alt={`${testimonials[idx].customerName} profile`}
              isActive={currentIndex === idx}
              onClick={() => handleAvatarClick(idx)}
              size={testimonials[idx].avatarSize}
            />
          ))}
        </div>

        {/* Center card */}
        <div className="relative min-h-70 flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <TestimonialCard
              key={currentIndex}
              testimonial={testimonials[currentIndex]}
              direction={direction}
            />
          </AnimatePresence>
        </div>

        {/* Right avatars */}
        <div className="hidden md:flex items-center gap-4">
          {rightAvatarIndices.map((idx) => (
            <CustomerAvatar
              key={testimonials[idx].customerName}
              src={testimonials[idx].customerImage}
              alt={`${testimonials[idx].customerName} profile`}
              isActive={currentIndex === idx}
              onClick={() => handleAvatarClick(idx)}
              size={testimonials[idx].avatarSize}
            />
          ))}
        </div>
      </div>

      {/* Mobile avatars row */}
      <div className="flex md:hidden justify-center gap-3 mt-6 flex-wrap px-4">
        {testimonials.map((testimonial, index) => (
          <CustomerAvatar
            key={testimonial.customerName}
            src={testimonial.customerImage}
            alt={`${testimonial.customerName} profile`}
            isActive={currentIndex === index}
            onClick={() => handleAvatarClick(index)}
            size="small"
          />
        ))}
      </div>

      {/* Navigation */}
      <div className="mt-10 flex justify-center">
        <NavigationDots
          totalDots={testimonials.length}
          currentIndex={currentIndex}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onDotClick={handleDotClick}
        />
      </div>
    </section>
  );
};

export default Testimonials;
