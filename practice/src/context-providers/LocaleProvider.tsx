import { useState } from "react";
import LocaleContext from "../contexts/localeContext";
import { language, Words } from "../utils/language";

const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocale] = useState<string>("en");

  const t = (key: Words) => {
    return language[locale][key];
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
};

export default LocaleProvider;
