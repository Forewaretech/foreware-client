"use client";

import React from "react";
import PageBanner from "../components/Banners/PageBanner";
import Button from "../components/Buttons/Button";
import { ArrowRight, Code, Shield, Users, Zap } from "lucide-react";
import career_banner from "@/public/images/banners/career_banner.webp";
import Link from "next/link";

const values = [
  {
    icon: <Shield className="text-primary" />,
    title: "Security First",
    desc: "We don't just build features; we build trust through uncompromising security standards.",
  },
  {
    icon: <Zap className="text-primary" />,
    title: "Innovation",
    desc: "We push the boundaries of PETs and AI to solve real-world privacy challenges.",
  },
  {
    icon: <Users className="text-primary" />,
    title: "Collaboration",
    desc: "A flat hierarchy where every engineer and analyst has a voice in the final product.",
  },
];

const CareersPage = () => {
  return (
    <main className="min-h-screen pb-20">
      <PageBanner
        bannerImage={{ image: career_banner, alt: "Join the Foreware team" }}
        heading="Shape the Future of Security"
        text="Join a team of visionaries dedicated to building privacy-preserving technologies and secure digital infrastructure."
      />

      {/* Core Values Section */}
      <section className="container mt-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-dark-1 mb-4">
            Why Work at Foreware?
          </h2>
          <p className="text-gray-500">
            We are more than just a tech company. We are a collective of problem
            solvers committed to digital sovereignty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div
              key={i}
              className="p-8 border border-line rounded-2xl bg-bg-2/50 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-4">{v.icon}</div>
              <h3 className="font-bold text-dark-1 mb-2">{v.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Roles Section */}
      <section className="container mt-28">
        <div className="bg-dark-1 text-white rounded-[2rem] p-8 md:p-16 overflow-hidden relative">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-10 blur-[100px] -mr-32 -mt-32"></div>

          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-10">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold mb-6">Current Openings</h2>
              <div className="space-y-4">
                {/* Placeholder for no roles */}
                <div className="p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm">
                  <p className="text-lg font-medium text-primary mb-1">
                    We're currently scaling our teams.
                  </p>
                  <p className="text-sm text-gray-400">
                    While we don't have active listings today, we are always
                    looking for Application Security Analysts and Full-stack
                    Developers.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white text-dark-1 p-8 rounded-2xl w-full lg:w-96">
              <h3 className="font-bold mb-4">Join our Talent Pool</h3>
              <p className="text-xs text-gray-500 mb-6">
                Contact us and we'll reach out when a role matches your profile.
              </p>

              <Link href="/contact">
                <Button className="w-full py-3 text-xs flex items-center justify-center gap-2">
                  Contact us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CareersPage;
