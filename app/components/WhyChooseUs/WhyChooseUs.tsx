import HeaderContent from "../Headers/HeaderContent";
import GradientBorder from "./GradientBorder";
import ServiceCard from "./ServiceCard";

import award from "@/public/icons/award.svg";
import bars_3 from "@/public/icons/bars_3.svg";
import globe_point from "@/public/icons/globe_point.svg";

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
        lg:absolute lg:top-20 lg:flex-row lg:py-0 "
        >
          <div className="order-1 lg-order-0 lg:h-147 lg:min-w-63.75">
            <div className="my-4">
              <ServiceCard
                image={bars_3}
                title={"Successful Projects"}
                count={"10"}
              />
            </div>
            <GradientBorder>
              <div className="pt-8 bg-black px-5 pb-5 text-white">
                <h2 className="text-[32px] font-bold text-primary">
                  Industries
                </h2>
                <p className="text-xl">
                  FMCG
                  <br /> Oil & Gas <br />
                  Retail & Logistics <br />
                  E-Commerce <br />
                  Engineering & Construction <br />
                  Financial Services <br /> Professional Services <br />
                  Real Estate
                </p>
              </div>
            </GradientBorder>
          </div>
          <div className=" order-0 lg:order-1">
            <div
              className="py-10 xl:h-96
            lg:p-10"
            >
              <HeaderContent
                variant="white"
                highlightText="Why Choose Us"
                heading="We Make Technology Your Biggest Business Enabler."
                className="text-white font-light min-w-full"
                removeMaxWidth
              >
                <ul className=" text-base grid grid-cols-2 gap-x-8 gap-y-4">
                  <li>
                    <span className=" font-bold">
                      1. We Start With Your Problem:
                    </span>{" "}
                    Before anything else, we listen. We take time to understand
                    your business, your challenges, and what success looks like
                    for you.
                  </li>
                  <li>
                    <span className=" font-bold">
                      2. We Recommend Only What You Need:
                    </span>{" "}
                    We take time to match the right solution to your business
                    requirement, so every investment you make delivers real
                    value.
                  </li>

                  <li>
                    <span className=" font-bold">
                      3. We Deliver With Precision:
                    </span>{" "}
                    Every project is executed with care, on time, and within
                    budget. Because your trust means everything to us.
                  </li>

                  <li>
                    <span className=" font-bold">
                      4. We Stay Involved After Delivery:
                    </span>{" "}
                    Going live is just the beginning. We stick around to ensure
                    everything works exactly as it should.
                  </li>
                </ul>
              </HeaderContent>
            </div>

            <div className="flex gap-4">
              <div className=" flex-1">
                <ServiceCard
                  image={globe_point}
                  title="Industries Served"
                  count="8"
                />
              </div>
              <div className=" flex-1">
                <ServiceCard
                  image={award}
                  title="IT Supports Available"
                  count="24/7"
                  removePlus
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
