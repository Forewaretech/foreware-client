import { FormItem } from "./PopUpForm";

export function shouldShowForm(form: FormItem) {
  const submittedKey = `form_${form.id}_submitted`;
  const sessionKey = `form_${form.id}_session`;
  const closeKey = `form_${form.id}_closed`;

  if (form.displayBehavior === "ONCE_PER_BROWSER") {
    if (localStorage.getItem(submittedKey)) return false;
  }

  if (form.displayBehavior === "ONCE_PER_SESSION") {
    if (sessionStorage.getItem(sessionKey)) return false;
  }

  const sessionClosed = sessionStorage.getItem(closeKey);
  if (sessionClosed) return false;

  const storedClose = localStorage.getItem(closeKey);

  if (storedClose) {
    try {
      const parsed = JSON.parse(storedClose);
      if (parsed.expires && Date.now() < parsed.expires) {
        return false;
      }
    } catch {}
  }

  return true;
}
