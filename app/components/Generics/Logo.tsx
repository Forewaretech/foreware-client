
import forewareLogo from "@/public/images/foreware_logo.svg";
import Image from "next/image";

const Logo = () => {
  return (
    <div>
        <Image src={forewareLogo} alt="Logo" />
    </div>
  )
}

export default Logo