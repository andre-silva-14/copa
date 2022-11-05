import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import * as Font from "expo-font";

export const useFonts = async () => {
  await Font.loadAsync({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });
};
