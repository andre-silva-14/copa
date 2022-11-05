import * as SplashScreen from "expo-splash-screen";
import { NativeBaseProvider, StatusBar } from "native-base";
import { useCallback, useEffect, useState } from "react";
import { useFonts } from "./src/hooks/useFonts";
import { SignIn } from "./src/screens/SignIn";
import { THEME } from "./src/styles/theme";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await useFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <NativeBaseProvider theme={THEME}>
      <SignIn onLayout={onLayoutRootView} />
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </NativeBaseProvider>
  );
}
