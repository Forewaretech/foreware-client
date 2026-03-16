"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import Button from "../Buttons/Button";
import { motion, AnimatePresence } from "framer-motion";

interface FormField {
  label: string;
  type: string;
  required: boolean;
  options?: string[];
}

export interface FormItem {
  id?: string;
  name: string;
  fields: FormField[];
  thankYouMessage: string;
  targetEmails?: string[];
  status?: string;
  triggerType?: string;
  assignedPages?: string[];
  submissions?: number;
  bannerImage?: string;
  displayBehavior?: "ALWAYS" | "ONCE_PER_BROWSER" | "ONCE_PER_SESSION";
  closeBehavior?:
    | "SHOW_AGAIN"
    | "HIDE_FOR_SESSION"
    | "HIDE_FOR_24H"
    | "HIDE_FOR_7D";
}

/* Interactive form preview as a separate component */
function PopUpForm({
  form,
  onClose,
}: {
  form: FormItem | null;
  onClose: () => void;
}) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!form) return;

    const submittedKey = `form_${form.id}_submitted`;
    const sessionKey = `form_${form.id}_session`;
    const closeKey = `form_${form.id}_closed`;

    // 1 Handle submission behavior
    if (form.displayBehavior === "ONCE_PER_BROWSER") {
      if (localStorage.getItem(submittedKey)) {
        onClose();
        return;
      }
    }

    if (form.displayBehavior === "ONCE_PER_SESSION") {
      if (sessionStorage.getItem(sessionKey)) {
        onClose();
        return;
      }
    }

    // 2 Handle close behavior
    const sessionClosed = sessionStorage.getItem(closeKey);
    if (sessionClosed) {
      onClose();
      return;
    }

    const storedClose = localStorage.getItem(closeKey);
    if (storedClose) {
      try {
        const parsed = JSON.parse(storedClose);
        if (parsed.expires && Date.now() < parsed.expires) {
          onClose();
          return;
        } else {
          localStorage.removeItem(closeKey);
        }
      } catch {
        localStorage.removeItem(closeKey);
      }
    }
  }, [form]);

  const handleClose = () => {
    if (!form) return;

    const key = `form_${form.id}_closed`;

    if (form.closeBehavior === "HIDE_FOR_SESSION") {
      sessionStorage.setItem(key, "true");
    }

    if (form.closeBehavior === "HIDE_FOR_24H") {
      localStorage.setItem(
        key,
        JSON.stringify({ expires: Date.now() + 86400000 }),
      );
    }

    if (form.closeBehavior === "HIDE_FOR_7D") {
      localStorage.setItem(
        key,
        JSON.stringify({ expires: Date.now() + 7 * 86400000 }),
      );
    }

    setValues({});
    setSubmitted(false);
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form) return;

    const missing = form.fields.filter(
      (f) => f.required && !values[f.label]?.trim(),
    );

    if (missing.length > 0) {
      toast.error(`Please fill in: ${missing.map((f) => f.label).join(", ")}`);
      return;
    }

    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_FOREWARE_API_URL}/submissions/${form.id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        },
      );

      if (form.displayBehavior === "ONCE_PER_BROWSER") {
        localStorage.setItem(`form_${form.id}_submitted`, "true");
      }

      if (form.displayBehavior === "ONCE_PER_SESSION") {
        sessionStorage.setItem(`form_${form.id}_session`, "true");
      }

      setSubmitted(true);
      toast.success("Form submitted successfully!");
    } catch {
      toast.error("Something went wrong.");
    }
  };

  return (
    <AnimatePresence>
      {form && (
        <Dialog
          open={!!form}
          onOpenChange={(o) => {
            if (!o) handleClose();
          }}
        >
          <DialogContent className="max-w-md p-0 overflow-hidden">
            <DialogHeader className="px-4 pt-4">
              <DialogTitle>{form?.name}</DialogTitle>
            </DialogHeader>

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 40 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className="mt-2 border border-gray-200 rounded-lg overflow-hidden">
                {form.bannerImage && (
                  <img
                    src={form.bannerImage}
                    alt="Banner"
                    className="w-full h-36 object-cover"
                  />
                )}

                <form onSubmit={handleSubmit} className="p-4 space-y-3">
                  {submitted ? (
                    <div className="text-center py-6">
                      <p className="text-lg font-semibold text-foreground mb-1">
                        ✓ Submitted!
                      </p>

                      <p className="text-sm text-muted-foreground">
                        {form.thankYouMessage ||
                          "Thank you for your submission."}
                      </p>

                      <Button
                        type="button"
                        className="mt-4"
                        onClick={() => {
                          setSubmitted(false);
                          setValues({});
                        }}
                      >
                        Reset
                      </Button>
                    </div>
                  ) : (
                    <>
                      <h3 className="font-semibold text-foreground">
                        {form.name}
                      </h3>

                      {form.fields.map((field, idx) => (
                        <div key={idx}>
                          <label className="text-sm font-medium text-foreground">
                            {field.label}{" "}
                            {field.required && (
                              <span className="text-destructive">*</span>
                            )}
                          </label>

                          <div className="mt-1">
                            {field.type === "textarea" ? (
                              <textarea
                                className="w-full rounded-md border border-gray-300 border-input 
                                bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                placeholder={field.label}
                                rows={3}
                                value={values[field.label] || ""}
                                onChange={(e) =>
                                  setValues({
                                    ...values,
                                    [field.label]: e.target.value,
                                  })
                                }
                              />
                            ) : field.type === "select" ? (
                              <select
                                className="w-full rounded-md border border-gray-300 border-input bg-background 
                                px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                value={values[field.label] || ""}
                                onChange={(e) =>
                                  setValues({
                                    ...values,
                                    [field.label]: e.target.value,
                                  })
                                }
                              >
                                <option value="">Select {field.label}</option>

                                {(field.options || [])
                                  .filter(Boolean)
                                  .map((opt, oi) => (
                                    <option key={oi} value={opt}>
                                      {opt}
                                    </option>
                                  ))}
                              </select>
                            ) : (
                              <input
                                type={field.type}
                                className="w-full rounded-md border border-gray-300 border-input 
                                bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                placeholder={field.label}
                                value={values[field.label] || ""}
                                onChange={(e) =>
                                  setValues({
                                    ...values,
                                    [field.label]: e.target.value,
                                  })
                                }
                              />
                            )}
                          </div>
                        </div>
                      ))}

                      <Button
                        type="submit"
                        className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                      >
                        Submit
                      </Button>
                    </>
                  )}
                </form>
              </div>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
}

export default PopUpForm;
