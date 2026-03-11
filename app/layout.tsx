import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import TopHeader from "./components/Headers/TopHeader";
import Footer from "./components/Footer/Footer";
import "./globals.css";
import QueryProvider from "./providers/QueryProvider";
import PopUpFormClient from "./components/Form/PopUpFormClient";

const lexendSans = Lexend({
  variable: "--font-lexand-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Foreware",
  description: "Technology That Moves Business Forward.",
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
    <html lang="en" suppressHydrationWarning>
      <head>
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
      <body
        className={`${lexendSans.variable} antialiased`}
        suppressHydrationWarning
      >
        <TopHeader />

        <QueryProvider>
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
