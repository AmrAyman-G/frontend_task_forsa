import { createContext } from "react";

const LanguageContext = createContext({
  currentLanguage: "",
  setCurrentLanguage: () => {},
});

export default LanguageContext;
