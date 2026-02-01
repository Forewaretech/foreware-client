import PageBanner from "../components/Banners/PageBanner";

import system_int_soft_dev from "@/public/images/banners/system_int_soft_dev.png";

const SystemIntegrationApiDevPage = () => {
  return (
    <main>
      <PageBanner
        bannerImage={{
          image: system_int_soft_dev,
          alt: "system integration and software development banner",
        }}
        heading={
          "Systems Integration & API Development that Supports Smarter Operations"
        }
        text={
          "We connect systems, applications, and data so your business works as one."
        }
        buttonText="Learn More"
      />
    </main>
  );
};

export default SystemIntegrationApiDevPage;
