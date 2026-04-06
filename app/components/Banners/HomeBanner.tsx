"use client";

import homeBanner1 from "@/public/images/banners/home_banner_1.webp";
import homeBanner2 from "@/public/images/banners/home_banner_2.webp";
import homeBanner3 from "@/public/images/banners/home_banner_3.webp";
import homeBanner4 from "@/public/images/banners/home_banner_4.webp";
import homeBanner5 from "@/public/images/banners/home_banner_5.webp";
import homeBanner6 from "@/public/images/banners/home_banner_6.webp";

import PageBanner from "./PageBanner";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const bannerData = [
  {
    heading: "Turn Data Into Your Competitive Edge.",
    text: "No matter the size of your business, we make sure technology never holds you back. From system deployments to custom software, AI, and day-to-day IT support...",
    buttonText: "Explore our solutions",
    image: homeBanner1,
  },
  {
    heading: "Unlock Your Data",
    text: "Our analytics and AI solutions transform your data into clear insights that drive smarter decisions and better outcomes.",
    buttonText: "Unlock Your Data",
    image: homeBanner2,
  },
  {
    heading: "Integration built for scale.",
    text: "Enterprise-grade integrations and APIs that keep systems aligned as your business grows.",
    buttonText: "Find out more",
    image: homeBanner3,
  },
  {
    heading: "Reliable IT Support",
    text: "Our IT support and consulting solutions ensure your operations remain uninterrupted, your team stays productive, and your business keeps moving.",
    buttonText: "Get Reliable Support",
    image: homeBanner4,
  },
  {
    heading: "Partnership That Drives Results.",
    text: "Your growth demands more than a vendor; it requires a strategic partner.",
    buttonText: "Let's talk strategy",
    image: homeBanner5,
  },
  {
    heading: "We Build System That Scale.",
    text: "We partner with businesses of all sizes to create custome software, data solutions, and AI systems that grow with your business.",
    buttonText: "Explore our solutions",
    image: homeBanner6,
  },
];

const HomeBanner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % bannerData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

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
            bannerImage={{ image: current.image, alt: "banner" }}
            sliders={bannerData.map((_, i) => i.toString())}
            currentIndex={index}
          />
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
export default HomeBanner;
