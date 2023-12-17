import React, { memo } from "react";
import { View, StyleSheet } from "react-native";

export default TopBackgroundClip = memo(({ height, top }) => {
  return <View style={[styles.viewStyle, { height: height, top: top }]} />;
});
const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "#072040",
    width: "100%",
    transform: [{ scaleX: 1.7 }],
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
    alignItems: "center",
    justifyContent: "center",
  },
});
