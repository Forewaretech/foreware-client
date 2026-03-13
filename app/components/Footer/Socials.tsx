import {
  Instagram,
  Linkedin,
  Facebook,
  X,
  Youtube,
  Twitter,
  XIcon,
} from "lucide-react";
import IconHolder from "../ui/icon_holder";
import Link from "next/link";
import Image from "next/image";

import x_icon from "@/public/icons/x_icon.svg";
import in_icon from "@/public/icons/in_icon.svg";
import facebook_icon from "@/public/icons/facebook_icon.svg";
import youtube_icon from "@/public/icons/youtube_icon.svg";
import instagram_icon from "@/public/icons/instagram_icon.svg";

const Socials = () => {
  return (
    <div className="flex gap-2 items-center">
      <Link href="https://www.linkedin.com/company/foreware-technologies">
        <IconHolder icon={<Image src={in_icon} alt="LinkedIn icon" />} />
      </Link>
      <Link href="">
        <IconHolder
          icon={<Image src={instagram_icon} alt="Instagram icon" />}
        />
      </Link>
      <Link href="">
        <IconHolder icon={<Image src={facebook_icon} alt="Facebook icon" />} />
      </Link>
      <Link href="">
        <IconHolder icon={<Image src={x_icon} alt="X icon" />} />
      </Link>
      <Link href="">
        <IconHolder icon={<Image src={youtube_icon} alt="Youtube icon" />} />
      </Link>
    </div>
  );
};

export default Socials;
