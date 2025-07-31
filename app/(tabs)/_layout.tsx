import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Tabs } from "expo-router";
import type { TextStyle, ViewStyle } from "react-native";
import { Text, View } from "react-native";

const tabConfig = [
  { name: "index", label: "Home", icon: "home" },
  { name: "Search", label: "Projects", icon: "folder" },
  { name: "profile", label: "Profile", icon: "person" },
  { name: "Saved", label: "Qualifications", icon: "school" },
];

type TabBarIconProps = { focused: boolean };

const getTabBarIcon =
  (icon: string, label: string) =>
  ({ focused }: TabBarIconProps) => {
    const activeColors = ["#374151", "#6b7280"] as [string, string];
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
    const iconColor = focused ? "#fff" : "#ffffff";
    const textColor = focused ? "#fff" : "#ffffff";
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
            tabBarActiveTintColor: "#ffffff",
            tabBarInactiveTintColor: "#ffffff",
          }}
        />
      ))}
    </Tabs>
  );
};

export default _layout;
