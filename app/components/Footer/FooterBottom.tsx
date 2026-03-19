import Link from "next/link";

const FooterBottom = () => {
  return (
    <div
      className=" bg-dark-2 py-5 
        text-white text-xs gap-2
      
      "
    >
      <div
        className=" flex  flex-col container items-center justify-between 
      lg:flex-row"
      >
        <p>© {new Date().getFullYear()} | Foreware. All rights reserved.</p>
        <div className=" flex  items-center gap-4">
          <Link href="/terms-condition">Terms and Conditions</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/privacy-policy/#cookies-&-tracking">Cookies</Link>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
