import { Mail, MapPin, Phone } from "lucide-react";
import Button from "../Buttons/Button";
import Socials from "./Socials";

const FooterContactUs = () => {
  return (
    <div className=" border-t-[0.2px] container py-20">
      <Button>Contact Us</Button>
      <div
        className="flex mt-5 flex-col gap-6
        lg:flex-row"
      >
        <div
          className=" flex flex-col gap-6
        lg:w-1/2"
        >
          <div className="flex gap-4">
            <Phone className=" text-white min-w-5" />
            <div>
              <p className=" font-bold clear-both text-white">Phone</p>
              <p className=" text-white/90">+234 816 4699 021</p>
            </div>
          </div>

          <div className="flex gap-4">
            <Mail
              size={20}
              color="currentColor"
              className=" text-white min-w-5"
            />
            <div>
              <p className=" font-bold clear-both text-white">Email</p>
              <p className=" text-white/90">info@forewaretechnologies.com</p>
            </div>
          </div>
        </div>
        <div
          className=" flex flex-col gap-6
        lg:w-1/2"
        >
          <div className="flex gap-4">
            <MapPin size={20} className=" text-white min-w-5" />
            <div>
              <p className=" font-bold clear-both text-white">Office Address</p>
              <p className=" text-white/90">
                Nurudeen Street, Anifowoshe, Ikeja, Lagos, Nigeria
              </p>
            </div>
          </div>
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default FooterContactUs;
