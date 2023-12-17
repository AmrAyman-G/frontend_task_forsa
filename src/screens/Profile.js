import React, { memo, useContext, useEffect, useState } from "react";
import {
  Image,
  Share,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import TopBackgroundClip from "../components/TopBackgroundClip";
import Header from "../components/Header";
import { RFValue } from "react-native-responsive-fontsize";
import { SelectList } from "react-native-dropdown-select-list";
import { items } from "../constants/types/items";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LanguageContext from "../constants/Language/LanguageContext";
import i18n from "../../i18n";

const Profile = memo(() => {
  const [selected, setSelected] = useState("");
  const translatedItem = items().translate;
  const { currentLanguage, setCurrentLanguage } = useContext(LanguageContext);
  const languages = [
    { key: "1", value: "English" },
    { key: "2", value: "عربي" },
  ];

  // Load current language
  useEffect(() => {
    const userlanguage = currentLanguage === "ar" ? "عربي" : "English";
    setSelected(userlanguage);
  }, []);

  //Sharing Apps
  const sharignApp = async () => {
    try {
      await Share.share({ message: translatedItem.message });
    } catch (error) {
      if (__DEV__) {
        console.error("Error sharing:", error);
      } else return;
    }
  };

  //Save Selected Language
  const saveSelectedLanguage = async (val) => {
    setSelected(val);
    switch (val) {
      case "1":
        await AsyncStorage.setItem("selectedLanguage", "en");
        i18n.changeLanguage("en");
        setCurrentLanguage("en");
        break;
      case "2":
        await AsyncStorage.setItem("selectedLanguage", "ar");
        i18n.changeLanguage("ar");
        setCurrentLanguage("ar");
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TopBackgroundClip height={"25%"} top={"-5%"} />
      <Header name={translatedItem.Profile} />

      {/* Profile */}
      <View
        style={[
          styles.profileInfo,
          { flexDirection: currentLanguage === "ar" ? "row-reverse" : "row" },
        ]}
      >
        <Image
          style={styles.profileImage}
          source={require("../assets/images/profileImage.webp")}
        />
        <Text
          style={[
            styles.nameFont,
            {
              textAlign: currentLanguage === "ar" ? "right" : "left",
            },
          ]}
        >
          {translatedItem.profileName}
        </Text>
      </View>

      {/* Settings */}
      <View style={styles.settings}>
        <TouchableOpacity style={{ flex: 1 }} onPress={sharignApp}>
          <Text
            style={[
              styles.settingsFonts,
              { textAlign: currentLanguage === "ar" ? "right" : "left" },
            ]}
          >
            {translatedItem.shareApp}
          </Text>
        </TouchableOpacity>
        <View
          style={[
            styles.dropdownContainer,
            { flexDirection: currentLanguage === "ar" ? "row-reverse" : "row" },
          ]}
        >
          <Text
            style={[
              styles.settingsFonts,
              { textAlign: currentLanguage === "ar" ? "right" : "left" },
            ]}
          >
            {translatedItem.changeLanguage}
          </Text>
          <SelectList
            setSelected={saveSelectedLanguage}
            data={languages}
            save={selected}
            placeholder={selected}
            search={false}
            dropdownStyles={{ height: "280%", top: "-50%" }}
            boxStyles={{ borderWidth: 0, height: "150%", top: "-5%" }}
            dropdownTextStyles={{ fontSize: RFValue(15), textAlign: "center" }}
            inputStyles={{ fontSize: RFValue(15) }}
          />
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  profileInfo: {
    width: "94%",
  },
  profileImage: {
    width: RFValue(110),
    height: RFValue(92),
    borderRadius: RFValue(15),
    resizeMode: "cover",
  },
  nameFont: {
    flex: 1,
    fontSize: RFValue(21),
    marginLeft: "5%",
    marginRight: "5%",
  },
  settings: {
    width: "90%",
    marginTop: "10%",
    flex: 0.2,
  },
  settingsFonts: {
    flex: 1,
    fontSize: RFValue(18),
  },
  dropdownContainer: {
    flex: 1,
    alignItems: "flex-start",
  },
});

export default Profile;
