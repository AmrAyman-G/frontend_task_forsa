import React, { memo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default CustomTabBarIcon = memo(
  ({ screenName, size, focused, source }) => {
    return (
      <View style={styles.iconView}>
        <Image
          style={{ width: size, height: size, resizeMode: "contain" }}
          tintColor={focused ? "#072040" : "#C9C9C9"}
          source={source}
        />
        <Text
          style={{
            fontSize: 16,

            color: focused ? "#000000" : "#C9C9C9",
          }}
        >
          {screenName}
        </Text>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  iconView: {
    alignItems: "center",
    paddingTop: "4%",
  },
});
