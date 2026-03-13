"use client";

import privacy_banner from "@/public/images/banners/terms_banner.png";
import PageBanner from "../components/Banners/PageBanner";

const PrivacyPage = () => {
  const lastUpdated = "March 13, 2026";

  return (
    <main className="min-h-screen pb-20">
      <PageBanner
        bannerImage={{ image: privacy_banner, alt: "Foreware Data Privacy" }}
        heading="Privacy Policy"
        text="How we protect, encrypt, and manage your data using industry-leading security standards."
      />

      <section className="container mt-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Navigation */}
          <aside className="lg:w-1/4 sticky top-24 h-fit hidden lg:block">
            <div className="bg-bg-2 rounded-2xl p-6 border border-line">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">
                Privacy Sections
              </h3>
              <ul className="space-y-3">
                {[
                  "Information Collection",
                  "Encryption & PETs",
                  "Data Retention",
                  "Third-Party Sharing",
                  "Cookies & Tracking",
                  "Your Rights",
                  "Compliance",
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
                Privacy Standard
              </span>
              <span className="text-gray-400 text-xs">
                Last Updated: {lastUpdated}
              </span>
            </div>

            <div className="editor-content">
              <h2 id="information-collection">1. Information Collection</h2>
              <p>
                Foreware collects information to provide better services to all
                our users. This includes:
              </p>
              <ul>
                <li>
                  <strong>Account Information:</strong> Name, email address, and
                  professional affiliation when you register.
                </li>
                <li>
                  <strong>Technical Data:</strong> IP addresses, browser type,
                  and operating system logs for security auditing.
                </li>
                <li>
                  <strong>Clinical Metadata:</strong> In our research
                  frameworks, we only collect non-identifiable metadata required
                  for system performance.
                </li>
              </ul>

              <h2 id="encryption-&-pets">2. Advanced Security & PETs</h2>
              <p>
                Unlike traditional platforms, Foreware implements{" "}
                <strong>Privacy-Enhancing Technologies (PETs)</strong> at its
                core. We ensure data privacy through:
              </p>
              <ul>
                <li>
                  <strong>Homomorphic Encryption:</strong> Allowing computation
                  on encrypted data so that raw sensitive information is never
                  exposed during analysis.
                </li>
                <li>
                  <strong>Differential Privacy:</strong> Adding mathematical
                  noise to datasets to prevent the identification of individual
                  research participants.
                </li>
                <li>
                  <strong>End-to-End Encryption:</strong> All communications are
                  secured via TLS 1.3 and AES-256 standards.
                </li>
              </ul>

              <h2 id="data-retention">3. Data Retention</h2>
              <p>
                We retain your personal information only for as long as is
                necessary for the purposes set out in this Privacy Policy. For
                clinical research data handled via our{" "}
                <strong>SecureSCD</strong> framework, retention periods are
                determined by the specific research institution's protocol.
              </p>

              <h2 id="third-party-sharing">4. Third-Party Sharing</h2>
              <p>
                Foreware does not sell, trade, or rent your personal
                identification information to others. We may share generic
                aggregated demographic information not linked to any personal
                identification information with our business partners and
                trusted affiliates.
              </p>

              <blockquote>
                "Our fundamental principle is 'Privacy by Design.' We minimize
                data collection and maximize cryptographic protection at every
                layer of our stack."
              </blockquote>

              <h2 id="cookies-&-tracking">5. Cookies & Cookie Policy</h2>
              <p>
                Foreware uses cookies and similar tracking technologies to track
                the activity on our service and hold certain information.
                Cookies are files with a small amount of data which may include
                an anonymous unique identifier.
              </p>

              <div className="my-6 overflow-hidden border border-line rounded-xl">
                <table className="w-full text-left text-sm">
                  <thead className="bg-bg-2 text-gray-600 font-bold">
                    <tr>
                      <th className="px-4 py-3">Cookie Type</th>
                      <th className="px-4 py-3">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    <tr>
                      <td className="px-4 py-3 font-medium">Essential</td>
                      <td className="px-4 py-3 text-gray-500">
                        Required for system authentication and security (e.g.,
                        keeping you logged in).
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Preference</td>
                      <td className="px-4 py-3 text-gray-500">
                        Remembers your settings such as language or dashboard
                        layout.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Analytics</td>
                      <td className="px-4 py-3 text-gray-500">
                        Helps us understand how users interact with Foreware to
                        improve performance.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                You can instruct your browser to refuse all cookies or to
                indicate when a cookie is being sent. However, if you do not
                accept cookies, you may not be able to use some portions of our
                Service.
              </p>

              <h2 id="your-rights">6. Your Rights</h2>
              <p>
                Depending on your location (e.g., GDPR or local NDPR
                regulations), you have the following rights:
              </p>
              <ul>
                <li>
                  <strong>Access:</strong> The right to request copies of your
                  personal data.
                </li>
                <li>
                  <strong>Rectification:</strong> The right to request that we
                  correct any information you believe is inaccurate.
                </li>
                <li>
                  <strong>Erasure:</strong> The right to request that we erase
                  your personal data under certain conditions.
                </li>
              </ul>

              <h2 id="compliance">7. Regulatory Compliance</h2>
              <p>
                We strive to comply with international data protection
                standards. If you have questions regarding our compliance with
                specific regional laws, please contact our Data Protection
                Officer.
              </p>
            </div>

            {/* Support CTA */}
            <div className="mt-16 p-10 bg-dark-2 text-white rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h4 className="text-xl font-bold mb-2 text-primary">
                  Data Protection Office
                </h4>
                <p className="text-sm text-gray-400 max-w-sm">
                  For formal data requests or technical inquiries regarding our
                  encryption protocols, please reach out to our privacy team.
                </p>
              </div>
              <a
                href="mailto:privacy@foreware.com"
                className="px-8 py-4 bg-primary text-white rounded-xl text-xs font-bold hover:bg-white hover:text-dark-1 transition-all"
              >
                Contact Privacy Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPage;
