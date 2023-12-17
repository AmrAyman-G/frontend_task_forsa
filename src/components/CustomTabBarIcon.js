import React, { memo, useEffect, useState } from "react";
import { Image, Platform, StyleSheet, Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import * as Device from "expo-device";

export default CustomTabBarIcon = memo(({ screenName, focused, source }) => {
  const [deviceType, setDeviceType] = useState("");
  const getDeviceType = async () => {
    const isTablet = await Device.getDeviceTypeAsync();

    setDeviceType(isTablet);
  };
  useEffect(() => {
    getDeviceType();
  }, []);

  return (
    <View
      style={[
        styles.iconView,
        { top: Platform.isPad ? "19%" : deviceType === 2 ? "43%" : "4%" },
      ]}
    >
      <Image
        style={{
          width: RFValue(20),
          height: RFValue(20),
          resizeMode: "contain",
        }}
        tintColor={focused ? "#072040" : "#C9C9C9"}
        source={source}
      />
      <Text
        style={{
          fontSize: RFValue(16),
          width: "100%",
          color: focused ? "#000000" : "#C9C9C9",
        }}
      >
        {screenName}
      </Text>
    </View>
  );
});

const styles = StyleSheet.create({
  iconView: {
    justifyContent: "center",
    alignItems: "center",
  },
});
