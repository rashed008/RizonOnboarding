import { Linking, Platform } from "react-native";

export const redirectToStore = () => {
  const url =
    Platform.OS === "ios"
      ? "https://www.apple.com/app-store/"
      : "https://play.google.com/store/games?hl=en";

  Linking.openURL(url);
};
