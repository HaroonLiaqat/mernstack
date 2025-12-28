import { createContext } from "react";
import type { Words } from "../utils/language";

export type LocaleContextType = {
  locale: string;
  setLocale: (locale: string) => void;
  t: (key: Words) => string;
};

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export default LocaleContext;
