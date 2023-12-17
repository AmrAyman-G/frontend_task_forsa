import React, { memo } from "react";
import { StatusBar, StyleSheet, Image, View, Platform } from "react-native";
import TopBackgroundClip from "../components/TopBackgroundClip";
import Header from "../components/Header";

import ListContainer from "../components/ListComponent/ListContainer";

const Home = memo(() => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TopBackgroundClip height={"35%"} />
      <Header />
      <Image source={require("../assets/images/arrows.png")} />
      <View
        style={{
          flex: 1,
          marginTop: Platform.OS === "android" ? "-30%" : "-25%",
        }}
      >
        <ListContainer />
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
});

export default Home;
