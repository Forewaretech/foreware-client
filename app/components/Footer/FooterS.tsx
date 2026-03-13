import { services } from "./FooterSolutions";
import QuickLink from "./QuickLink";

const FooterS = () => {
  return (
    <div>
      <div className="mt-12 flex flex-col gap-4 text-white font-light">
        {services.slice(3).map(({ text, href }) => (
          <QuickLink key={text} href={href}>
            {text}
          </QuickLink>
        ))}
      </div>
    </div>
  );
};

export default FooterS;
