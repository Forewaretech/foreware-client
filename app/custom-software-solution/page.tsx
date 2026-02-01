import PageBanner from "../components/Banners/PageBanner";

import custom_soft_dev from "@/public/images/banners/customer_soft_dev.png";

const CustomSoftwareSolutiolnPage = () => {
  return (
    <main>
      <PageBanner
        bannerImage={{
          image: custom_soft_dev,
          alt: "custom software development banner",
        }}
        heading={"Tailored Software Solutions That Match Your Exact Needs"}
        text={
          "Custom software designed to support your business operations and goals."
        }
        buttonText="Request a Consultation"
      />
    </main>
  );
};

export default CustomSoftwareSolutiolnPage;
