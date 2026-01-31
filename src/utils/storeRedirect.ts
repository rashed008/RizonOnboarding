import { Linking, Platform } from "react-native";

export const redirectToStore = () => {
  const url =
    Platform.OS === "ios"
      ? "https://apps.apple.com/app/idXXXXXXXX"
      : "https://play.google.com/store/apps/details?id=XXXX";

  Linking.openURL(url);
};
