"use client";

import useMyForms from "@/app/hooks/form/useForms";
import PopUpForm from "./PopUpForm";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { shouldShowForm } from "./shouldShowForm";
import { FormType } from "@/app/hooks/form/formService";

const PopUpFormClient = () => {
  const { data } = useMyForms();
  const pathname = usePathname();

  const formData = data ? data.data : [];

  const [activeForm, setActiveForm] = useState<any>(null);

  useEffect(() => {
    if (!formData.length) return;

    const formToShow = formData.find((form: FormType) =>
      form.assignedPages?.includes(pathname),
    );

    if (!formToShow) return;

    if (!shouldShowForm(formToShow)) return;

    setActiveForm(formToShow);
  }, [formData, pathname]);

  return <PopUpForm form={activeForm} onClose={() => setActiveForm(null)} />;
};

export default PopUpFormClient;
