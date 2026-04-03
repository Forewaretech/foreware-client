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
import maleAvatar from "@/public/images/male-avatar.jpg";

import { StaticImageData } from "next/image";

interface TestimonialData {
  quote: string;
  customerName: string;
  customerTitle: string;
  customerImage: StaticImageData | string;
  avatarSize: "small" | "large";
  initials?: string;
}

const testimonials: TestimonialData[] = [
  {
    quote:
      "Managing multiple projects used to be a constant challenge for us. Foreware stepped in by providing system support and integrating our enterprise solution with a cloud-based HR system. Now our team has reliable access to the information they need, and having a dependable partner has made a real difference in how we operate.",
    customerName: "Olamide E.",
    initials: "O. E.",
    customerTitle: "Application Support Manager, UPDC Plc",
    customerImage: maleAvatar,
    avatarSize: "small",
  },
  {
    quote:
      "Foreware supported us in extracting data from a cloud-based system, which we then imported into our data warehouse. They guided the process and helped us structure the data in the right format, enabling seamless synchronization on our end. This made it easier for our team to generate key reports and improved our operations.",
    customerName: "Adebowale E.",
    customerTitle: "Data Analyst, Custodian & Allied Insurance Ltd",
    customerImage: maleAvatar,
    initials: "A. E.",
    avatarSize: "large",
  },
  {
    quote:
      "The level of professionalism and expertise demonstrated throughout our collaboration has been outstanding. They truly understand our industry needs.",
    customerName: "Michael Chen",
    customerTitle: "CTO, Innovation Labs",
    customerImage: maleAvatar,
    avatarSize: "large",
  },
  {
    quote:
      "Their approach to problem-solving is refreshingly innovative. The results speak for themselves - our efficiency improved by 40% within the first quarter.",
    customerName: "Amanda Williams",
    customerTitle: "VP Operations, GlobalTech Inc",
    customerImage: maleAvatar,
    avatarSize: "large",
  },
  {
    quote:
      "Exceptional service and cutting-edge solutions. They've become an invaluable extension of our team, delivering consistent value month after month.",
    customerName: "Omar Hassan",
    customerTitle: "CEO, BigThings Labs",
    customerImage: maleAvatar,
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
      className="bg-muted pb-10
    lg:pt-20"
    >
      {/* Main content area */}
      <div className="flex items-center gap-4 justify-center flex-wrap min-w-full px-4">
        {/* Left avatars */}
        <div className="hidden md:flex items-center gap-4">
          {leftAvatarIndices.map((idx) => (
            <CustomerAvatar
              key={testimonials[idx].customerName}
              src={testimonials[idx].customerImage}
              alt={`${testimonials[idx].customerName} profile`}
              initials={testimonials[idx].initials}
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
              initials={testimonials[idx].initials}
              isActive={currentIndex === idx}
              onClick={() => handleAvatarClick(idx)}
              size={testimonials[idx].avatarSize}
            />
          ))}
        </div>
      </div>

      {/* Mobile avatars row */}
      <div className="flex md:hidden justify-center gap-3 mt-6 flex-wrap">
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
