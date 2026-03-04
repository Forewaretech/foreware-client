import { useQuery } from "@tanstack/react-query";
import { formQueries } from "./formQueries";

const useMyForms = () => useQuery(formQueries.allActiveForms());

export default useMyForms;
