import React from "react";
import TileContent from "../components/Headers/TileContent";
import about_2 from "@/public/images/about_2.png";

const OurPeople = () => {
  return (
    <section className="container">
      <TileContent
        heading="Leading from the Front"
        highlightText="Our Story"
        image={{ src: about_2, alt: "Foreware Technologies - Our Story" }}
        imageClassName="n"
        content={
          <div>
            <p>
              Behind every solution is a team of experienced professionals
              focused on solving complex business and technology challenges. Our
              teams bring together deep technical expertise, industry insight,
              and disciplined execution to deliver solutions that perform in
              real operating environments.
            </p>
            <p className="my-4">
              We don't just deliver technology, we build long-term partnerships.
              When you work with Foreware, you gain a committed team that takes
              ownership, stays engaged, and is invested in your success beyond
              delivery.
            </p>
          </div>
        }
      />
    </section>
  );
};

export default OurPeople;
