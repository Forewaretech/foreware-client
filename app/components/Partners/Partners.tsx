import HighlightButton from "../Buttons/HighlightButton";
import HeaderContent from "../Headers/HeaderContent";
import PartnerList from "./PartnerList";

const Partners = () => {
  return (
    <section className=" container">
      <section className=" py-20 flex items-end justify-between gap-10">
        <div>
          <HighlightButton>Our Partners</HighlightButton>
          <HeaderContent
            heading={"Building Africa's Future Through Partnership."}
          >
            We partner with leading technology providers to deliver
            enterprise-grade solutions across Nigeria and Africa. These
            strategic alliances ensure you get proven platforms, local
            expertise, and the support infrastructure needed to scale with
            confidence.
          </HeaderContent>
        </div>
        <div
          className="w-fit h-60.5 border-[#D9D9D9] border-2 rounded-lg
        bg-[#F2F2F2] p-2 grid grid-cols-4 gap-2 overflow-hidden"
        >
          <div>
            <PartnerList />
          </div>
          <div>
            <PartnerList />
          </div>
          <div>
            <PartnerList />
          </div>{" "}
          <div>
            <PartnerList />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Partners;
