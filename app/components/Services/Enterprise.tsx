import Image from "next/image";
import { motion } from "framer-motion"; // Optional for the animation part

import enterprise_1 from "@/public/images/services/enterprise_1.jpg";
import enterprise_2 from "@/public/images/services/enterprise_2.jpg";

// const Enterprise = () => {
//   return (
//     // Set a defined aspect ratio container so the layers stay proportional
//     <div className="relative w-[500px] aspect-[4/3] mx-auto">
//       {/* 1. LIGHT GRAY BACKGROUND BLOCK (Layered behind everything) */}
//       <div className="absolute top-[20%] right-[10%] w-[60%] h-[70%] bg-[#E5E7EB] rounded-2xl z-0" />

//       {/* 2. TOP-LEFT IMAGE (enterprise_1) */}
//       <div className="absolute top-0 left-0 w-[55%] h-[55%] rounded-3xl overflow-hidden shadow-xl z-20 border-4 border-white">
//         <Image
//           src={enterprise_1}
//           alt="Enterprise Systems That Scale"
//           className="w-full h-full object-cover"
//           placeholder="blur"
//         />
//       </div>

//       {/* 3. MIDDLE-RIGHT IMAGE (enterprise_2) */}
//       <div className="absolute top-[30%] right-0 w-[55%] h-[55%] rounded-3xl overflow-hidden shadow-lg z-10 border-4 border-white">
//         <Image
//           src={enterprise_2}
//           alt="Data Analytics Dashboard"
//           className="w-full h-full object-cover"
//           placeholder="blur"
//         />
//       </div>

//       {/* 4. DECORATIVE NAVY BLUE SQUARE (Bottom-Left overlap) */}
//       <div className="absolute bottom-[10%] left-[10%] w-[35%] h-[35%] bg-[#01367C] rounded-3xl z-30 shadow-2xl" />
//     </div>
//   );
// };

import enterprise_scale from "@/public/images/services/enterprise_scale.svg";

const Enterprise = () => {
  return (
    <div className="min-w-1/2">
      <Image
        src={enterprise_scale}
        alt="Foreware Technologies - enterprise software solutions Nigeria"
        className=" w-full "
      />
    </div>
  );
};

export default Enterprise;
