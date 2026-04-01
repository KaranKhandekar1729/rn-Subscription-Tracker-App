import "@/global.css"
import { Text } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from 'nativewind';
const SafeAreaView = styled(RNSafeAreaView)

export default function App() {
  return (
      <SafeAreaView className="flex-1 bg-background p-5">
        <Text className="text-6xl font-sans-extrabold">
          Home
        </Text>
        <Link href='/onboarding' className="font-sans-bold mt-4 rounded bg-primary text-white p-4">Go to Onboarding</Link>
        <Link href='/(auth)/sign-in' className="font-sans-bold mt-4 rounded bg-primary text-white p-4">Sign in</Link>
        <Link href='/(auth)/sign-up' className="font-sans-bold mt-4 rounded bg-primary text-white p-4">Sign up</Link>
      </SafeAreaView>
  );
}