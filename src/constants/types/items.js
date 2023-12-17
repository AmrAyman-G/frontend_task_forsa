import { useTranslation } from "react-i18next";

export const items = () => {
  const { t } = useTranslation();

  return {
    translate: {
      Home: t("Home"),
      Retail: t("Retail"),
      Offers: t("Offers"),
      Profile: t("Profile"),
      CompleteInfoand: t("CompleteInfoand"),
      Getlimit: t("Getlimit"),
      Checkout: t("Checkout"),
      brandeSectionTitel: t("brandeSectionTitel"),
      loanSectionTitel: t("loanSectionTitel"),
      offersSectionTitel: t("offersSectionTitel"),
      viewAll: t("viewAll"),
      seeLess: t("seeLess"),
      seeAll: t("seeAll"),
      Arabic: t("Arabic"),
      English: t("English"),
      changeLanguage: t("changeLanguage"),
      shareApp: t("shareApp"),
      profileName: t("profileName"),
      message: t("message"),
    },
  };
};
