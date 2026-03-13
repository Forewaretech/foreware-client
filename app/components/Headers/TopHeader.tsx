import LanguageSelection from "../Inputs/LanguageSelection";
import SearchInput from "../Inputs/SearchInput";

const TopHeader = () => {
  return (
    <div className=" h-11 flex justify-end items-center container gap-4">
      <LanguageSelection />
      {/* <SearchInput /> */}
    </div>
  );
};

export default TopHeader;
