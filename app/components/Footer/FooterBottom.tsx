import Link from "next/link";

const FooterBottom = () => {
  return (
    <div
      className="container bg-dark-2 py-5 flex  flex-col items-center justify-between 
        text-white text-xs gap-2
      
      lg:flex-row"
    >
      <p>© {new Date().getFullYear()} | Foreware. All rights reserved.</p>
      <div className=" flex  items-center gap-4">
        <Link href="/terms-condition">Terms and Conditions</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/privacy-policy/#cookies-&-tracking">Cookies</Link>
      </div>
    </div>
  );
};

export default FooterBottom;
