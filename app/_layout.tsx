import { Stack } from "expo-router";
import "./global.css";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native";

export default function RootLayout() {
  return (
    <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="photos/[id]" options={{ headerShown: false }} />
    </Stack>
  );
}
