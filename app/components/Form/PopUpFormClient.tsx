"use client";

import useMyForms from "@/app/hooks/form/useForms";
import PopUpForm from "./PopUpForm";
import { usePathname } from "next/navigation";

const PopUpFormClient = () => {
  const { data } = useMyForms();
  const pathname = usePathname();

  const formData = data ? data.data : [];

  console.log("FORM DATA: ", formData);

  const formToShow = formData.find((form) =>
    form.assignedPages?.includes(pathname),
  );

  return (
    <div>
      <PopUpForm form={formToShow} onClose={() => {}} />
    </div>
  );
};

export default PopUpFormClient;
