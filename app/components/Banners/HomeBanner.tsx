"use client";

import homeBanner1 from "@/public/images/banners/home_banner_1.webp";
import homeBanner2 from "@/public/images/banners/home_banner_2.webp";
import homeBanner3 from "@/public/images/banners/home_banner_3.webp";
import homeBanner4 from "@/public/images/banners/home_banner_4.webp";
import homeBanner5 from "@/public/images/banners/home_banner_5.webp";
import homeBanner6 from "@/public/images/banners/home_banner_6.webp";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import PageBanner from "./PageBanner";

const bannerData = [
  {
    heading: "Turn Data Into Your Competitive Edge.",
    text: "No matter the size of your business, we make sure technology never holds you back. From system deployments to custom software, AI, and day-to-day IT support...",
    buttonText: "Explore our solutions",
    image: {
      src: homeBanner1,
      alt: "Foreware Technologies - data analytics and AI solutions Nigeria",
    },
  },
  {
    heading: "Unlock Your Data",
    text: "Our analytics and AI solutions transform your data into clear insights that drive smarter decisions and better outcomes.",
    buttonText: "Unlock Your Data",
    image: {
      src: homeBanner2,
      alt: "Foreware Technologies - data and AI solutions for business",
    },
  },
  {
    heading: "Integration built for scale.",
    text: "Enterprise-grade integrations and APIs that keep systems aligned as your business grows.",
    buttonText: "Find out more",
    image: {
      src: homeBanner3,
      alt: "Foreware Technologies - system integration solutions Nigeria",
    },
  },
  {
    heading: "Reliable IT Support",
    text: "Our IT support and consulting solutions ensure your operations remain uninterrupted, your team stays productive, and your business keeps moving.",
    buttonText: "Get Reliable Support",
    image: {
      src: homeBanner4,
      alt: "Foreware Technologies – IT support and consulting Nigeria",
    },
  },
  {
    heading: "Partnership That Drives Results.",
    text: "Your growth demands more than a vendor; it requires a strategic partner.",
    buttonText: "Let's talk strategy",
    image: {
      src: homeBanner5,
      alt: "Foreware Technologies - IT consulting and digital transformation Africa",
    },
  },
  {
    heading: "We Build Systems That Scale.",
    text: "We partner with businesses of all sizes to create custome software, data solutions, and AI systems that grow with your business.",
    buttonText: "Explore our solutions",
    image: {
      src: homeBanner6,
      alt: "Foreware Technologies - system integration solutions Nigeria",
    },
  },
];

const HomeBanner = () => {
  const [index, setIndex] = useState(0);

  // Use a helper function to change slides
  const goToSlide = (newIndex: number) => {
    setIndex(newIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % bannerData.length);
    }, 6000);

    // This cleanup is crucial when index changes via clicks
    return () => clearInterval(timer);
  }, [index]);

  const current = bannerData[index];

  return (
    <section className="relative overflow-hidden h-167.25">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <PageBanner
            heading={current.heading}
            text={current.text}
            buttonText={current.buttonText}
            bannerImage={{
              image: current.image.src,
              alt: current.image.alt,
            }}
            currentIndex={index}
            onDotClick={goToSlide}
            sliders={bannerData.map((_, i) => i.toString())}
          />
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
export default HomeBanner;
