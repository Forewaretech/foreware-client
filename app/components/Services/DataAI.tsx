import Image from "next/image";

import data_ai from "@/public/images/services/data_ai.svg";

const DataAI = () => {
  return (
    <div className="min-w-1/2">
      <Image
        src={data_ai}
        alt="Foreware Technologies - data and AI solutions for business"
        className=" w-full "
      />
    </div>
  );
};

export default DataAI;
