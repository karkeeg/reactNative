import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Tabs } from "expo-router";
import React from "react";
import type { TextStyle, ViewStyle } from "react-native";
import { Text, View } from "react-native";

const tabConfig = [
  { name: "index", label: "Home", icon: "home" },
  { name: "Search", label: "Search", icon: "search" },
  { name: "profile", label: "Profile", icon: "person" },
  { name: "Saved", label: "Saved", icon: "bookmark" },
];

type TabBarIconProps = { focused: boolean };

const getTabBarIcon =
  (icon: string, label: string) =>
  ({ focused }: TabBarIconProps) => {
    const activeColors = ["#3B3B1A", "#AEC8A4"] as [string, string];
    const containerStyle: ViewStyle = {
      borderRadius: 100,
      width: focused ? 102 : 48,
      height: 50,
      marginTop: 10,
      marginLeft: 20,
      marginRight: 20,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: focused ? 15 : 0,
      alignSelf: "center",
      flexDirection: "column",
    };
    const iconColor = focused ? "#fff" : "#123121";
    const textColor = focused ? "#fff" : "#123121";
    const textStyle: TextStyle = {
      color: textColor,
      fontSize: 12,
      fontWeight: "700",
      marginTop: 2,
    };
    if (focused) {
      return (
        <LinearGradient
          colors={activeColors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={containerStyle}
        >
          <Ionicons name={icon as any} size={20} color={iconColor} />
          <Text style={textStyle}>{label}</Text>
        </LinearGradient>
      );
    } else {
      return (
        <View style={containerStyle}>
          <Ionicons name={icon as any} size={20} color={iconColor} />
          <Text style={textStyle}>{label}</Text>
        </View>
      );
    }
  };

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "transparent",
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          position: "absolute",
         
          margin:20,
        },
      }}
    >
      {tabConfig.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.label,
            headerShown: false,
            tabBarIcon: getTabBarIcon(tab.icon, tab.label),
            tabBarLabel: () => null,
            tabBarActiveTintColor: "#123123",
            tabBarInactiveTintColor: "#8e8e93",
          }}
        />
      ))}
    </Tabs>
  );
};

export default _layout;
