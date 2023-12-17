import i18n from "../../i18n";
import * as RNLocalize from "expo-localization";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getSelectedLanguage = async () => {
  try {
    const selectedLanguage = await AsyncStorage.getItem("selectedLanguage");
    return selectedLanguage;
  } catch (error) {
    if (__DEV__) {
      console.error("Error getting selected language:", error);
    }
    return null;
  }
};

const setLanguage = (language) => {
  i18n.changeLanguage(language);
};

const fetchSelectedLanguage = async () => {
  const selectedLanguage = await getSelectedLanguage();

  if (selectedLanguage) {
    setLanguage(selectedLanguage);
    return selectedLanguage;
  } else {
    const deviceLanguage = RNLocalize.getLocales()[0].languageCode;
    setLanguage(deviceLanguage);
    return deviceLanguage;
  }
};

export { fetchSelectedLanguage };
