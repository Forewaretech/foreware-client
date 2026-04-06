import Image from "next/image";

import support_strategy from "@/public/images/services/support_strategy.svg";

const SupportStrategy = () => {
  return (
    <div className="min-w-1/2">
      <Image
        src={support_strategy}
        alt="Foreware Technologies - IT support and consulting Nigeria"
        className=" w-full "
      />
    </div>
  );
};

export default SupportStrategy;
