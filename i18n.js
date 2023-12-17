import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "en-US",
  compatibilityJSON: "v3",

  resources: {
    en: {
      translation: {
        Home: "Home",
        Retail: "Retail",
        Offers: "Offers",
        ProfileL: "Profile",
      },
    },
    ar: {
      translation: {
        Home: "الرائيسية",
        Retail: "بيع",
        Offers: "عروض",
        ProfileL: "حساب تعريفي",
      },
    },
  },
});
export default i18n;
