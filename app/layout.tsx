import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import BannerNav from "./components/Banners/BannerNav";
import Footer from "./components/Footer/Footer";
import PopUpFormClient from "./components/Form/PopUpFormClient";
import "./globals.css";
import QueryProvider from "./providers/QueryProvider";
import { Toaster } from "sonner";

// Define the Schema object outside the component
const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Foreware Technologies",
  alternateName: "Foreware Technologies",
  url: "https://www.forewaretechnologies.com/",
  logo: "https://www.forewaretechnologies.com/logo.png",
  image: "https://www.forewaretechnologies.com/og-image.jpg", // Recommended for LocalBusiness
  description:
    "Foreware Technologies is a leading technology solutions provider in Nigeria, delivering custom software, AI solutions, and IT consulting.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2 Nurudeen Street, Anifowoshe",
    addressLocality: "Ikeja",
    postalCode: "100282",
    addressRegion: "Lagos",
    addressCountry: "NG",
  },
  telephone: "+2348164699021",
  email: "info@forewaretechnologies.com",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  sameAs: [
    "https://www.forewaretechnologies.com/about",
    "https://www.forewaretechnologies.com/contact",
  ],
};

const interSans = Roboto({
  weight: ["400", "500", "600", "600"],
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Foreware Technologies | Leading Technology Solutions Provider in Nigeria",
  description:
    "Foreware Technologies is a leading technology solutions provider in Nigeria delivering enterprise business solutions, custom software, Data & AI and IT support services to businesses across Nigeria and Africa.	technology solutions provider in Nigeria",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const trackingCodesPath = "tracking-codes";

  // 1. Initialize empty fallbacks
  let headerScripts = { data: [] };
  let bodyScripts = { data: [] };

  try {
    // 2. Fetch with a timeout or standard Promise.all
    const [headerRes, bodyRes] = await Promise.all([
      fetch(
        `${process.env.FOREWARE_API_URL}/${trackingCodesPath}/public/tracking?placement=header`,
        { cache: "no-store" },
      ),
      fetch(
        `${process.env.FOREWARE_API_URL}/${trackingCodesPath}/public/tracking?placement=body`,
        { cache: "no-store" },
      ),
    ]);

    // 3. Only parse if the responses are actually OK
    if (headerRes.ok) headerScripts = await headerRes.json();
    if (bodyRes.ok) bodyScripts = await bodyRes.json();
  } catch (error) {
    // 4. Log the error for your internal tracking, but don't crash the UI
    console.error("Failed to fetch tracking scripts:", error);
  }

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${interSans.variable} antialiased`}
    >
      <head>
        {/* Injecting Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

        {/* Standard HTML <head> tag. 
          We render the raw snippets directly here.
        */}
        {headerScripts?.data?.map((item: any) => (
          <script
            key={item.id}
            suppressHydrationWarning
            /* This is the only way to inject raw HTML (like <meta>) 
               into the <head> without React escaping the brackets.
            */
            dangerouslySetInnerHTML={{
              __html: `</script>${item.codeSnippet}<script>`,
            }}
          />
        ))}
      </head>
      <body suppressHydrationWarning>
        {/* <TopHeader /> */}

        <div className="container absolute top-10 left-0 right-0 z-50">
          <BannerNav />
        </div>

        <QueryProvider>
          <Toaster />
          <>{children}</>
          <PopUpFormClient />
        </QueryProvider>

        <Footer />

        {bodyScripts?.data?.map((item: any) => (
          <script
            key={item.id}
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: `</script>${item.codeSnippet}<script>`,
            }}
          />
        ))}
      </body>
    </html>
  );
}
