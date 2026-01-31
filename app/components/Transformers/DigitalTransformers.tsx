import Image from "next/image";

import digital_transform_bg from "@/public/images/digital_transform_bg.jpg";
import digital_transformers from "@/public/images/digital_transformers.png";
import Heading from "../Headers/Headings";
import BaseSpacing from "../Spacing/BaseSpacing";
import Button from "../Buttons/Button";

const DigitalTransformers = () => {
  return (
    <section className="container relative lg:pt-20">
      <div
        className="relative border-12 border-white rounded-4xl h-80
        shadow-[0_0_80px_0_#00000040] overflow-hidden 
        
        lg:h-100"
      >
        <Image
          src={digital_transform_bg}
          alt="digital transform background"
          className="h-full w-full object-cover"
        />

        <div
          className=" absolute left-0 top-0 bottom-0 text-white px-4
          z-40 lg:px-20 flex items-center"
        >
          <div className=" lg:w-100">
            <Heading variant="h2">
              Start Your Digital Transformation Journey.
            </Heading>
            <BaseSpacing />
            <p className="mb-6">
              Strong partnerships start with honest conversations. Let's discuss
              your challenges, explore what's possible, and map out how
              technology can accelerate your business goals.
            </p>
            <Button>Get Started Today</Button>
          </div>
        </div>
      </div>

      <div className="absolute right-36 -top-7 z-20">
        <div
          className="hidden relative overflow-hidden
        lg:block"
        >
          <Image
            src={digital_transformers}
            alt="digital transformers"
            className="h-auto w-125 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default DigitalTransformers;
