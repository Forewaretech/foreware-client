import Image from "next/image";

import integration from "@/public/images/services/integration.svg";

const Integration = () => {
  return (
    <div className="min-w-1/2">
      <Image
        src={integration}
        alt="Foreware Technologies - API integration services Nigeria"
        className=" w-full "
      />
    </div>
  );
};

export default Integration;
