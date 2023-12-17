import React, { memo } from "react";
import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Header from "../components/Header";
import TopBackgroundClip from "../components/TopBackgroundClip";
import { items } from "../constants/types/items";
import ListContainer from "../components/ListComponent/ListContainer";

const Offers = memo(() => {
  const translatedItem = items().translate;
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TopBackgroundClip height={"25%"} top={"-5%"} />
      <Header name={translatedItem.Offers} />

      <View
        style={{
          flex: 1,
          width: "100%",
          alignItems: "center",
          top: "-1%",
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

export default Offers;
