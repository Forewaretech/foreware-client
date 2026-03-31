"use client";

import terms_banner from "@/public/images/banners/terms_banner.webp";
import PageBanner from "../components/Banners/PageBanner";

const TermsPage = () => {
  const lastUpdated = "March 13, 2026";

  return (
    <main className="min-h-screen pb-20">
      <PageBanner
        bannerImage={{ image: terms_banner, alt: "Foreware Legal Terms" }}
        heading="Terms & Conditions"
        text="Defining the standards of our professional engagement and service usage."
      />

      <section className="container mt-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Navigation - Quick Links */}
          <aside className="lg:w-1/4 sticky top-24 h-fit hidden lg:block">
            <div className="bg-bg-2 rounded-2xl p-6 border border-line">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                Table of Contents
              </h3>
              <ul className="space-y-3">
                {[
                  "Acceptance of Terms",
                  "Service Access",
                  "Data Privacy",
                  "Intellectual Property",
                  "Liability",
                  "Termination",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-sm text-gray-600 hover:text-primary transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="lg:w-3/4">
            <div className="mb-8 flex items-center gap-3">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-bold uppercase">
                Legal Document
              </span>
              <span className="text-gray-400 text-xs">
                Last Updated: {lastUpdated}
              </span>
            </div>

            {/* Using the .editor-content styles we defined earlier */}
            <div className="editor-content max-w-none">
              <h2 id="acceptance-of-terms">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Foreware platform and services, you
                agree to be bound by these Terms and Conditions and all
                applicable laws and regulations. If you do not agree with any of
                these terms, you are prohibited from using or accessing this
                site.
              </p>

              <h2 id="service-access">2. Service Access and Usage</h2>
              <p>
                Foreware grants you a non-exclusive, non-transferable, limited
                right to access and use our security analysis tools. You agree
                not to:
              </p>
              <ul>
                <li>Modify or copy the materials for commercial purposes.</li>
                <li>
                  Attempt to decompile or reverse engineer any software
                  contained on Foreware's website.
                </li>
                <li>
                  Remove any copyright or other proprietary notations from the
                  materials.
                </li>
              </ul>

              <h2 id="data-privacy">3. Data Privacy & Security</h2>
              <p>
                Your privacy is critical to us. Our use of Privacy-Enhancing
                Technologies (PETs) ensures that your clinical data
                collaboration remains secure. Please refer to our Privacy Policy
                for detailed information on how we handle data.
              </p>

              <blockquote>
                "Foreware is committed to the highest standards of application
                security and data integrity. We utilize advanced encryption to
                protect user information at all times."
              </blockquote>

              <h2 id="intellectual-property">4. Intellectual Property</h2>
              <p>
                The software, logos, and research papers provided on this
                platform are the intellectual property of Foreware. Users may
                download resources for personal, non-commercial use only.
              </p>

              <h2 id="liability">5. Limitation of Liability</h2>
              <p>
                In no event shall Foreware or its suppliers be liable for any
                damages (including, without limitation, damages for loss of data
                or profit) arising out of the use or inability to use the
                materials on Foreware's website.
              </p>

              <h2 id="termination">6. Termination of Service</h2>
              <p>
                We reserve the right to terminate or suspend access to our
                service immediately, without prior notice or liability, for any
                reason whatsoever, including without limitation if you breach
                the Terms.
              </p>
            </div>

            {/* Support CTA */}
            <div className="mt-16 p-8 bg-bg-2 border border-line rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="font-bold text-dark-1">
                  Have questions about our terms?
                </h4>
                <p className="text-sm text-gray-500">
                  Our legal and technical teams are here to provide clarity.
                </p>
              </div>
              <a
                href="/contact"
                className="px-6 py-3 bg-dark-1 text-white rounded-xl text-xs font-semibold hover:bg-primary transition-colors"
              >
                Contact Legal Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsPage;
