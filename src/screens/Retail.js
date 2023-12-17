import React, { memo } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { items } from "../constants/types/items";
import TopBackgroundClip from "../components/TopBackgroundClip";
import Header from "../components/Header";

const Retail = memo(() => {
  const translatedItem = items().translate;

  return (
    <View style={styles.container}>
      <TopBackgroundClip height={"25%"} top={"-5%"} />
      <Header name={translatedItem.Retail} />
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

export default Retail;
