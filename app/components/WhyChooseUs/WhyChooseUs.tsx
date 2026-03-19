import HeaderContent from "../Headers/HeaderContent";
import BaseSpacing from "../Spacing/BaseSpacing";
import GradientBorder from "./GradientBorder";
import ServiceCard from "./ServiceCard";

import bars_3 from "@/public/icons/bars_3.svg";
import globe_point from "@/public/icons/globe_point.svg";
import award from "@/public/icons/award.svg";

const WhyChooseUs = () => {
  return (
    <section className="lg:h-187 relative">
      {/* Gradient Background */}
      <div
        className="lg:h-127.75 bg-linear-to-r from-black to-[#00A7E5]
        lg:absolute top-0 left-0 right-0 lg:pt-20"
      ></div>

      <div
        className="lg:h-127.75 bg-linear-to-r from-black to-[#00A7E5] 
        lg:pt-20"
      >
        <div
          className="container flex flex-col gap-4 py-6 right-0 left-0
        lg:absolute lg:top-20 lg:flex-row lg:py-0"
        >
          <div className=" lg:h-147 lg:w-63.75">
            <div className="my-4">
              <ServiceCard
                image={bars_3}
                title={"Successful Projects"}
                count={"15"}
              />
            </div>
            <GradientBorder>
              <div className="pt-24.25 bg-black px-5 pb-5 text-white">
                <h2 className="text-[32px] font-bold text-primary">
                  Industries
                </h2>
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
            <div
              className="py-10 xl:h-96
            lg:p-10"
            >
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
      </div>
    </section>
  );
};

export default WhyChooseUs;
