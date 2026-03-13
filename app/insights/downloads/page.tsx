"use client";

import PageBanner from "@/app/components/Banners/PageBanner";
import SectionSpacing from "@/app/components/Spacing/SectionSpacing";
import DigitalTransformers from "@/app/components/Transformers/DigitalTransformers";
import downloads_banner from "@/public/images/banners/downloads_banner.png";
import { Download, FileText } from "lucide-react";

const downloadItems = [
  //   {
  //     title: "Foreware Desktop Client",
  //     version: "v2.4.0",
  //     size: "45MB",
  //     type: "Software",
  //     icon: <Monitor size={24} />,
  //     description:
  //       "The complete dashboard for managing your secure clinical data nodes.",
  //   },
  {
    title: "Security Integration Guide",
    version: "2026 Edition",
    size: "12MB",
    type: "PDF",
    icon: <FileText size={24} />,
    description:
      "Step-by-step documentation for integrating PETs into existing workflows.",
  },
  //   {
  //     title: "Foreware SDK",
  //     version: "v1.0.2",
  //     size: "110MB",
  //     type: "Developer",
  //     icon: <ShieldCheck size={24} />,
  //     description:
  //       "Developer tools and libraries for building privacy-preserving applications.",
  //   },
];

const DownloadsPage = () => {
  return (
    <main className="min-h-screen pb-20">
      <PageBanner
        bannerImage={{
          image: downloads_banner, // A dark, professional tech mesh
          alt: "Foreware Resources Banner",
        }}
        heading="Resources & Tools"
        text="Access the latest Foreware software updates, technical whitepapers, and security frameworks."
      />

      <section className="container mt-16">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-dark-1">
              Available Downloads
            </h2>
            <p className="text-gray-500 text-sm">
              Always ensure you are using the latest version for maximum
              security.
            </p>
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-bg-2 border border-line rounded-full text-[10px] font-bold uppercase text-gray-500">
              Latest Version: v2.4.0
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {downloadItems.map((item, index) => (
            <div
              key={index}
              className="group bg-white border border-line rounded-2xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-bg-2 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-dark-1">{item.title}</h3>
                  <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded font-bold uppercase">
                    {item.type}
                  </span>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-line pt-4">
                <div className="text-[11px] text-gray-400 font-medium">
                  Ver: {item.version} • {item.size}
                </div>
                <button className="flex items-center gap-2 text-primary font-semibold text-xs hover:underline">
                  Download <Download size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <SectionSpacing />
      </section>
      <DigitalTransformers />
    </main>
  );
};

export default DownloadsPage;
