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
        Profile: "Profile",
        CompleteInfoand: "Complete your info and get up to EGP 100,000",
        Getlimit: "Get your limit",
        Checkout: "Check out latest offers",
        brandeSectionTitel: "Top brands in retail",
        loanSectionTitel: "Request Additional Loan",
        offersSectionTitel: "Offers Select for You",
        viewAll: "View all",
        seeLess: "See Less",
        seeAll: "See all",
        Arabic: "Arabic",
        English: "English",
        changeLanguage: "Change Language",
        shareApp: "Share the app",
        profileName: "Amr Ayman",
        message: "Forsa Task App Created By Amr Ayman",
      },
    },
    ar: {
      translation: {
        Home: "الرائيسية",
        Retail: "بيع",
        Offers: "عروض",
        Profile: "حسابي",
        CompleteInfoand: "أكمل بياناتك واحصل على ما يصل إلى ١٠٠,٠٠٠ جنيه مصري",
        Getlimit: "احصل على الحد الخاص بك",
        Checkout: "تحقق من أحدث العروض",
        brandeSectionTitel: "أفضل العلامات التجارية",
        loanSectionTitel: "طلب قرض إضافي",
        offersSectionTitel: "العروض المختارة لك",
        viewAll: "عرض الكل",
        seeLess: "عرض أقل",
        seeAll: "عرض الكل",
        Arabic: "عربي",
        English: "انجليزي",
        changeLanguage: "تغيير اللغة",
        shareApp: "شارك التطبيق",
        profileName: "عمرو ايمن",
        message: "تطبيق Forsa Task من تصميم عمرو أيمن",
      },
    },
  },
});
export default i18n;
