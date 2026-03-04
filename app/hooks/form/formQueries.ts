import { queryOptions } from "@tanstack/react-query";
import formService from "./formService";

export const formQueries = {
  allActiveForms: () =>
    queryOptions({
      queryKey: ["forms", "active"] as const,
      queryFn: () =>
        formService.getAll({
          path: "public/forms",
          params: { status: "ACTIVE" },
        }),
    }),
  detail: (id: string) =>
    queryOptions({
      queryKey: ["forms", id] as const,
      queryFn: () => formService.getOne(id),
    }),
};
