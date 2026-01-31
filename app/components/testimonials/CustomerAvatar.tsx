import { motion } from "framer-motion";
import Image from "next/image";

interface CustomerAvatarProps {
  src: string;
  alt: string;
  isActive: boolean;
  onClick: () => void;
  size: "small" | "large";
  floatDelay?: number;
}

export const CustomerAvatar = ({
  src,
  alt,
  isActive,
  onClick,
  size,
  floatDelay = 0,
}: CustomerAvatarProps) => {
  const containerSize =
    size === "small" ? "w-[60px] h-[60px]" : "w-[110px] h-[110px]";
  const imageSize = size === "small" ? "w-11 h-11" : "w-[94px] h-[94px]";

  return (
    <motion.button
      onClick={onClick}
      className="relative group cursor-pointer focus:outline-none focus-visible:ring-2 
      focus-visible:ring-secondary focus-visible:ring-offset-2 rounded-lg"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* White card container */}
      <div
        className={`${containerSize} flex items-center justify-center bg-card rounded-lg border 
        border-border transition-all duration-300 ${
          isActive ? "ring-2 ring-secondary shadow-md" : "hover:shadow-md"
        }`}
      >
        {/* Inner image container */}
        <div
          className={`${imageSize} rounded-lg overflow-hidden border border-border`}
        >
          <Image src={src} alt={alt} className="w-full h-full object-cover" />
        </div>
      </div>
    </motion.button>
  );
};
