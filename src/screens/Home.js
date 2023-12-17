import React, { memo } from "react";
import {
  StatusBar,
  StyleSheet,
  Image,
  View,
  Platform,
  ImageBackground,
  Dimensions,
} from "react-native";
import TopBackgroundClip from "../components/TopBackgroundClip";
import Header, { ChackOutView } from "../components/Header";
import ListContainer from "../components/ListComponent/ListContainer";
import { RFValue } from "react-native-responsive-fontsize";

const Home = memo(() => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TopBackgroundClip height={Platform.OS === "ios" ? "35%" : "30%"} />
      <Header />
      <ImageBackground
        style={styles.arrowImage}
        source={require("../assets/images/arrows.png")}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
          }}
        >
          <ChackOutView />
          <ListContainer home={true} />
        </View>
      </ImageBackground>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  arrowImage: {
    flex: 1,
    width: "100%",
    height: RFValue(150),
    resizeMode: "contain",
    alignItems: "center",
  },
});

export default Home;
