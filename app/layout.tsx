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

  // Fetch both header and body snippets
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

  const headerScripts = await headerRes.json();
  const bodyScripts = await bodyRes.json();

  return (
    <html lang="en">
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
      <body className={`${lexendSans.variable} antialiased`}>
        <TopHeader />

        <QueryProvider>
          <>{children}</>
          <PopUpFormClient />
        </QueryProvider>

        {/* Body Snippets: 
           We use a Fragment-like approach to avoid extra <div>s 
           unless the snippet itself requires one.
        */}
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
