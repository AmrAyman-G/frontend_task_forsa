import React, { memo, useState } from "react";
import {
  Image,
  Platform,
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
import { Ionicons, AntDesign, FontAwesome } from "@expo/vector-icons";
import { items } from "../constants/types/items";

const sharignApp = async () => {
  try {
    await Share.share({ message: "Forsa Task App Created By Amr Ayman" });
  } catch (error) {
    if (__DEV__) {
      console.error("Error sharing:", error);
    } else return;
  }
};

const Profile = memo(() => {
  const [selected, setSelected] = useState("");
  const translatedItem = items().translate;

  const data = [
    { key: "1", value: "English" },
    { key: "2", value: "Arabic" },
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TopBackgroundClip height={"25%"} top={"-5%"} />
      <Header name={translatedItem.Profile} />
      <View style={styles.profileInfo}>
        <Image
          width={RFValue(110)}
          height={RFValue(92)}
          borderRadius={RFValue(10)}
          resizeMode="cover"
          source={require("../assets/images/profileImage.png")}
        />
        <Text style={styles.nameFont}>Amr Ayman</Text>
      </View>
      <View style={styles.settings}>
        <TouchableOpacity style={{ flex: 1 }} onPress={sharignApp}>
          <Text style={styles.settingsFonts}>Share the app</Text>
        </TouchableOpacity>
        <View style={styles.dropdownContainer}>
          <Text style={styles.settingsFonts}>Change Language</Text>
          <SelectList
            setSelected={(val) => setSelected(val)}
            data={data}
            save="value"
            search={false}
            dropdownStyles={{ height: "230%", top: "-30%" }}
            boxStyles={{ borderWidth: 0, top: "-5%" }}
            dropdownTextStyles={{ fontSize: RFValue(15) }}
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
    flexDirection: "row",
    width: "94%",
  },
  nameFont: {
    fontSize: RFValue(21),
    marginLeft: "10%",
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
    flexDirection: "row",
    alignItems: "flex-start",
  },
});

export default Profile;
