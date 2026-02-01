import Link from "next/link";

const FooterBottom = () => {
  return (
    <div
      className="container bg-dark-2 py-5 flex  flex-col items-center justify-between 
      text-white text-xs gap-2
      lg:flex-row"
    >
      <p>© 2025 | Foreware. All rights reserved.</p>
      <div className=" flex  items-center gap-4">
        <Link href="">Terms and Conditions</Link>
        <Link href="">Privacy Policy</Link>
        <Link href="">Cookies</Link>
      </div>
    </div>
  );
};

export default FooterBottom;
