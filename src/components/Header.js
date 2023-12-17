import React, { memo, useContext } from "react";
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Octicons, AntDesign, MaterialIcons } from "@expo/vector-icons";
import LanguageContext from "../constants/Language/LanguageContext";
import { items } from "../constants/types/items";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const wp = Dimensions.get("window").width;
const hp = Dimensions.get("window").height;
const screenWidth = wp < hp ? wp : hp;

export default Header = memo(({ name }) => {
  const { currentLanguage } = useContext(LanguageContext);
  const translatedItem = items().translate;
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        ...(name
          ? {
              height: Platform.OS === "android" ? "15%" : "13%",
              width: "93%",
              position: "absolute",
              zIndex: 1,
              top: insets.top + 5,
              alignItems: "center",
              justifyContent: "center",
            }
          : {
              width: "93%",
              position: "absolute",
              zIndex: 1,
              top: insets.top + 5,
              alignItems: "center",
            }),
      }}
    >
      <View style={styles.Container}>
        <View style={styles.notificationFavoriteContainer}>
          <TouchableOpacity style={styles.icon}>
            <AntDesign name="hearto" size={RFValue(20)} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.NotificationPop} />
            <Octicons
              style={{ transform: [{ rotate: "-10deg" }] }}
              name="bell"
              size={RFValue(20)}
              color="white"
            />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, alignItems: "center" }}>
          {name ? (
            <Text style={styles.titleText}> {name}</Text>
          ) : (
            <Image
              style={styles.logoImage}
              source={require("../assets/images/logo.png")}
            />
          )}
        </View>
        <View style={{ flex: 1 }}>
          {!name && (
            <TouchableOpacity style={{ marginLeft: "15%", marginRight: "15%" }}>
              <AntDesign name="search1" size={RFValue(20)} color={"#fff"} />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {!name && (
        <TouchableOpacity
          style={[
            styles.limitView,
            { flexDirection: currentLanguage === "ar" ? "row-reverse" : "row" },
          ]}
        >
          <Image
            style={styles.limitImage}
            source={require("../assets/icons/writingIcon.png")}
          />
          <View>
            <Text
              style={{
                fontSize: RFValue(15),
                color: "#FFC709",
                textAlign: currentLanguage === "ar" ? "right" : "left",
              }}
            >
              {translatedItem.Getlimit}
            </Text>
            <Text
              style={{
                fontSize: RFValue(11),
                color: "#FFC709",
                textAlign: currentLanguage === "ar" ? "right" : "left",
                maxWidth: "99%",
              }}
            >
              {translatedItem.CompleteInfoand}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
});

export const ChackOutView = () => {
  const { currentLanguage } = useContext(LanguageContext);
  const translatedItem = items().translate;

  return (
    <View style={styles.chackOutView}>
      <Image
        style={{
          width: "100%",
          height: "100%",
          resizeMode: "cover",
        }}
        source={require("../assets/images/VectorImage.png")}
      />
      <View
        style={[
          styles.nikeView,
          {
            flexDirection: currentLanguage === "ar" ? "row-reverse" : "row",
          },
        ]}
      >
        <View style={styles.nikeCircleView}>
          <Image
            style={styles.nikeImage}
            source={require("../assets/icons/simple-icons_nike.png")}
          />
        </View>
        <TouchableOpacity
          style={{
            marginLeft: "3%",
            marginRight: "3%",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: currentLanguage === "ar" ? "row-reverse" : "row",
          }}
        >
          <Text
            style={{
              fontSize: RFValue(16),
            }}
          >
            {translatedItem.Checkout}
          </Text>
          <MaterialIcons
            style={{ marginTop: "2%" }}
            name={
              currentLanguage === "ar"
                ? "keyboard-arrow-left"
                : "keyboard-arrow-right"
            }
            size={RFValue(20)}
            color={"white"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  notificationFavoriteContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  logoImage: {
    width: RFValue(30),
    height: RFValue(50),
    resizeMode: "contain",
  },
  NotificationPop: {
    position: "absolute",
    zIndex: 1,
    backgroundColor: "#3EBDAC",
    width: RFValue(8),
    height: RFValue(8),
    borderRadius: RFValue(4),
    right: 0,
  },
  titleText: {
    color: "#fff",
    fontSize: RFValue(24),
  },
  icon: {
    marginLeft: "10%",
    marginRight: "10%",
  },
  limitView: {
    height: RFValue(52),
    width: "90%",
    marginTop: "4%",
    borderRadius: RFValue(10),
    borderWidth: 1,
    alignItems: "center",
    padding: "2%",
    borderColor: "#FFC709",
  },
  limitImage: {
    width: RFValue(35),
    height: RFValue(39),
    resizeMode: "contain",
    margin: "1%",
  },
  chackOutView: {
    marginTop: "-13%",
    width: screenWidth * 0.9,
    height: RFValue(120),
    borderRadius: RFValue(20),
    borderWidth: 2,
    borderColor: "#3EBDAC",
    overflow: "hidden",
  },
  nikeView: {
    position: "absolute",
    zIndex: 1,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  nikeCircleView: {
    alignItems: "center",
    justifyContent: "center",
    width: RFValue(60),
    height: RFValue(60),
    borderRadius: RFValue(30),
    backgroundColor: "black",
  },
  nikeImage: {
    width: RFValue(40),
    height: RFValue(40),
    resizeMode: "cover",
  },
});
