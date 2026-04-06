import custom_software from "@/public/images/services/custom_software.svg";

import Image from "next/image";

const CustomSoftware = () => {
  return (
    <div className="min-w-1/2">
      <Image
        src={custom_software}
        alt="Foreware Technologies - custom software development Africa"
        className=" w-full "
      />
    </div>
  );
};

export default CustomSoftware;
