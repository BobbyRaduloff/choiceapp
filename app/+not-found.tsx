import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <View className="min-h-full w-full flex items-center justify-center">
      <View className="flex flex-col gap-2 items-center justify-center min-h-full w-full">
        <Text className="font-xl font-bold">This screen doesn't exist.</Text>

        <Link href="/">
          <Text className="underline text-blue-dark dark:text-blue-light">
            Go to home screen!
          </Text>
        </Link>
      </View>
    </View>
  );
}
