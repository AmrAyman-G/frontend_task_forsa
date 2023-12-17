import "react-native-gesture-handler";
import TabNavigator from "./src/navigation/TabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { ApiProvider } from "./src/Data/ApiContext";
import { useEffect, useState } from "react";
import { fetchSelectedLanguage } from "./src/constants/LanguageDetector";
import LanguageContext from "./src/constants/Language/LanguageContext";

const getLanguage = async (setCurrentLanguage) => {
  const language = await fetchSelectedLanguage();
  setCurrentLanguage(language);
};

export default function App() {
  const [currentLanguage, setCurrentLanguage] = useState("");

  useEffect(() => {
    getLanguage(setCurrentLanguage);
  }, []);

  return (
    <NavigationContainer>
      <ApiProvider>
        <LanguageContext.Provider
          value={{ currentLanguage, setCurrentLanguage }}
        >
          <TabNavigator />
        </LanguageContext.Provider>
      </ApiProvider>
    </NavigationContainer>
  );
}
