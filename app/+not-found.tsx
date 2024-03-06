import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View className="flex flex-col gap-2 items-center justify-center">
        <Text className="font-xl font-bold">This screen doesn't exist.</Text>

        <Link href="/">
          <Text className="underline text-blue-dark dark:text-blue-light">
            Go to home screen!
          </Text>
        </Link>
      </View>
    </>
  );
}
