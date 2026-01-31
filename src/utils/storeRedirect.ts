import { Linking, Platform } from "react-native";

export const redirectToStore = () => {
  const url =
    Platform.OS === "ios"
      ? "https://apps.apple.com/us/app/rizon-stablecoin-finance/id6745082515"
      : "https://play.google.com/store/apps/details?id=com.rizon.app&hl=en";

  Linking.openURL(url);
};
