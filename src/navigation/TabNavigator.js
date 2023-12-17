import { memo } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import CustomTabBarIcon from "../components/CustomTabBarIcon";
import Offers from "../screens/Offers";
import Retail from "../screens/Retail";
import { items } from "../constants/types/items";

const Tab = createBottomTabNavigator();

const TabNavigator = memo(() => {
  const translatedItem = items().translate;
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { height: "9%", elevation: 20 },
      }}
    >
      {/* Home Screen*/}
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, size }) => (
            <CustomTabBarIcon
              focused={focused}
              size={size}
              screenName={translatedItem.Home}
              source={require("../assets/icons/homeIcon.png")}
            />
          ),
        }}
        name="Home"
        component={Home}
      />

      {/* retail Screen */}
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, size }) => (
            <CustomTabBarIcon
              focused={focused}
              size={size}
              screenName={translatedItem.Retail}
              source={require("../assets/icons/tagIcon.png")}
            />
          ),
        }}
        name="Retail"
        component={Retail}
      />

      {/* Offers Screen */}
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, size }) => (
            <CustomTabBarIcon
              focused={focused}
              size={size}
              screenName={translatedItem.Offers}
              source={require("../assets/icons/offersIcon.png")}
            />
          ),
        }}
        name="Offers"
        component={Offers}
      />

      {/* Profile Screen*/}
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, size }) => (
            <CustomTabBarIcon
              focused={focused}
              size={size}
              screenName={translatedItem.Profile}
              source={require("../assets/icons/userIcon.png")}
            />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
});

//tagIcon
//
export default TabNavigator;
