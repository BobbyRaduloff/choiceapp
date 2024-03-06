import "../assets/global.css";
import { SplashScreen, Stack } from "expo-router";
import { useColorScheme } from "@/components/useColorScheme";
import { useFonts, FiraSans_400Regular } from "@expo-google-fonts/fira-sans";
import React from "react";
import { View } from "react-native";

// Catch any errors thrown by the layout component
export { ErrorBoundary } from "expo-router";

// don't auto hide splash screen until i say so
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    FiraSans_400Regular,
  });

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return (
    <View className="w-full min-h-full" onLayout={onLayoutRootView}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </View>
  );
}
