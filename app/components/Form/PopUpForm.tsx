"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import Button from "../Buttons/Button";

interface FormField {
  label: string;
  type: string;
  required: boolean;
  options?: string[];
}

interface FormItem {
  id?: string;
  name: string;
  fields: FormField[];
  thank_you_message: string;
  target_emails?: string[];
  status?: string;
  trigger_type?: string;
  assigned_pages?: string[];
  submissions?: number;
  banner_image?: string;
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

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!form) return;

  //   const missing = form.fields.filter(
  //     (f) => f.required && !values[f.label]?.trim(),
  //   );

  //   if (missing.length > 0) {
  //     toast.error(`Please fill in: ${missing.map((f) => f.label).join(", ")}`);
  //     return;
  //   }

  //   console.log("values: ", values);

  //   setSubmitted(true);
  //   toast.success("Form submitted (preview)");
  // };

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
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        },
      );

      setSubmitted(true);
      toast.success("Form submitted successfully!");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const handleClose = () => {
    setValues({});
    setSubmitted(false);
    onClose();
  };

  return (
    <Dialog
      open={!!form}
      onOpenChange={(o) => {
        if (!o) handleClose();
      }}
    >
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{form?.name}</DialogTitle>
        </DialogHeader>
        {form && (
          <div className="mt-2 border rounded-lg overflow-hidden">
            {form.banner_image && (
              <img
                src={form.banner_image}
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
                    {form.thank_you_message || "Thank you for your submission."}
                  </p>
                  <Button
                    type="button"
                    // TODO:
                    // variant="outline"
                    // size="sm"
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
                  <h3 className="font-semibold text-foreground">{form.name}</h3>
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
                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
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
                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
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
                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
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
        )}
      </DialogContent>
    </Dialog>
  );
}

export default PopUpForm;
