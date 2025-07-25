import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-[#B1AB86]">
      <Text className="text-2xl text-[#123123] font-bold text-center">
        Welcome to Karkee's Photography
      </Text>
      <Link href="/Onboarding">Onboarding</Link>
    </SafeAreaView>
  );
}
