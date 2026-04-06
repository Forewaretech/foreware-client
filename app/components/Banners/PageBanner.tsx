"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import BannerNav from "./BannerNav";
import BannerContent from "./BannerContent";

interface Props {
  bannerImage: { image: StaticImageData | string; alt: string };
  heading: string;
  text: string;
  buttonText?: string;
  sliders?: string[];
  currentIndex?: number;
  href?: string;
  alt?: string;
}

const PageBanner = ({
  bannerImage,
  heading,
  text,
  buttonText,
  sliders,
  href,
  alt,
  currentIndex,
}: Props) => {
  return (
    <div className="h-167.25 relative w-full overflow-hidden">
      {/* IMAGE ANIMATION: Scaling In */}
      <motion.div
        // REVERSED: Starts smaller, scales larger
        initial={{ scale: 1, opacity: 0.8 }}
        animate={{ scale: 1.2, opacity: 1 }}
        // initial={{ scale: 1.2 }}
        // animate={{ scale: 1 }}

        transition={{ duration: 6, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src={bannerImage.image}
          alt={bannerImage.alt}
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      <section className="container absolute inset-0 z-10 pt-10">
        <BannerNav />

        {/* CONTENT ANIMATION: Layout prop handles height/width shifts */}
        <motion.div
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-20 max-w-2xl"
        >
          <BannerContent
            heading={heading}
            text={text}
            buttonText={buttonText}
            href={href}
          />
        </motion.div>

        {/* SLIDER DOTS */}
        {sliders && (
          <div className="flex items-center gap-2 mt-4">
            {sliders.map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  width: i === currentIndex ? 20 : 12,
                  backgroundColor:
                    i === currentIndex ? "#YOUR_PRIMARY" : "#FFFFFF",
                }}
                className="h-1.5 rounded-full border border-gray-300"
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default PageBanner;
