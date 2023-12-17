import { useTranslation } from "react-i18next";

export const items = () => {
  const { t } = useTranslation();

  return {
    translate: {
      Home: t("Home"),
      Retail: t("Retail"),
      Offers: t("Offers"),
      Profile: t("Profile"),
    },
  };
};
