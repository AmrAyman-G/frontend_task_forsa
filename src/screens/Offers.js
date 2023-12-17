import React, { memo } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import TopBackgroundClip from "../components/TopBackgroundClip";
import { items } from "../constants/types/items";

const Offers = memo(() => {
  const translatedItem = items().translate;
  return (
    <View style={styles.container}>
      <TopBackgroundClip height={"25%"} top={"-5%"} />
      <Header name={translatedItem.Offers} />

      <StatusBar style="auto" />
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

export default Offers;
