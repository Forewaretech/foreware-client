"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
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
  onDotClick?: (index: number) => void;
}

const PageBanner = ({
  bannerImage,
  heading,
  text,
  buttonText,
  sliders,
  href,
  onDotClick,
  currentIndex,
}: Props) => {
  return (
    <div className="h-167.25 relative w-full overflow-hidden">
      {/* IMAGE ANIMATION: Scaling In */}
      <motion.div
        // REVERSED: Starts smaller, scales larger
        initial={{ scale: 1, opacity: 0.8 }}
        animate={{ scale: 1.2, opacity: 1 }}
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

      <section className="container absolute inset-0 z-10 pt-24">
        {/* <BannerNav /> */}

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
            {sliders.map((_, i) => {
              const isActive = i === currentIndex;

              return (
                <motion.button
                  key={i}
                  animate={{
                    height: isActive ? 8 : 4,
                    backgroundColor: isActive ? "#00A7E5" : "#FFFFFF",
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`${isActive ? "border border-none" : "border-gray-300"} w-5 rounded-xs `}
                  onClick={() => onDotClick?.(i)}
                />
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};

export default PageBanner;
