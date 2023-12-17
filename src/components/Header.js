import React, { memo } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Octicons, AntDesign, MaterialIcons } from "@expo/vector-icons";

export default Header = memo(({ name }) => {
  return (
    <View
      style={{
        width: "93%",
        position: "absolute",
        zIndex: 1,
        top: Platform.OS === "ios" ? (name ? "10%" : "7%") : name ? "6%" : "3%",
        alignItems: "center",
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
              width={RFValue(35)}
              height={RFValue(62)}
              resizeMode="contain"
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
        <TouchableOpacity style={styles.limitView}>
          <Image
            resizeMode="cover"
            source={require("../assets/icons/writingIcon.png")}
          />
          <View style={{ marginLeft: "3%" }}>
            <Text style={{ fontSize: RFValue(15), color: "#FFC709" }}>
              Get your limit
            </Text>
            <Text
              style={{
                fontSize: RFValue(11),
                color: "#FFC709",
                marginTop: "2%",
              }}
            >
              Complete your infoand get up to EGP 100,000
            </Text>
          </View>
        </TouchableOpacity>
      )}
      {!name && (
        <View style={styles.chackOutView}>
          <Image
            style={{
              resizeMode: "cover",
            }}
            source={require("../assets/images/VectorImage.png")}
          />
          <View style={styles.nikeView}>
            <View style={styles.nikeCircleView}>
              <Image
                resizeMode="contain"
                source={require("../assets/icons/simple-icons_nike.png")}
              />
            </View>
            <TouchableOpacity style={{ flexDirection: "row" }}>
              <Text style={{ marginLeft: "3%", fontSize: RFValue(16) }}>
                Check out latest offers
              </Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={RFValue(20)}
                color={"white"}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
});
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
  image: {
    width: RFValue(20),
    height: RFValue(20),
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
    marginTop: "4%",
    borderRadius: RFValue(10),
    borderWidth: 1,
    alignItems: "center",
    padding: "3%",
    borderColor: "#FFC709",
    flexDirection: "row",
  },
  chackOutView: {
    marginTop: "5%",
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
    flexDirection: "row",
    alignItems: "center",
  },
  nikeCircleView: {
    marginLeft: "5%",
    alignItems: "center",
    justifyContent: "center",
    width: RFValue(60),
    height: RFValue(60),
    borderRadius: RFValue(30),
    backgroundColor: "black",
  },
});
