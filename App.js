import "react-native-gesture-handler";
import TabNavigator from "./src/navigation/TabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { ApiProvider } from "./src/Data/ApiContext";
import { useEffect } from "react";
import { fetchSelectedLanguage } from "./src/constants/LanguageDetector";

const getLanguage = async () => {
  await fetchSelectedLanguage();
};

export default function App() {
  useEffect(() => {
    getLanguage();
  }, []);

  return (
    <NavigationContainer>
      <ApiProvider>
        <TabNavigator />
      </ApiProvider>
    </NavigationContainer>
  );
}
