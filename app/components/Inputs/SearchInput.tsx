import searchSvg from "@/public/icons/saerch.svg";
import Image from "next/image";

const SearchInput = () => {
  return (
    <div className=" relative w-34.75">
        <Image src={searchSvg} alt="Search Icon" className=" absolute top-1/2 -translate-y-1/2
        left-3" />
        <input placeholder="Search" className="border border-line rounded-lg outline-line
        text-xs py-1 pr-2 pl-8.75 w-full"/>
    </div>
  )
}

export default SearchInput