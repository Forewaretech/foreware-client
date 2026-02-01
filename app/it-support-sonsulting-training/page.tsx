import PageBanner from "../components/Banners/PageBanner";

import it_support from "@/public/images/banners/it_support.png";

const ITSupportConsultingTrainingPage = () => {
  return (
    <main>
      <PageBanner
        bannerImage={{
          image: it_support,
          alt: "IT support and consulting banner",
        }}
        heading={"Reliable IT Support, Consulting & Training Services"}
        text={
          "Practical technology support that helps your business run smoothly and stay secure."
        }
        buttonText="Contact Us"
      />
    </main>
  );
};

export default ITSupportConsultingTrainingPage;
