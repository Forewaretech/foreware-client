import languageEnglishSvg from "@/public/icons/language_english.svg";
import { ArrowDown, ArrowDown2 } from "iconsax-react";
import Image from "next/image";


const LanguageSelection = () => {
  return (
    <div className=" text-xs">
      <div className="flex gap-2 items-center">
        <Image src={languageEnglishSvg} alt="English" />
        <span>English</span>
        <ArrowDown2 size={12} color="currentColor" />
      </div>
    </div>
  );
};

export default LanguageSelection;
