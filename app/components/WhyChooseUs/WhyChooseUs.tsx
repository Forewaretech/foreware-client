import HeaderContent from "../Headers/HeaderContent";
import BaseSpacing from "../Spacing/BaseSpacing";
import GradientBorder from "./GradientBorder";
import ServiceCard from "./ServiceCard";

import bars_3 from "@/public/icons/bars_3.svg";
import globe_point from "@/public/icons/globe_point.svg";
import award from "@/public/icons/award.svg";

const WhyChooseUs = () => {
  return (
    <section className="h-187 relative">
      {/* Gradient Background */}
      <div
        className="h-127.75 bg-linear-to-r from-black to-[#00A7E5]
        absolute top-0 left-0 right-0 pt-20"
      ></div>

      <div className="container absolute top-20 flex gap-4">
        <div className=" h-147 w-63.75 bg-amber-600'">
          <ServiceCard
            image={bars_3}
            title={"Successful Projects"}
            count={"15"}
          />
          <BaseSpacing />
          <GradientBorder>
            <div className="pt-24.25 bg-black px-5 pb-5 text-white">
              <h2 className="text-[32px] font-bold text-primary">Industries</h2>
              <p className="text-xl">
                Construction (AEC)
                <br /> CPG & Retail <br />
                Financial Services <br />
                Insurance <br />
                Oil & Gas <br />
                Energy Healthcare <br /> Ports & Maritime
              </p>
            </div>
          </GradientBorder>
        </div>
        <div>
          <div className="p-10 xl:h-96">
            <HeaderContent
              variant="white"
              highlightText="Why Choose Us"
              heading="Built for Scale. Delivered with Precision."
              className="text-white font-light"
            >
              <span className="mb-2 block">
                We bring proven expertise in enterprise systems, data
                intelligence, and custom development, backed by teams who
                understand African business realities and deliver results that
                matter.
              </span>
              <span>
                We bring proven expertise in enterprise systems, data
                intelligence, and custom development, backed by teams who
                understand African business realities and deliver results that
                matter.
              </span>
            </HeaderContent>
          </div>

          <div className="flex gap-4">
            <div className=" flex-1">
              <ServiceCard
                image={globe_point}
                title="Global Reach"
                count="15"
              />
            </div>
            <div className=" flex-1">
              <ServiceCard image={award} title="Awards" count="20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
