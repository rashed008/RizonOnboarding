// import { Text, View } from "react-native";

// export default function Index() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Text>Edit app/index.tsx to edit this screen.</Text>
//     </View>
//   );
// }

import React from "react";
import { Text, View } from "react-native";
import { useOnboardingFlow } from "../src/features/onboarding/hooks/useOnboardingFlow";
import EnjoyingRizonSheet from "../src/features/onboarding/sheets/EnjoyingRizonSheet";

export default function HomeScreen() {
  const { showEnjoyingSheet, setShowEnjoyingSheet, setShowFeedbackSheet } =
    useOnboardingFlow();

  return (
    <View style={{ flex: 1 }}>
      {/* Your normal app content */}
      <Text>Home Screen</Text>

      {/* ✅ FIRST onboarding bottom sheet */}
      {showEnjoyingSheet && (
        <EnjoyingRizonSheet
          onNotYet={() => {
            setShowEnjoyingSheet(false);
            setShowFeedbackSheet(true);
          }}
          onYes={() => {
            setShowEnjoyingSheet(false);
          }}
        />
      )}
    </View>
  );
}
