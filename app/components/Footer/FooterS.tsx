import QuickLink from "./QuickLink";

const FooterS = () => {
  return (
    <div>
      <div className="mt-12 flex flex-col gap-4 text-white font-light">
        <QuickLink href="/careers">Modern Work Space</QuickLink>
        <QuickLink href="/careers">Managed Services</QuickLink>
        <QuickLink href="/careers">Microsoft Dynamics 365</QuickLink>
        <QuickLink href="/careers">SAP</QuickLink>
      </div>
    </div>
  );
};

export default FooterS;
