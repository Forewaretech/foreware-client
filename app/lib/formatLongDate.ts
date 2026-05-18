const longFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export const formatLongDate = (value?: string | Date | null): string => {
  if (!value) return "";
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return longFormatter.format(date);
};

const DAY_MS = 24 * 60 * 60 * 1000;

// Treat "updated" as noteworthy only when it's at least a day after publish —
// avoids spamming an "Updated" line for same-day typo fixes.
export const wasMeaningfullyUpdated = (
  publishedAt?: string | Date | null,
  updatedAt?: string | Date | null,
): boolean => {
  if (!publishedAt || !updatedAt) return false;
  const pub = new Date(publishedAt).getTime();
  const upd = new Date(updatedAt).getTime();
  if (Number.isNaN(pub) || Number.isNaN(upd)) return false;
  return upd - pub >= DAY_MS;
};
