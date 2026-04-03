import HighlightButton from "../Buttons/HighlightButton";
import HeaderContent from "../Headers/HeaderContent";
import PartnerList from "./PartnerList";

const Partners = () => {
  return (
    <section className=" container">
      <section
        className="flex flex-col justify-between gap-10 items-center
      lg:flex-row lg:items-end lg:py-20"
      >
        <div>
          <HighlightButton>Our Partners</HighlightButton>
          <HeaderContent heading="Building Africa's Technology Future Through Partnership.">
            We work with some of the world's leading technology providers to
            bring proven, reliable IT solutions to businesses across Nigeria and
            Africa. Our partnerships mean you get access to world-class
            technologies, backed by a local team that understands the market and
            your business.
          </HeaderContent>
        </div>
        <div
          className="w-fit h-60.5 border-[#D9D9D9] border-2 rounded-lg
        bg-[#F2F2F2] p-2 grid gap-2 overflow-hidden grid-cols-3
        
        lg:grid-cols-4"
        >
          <PartnerList direction="up" />
          <PartnerList direction="down" />
          <PartnerList direction="up" />
          <div className="hidden lg:block">
            <PartnerList direction="down" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Partners;
