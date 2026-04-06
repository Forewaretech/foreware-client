import { Mail, MapPin, Phone } from "lucide-react";
import PageBanner from "../components/Banners/PageBanner";
import Socials from "../components/Footer/Socials";
import SectionSpacing from "../components/Spacing/SectionSpacing";

import contact_us_banner from "@/public/images/banners/contact_us_banner.webp";

import { ADDRESS, EMAIL, PHONE } from "../lib/constants";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  return (
    <main>
      <PageBanner
        bannerImage={{
          image: contact_us_banner,
          alt: "Contact Foreware support team",
        }}
        heading="Let's Connect"
        text="Ready to secure your digital assets or start a new project? Reach out to our 
        expert team for tailored solutions and technical guidance."
      />
      <SectionSpacing />

      <div className="container">
        {/* Header Section */}
        <div className="mb-16 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-1 mb-4">
            Let's build something <span className="text-primary">secure</span>{" "}
            together.
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Have a project in mind or need expert technical advice? Reach out
            and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Contact Information */}
          <div className="space-y-10">
            <div>
              <h3 className="text-lg font-semibold text-dark-1 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-bg-2 border border-line flex items-center justify-center text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                      Email us
                    </p>
                    <p className="text-sm font-medium text-dark-2">{EMAIL}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-bg-2 border border-line flex items-center justify-center text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                      Visit us
                    </p>
                    <p className="text-sm font-medium text-dark-2">{ADDRESS}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-bg-2 border border-line flex items-center justify-center text-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                      Call us
                    </p>
                    <p className="text-sm font-medium text-dark-2">{PHONE}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-sm font-semibold text-dark-1 mb-4">
                Follow our updates
              </h3>
              <Socials />
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-white border border-line rounded-2xl p-8 md:p-10 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </div>
      <SectionSpacing />
    </main>
  );
};

export default ContactPage;
