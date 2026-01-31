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
import { onboardingApi } from "../src/api/onboarding.api";
import { useOnboardingFlow } from "../src/features/onboarding/hooks/useOnboardingFlow";
import EnjoyingRizonSheet from "../src/features/onboarding/sheets/EnjoyingRizonSheet";
import FeedbackSheet from "../src/features/onboarding/sheets/FeedbackSheet";

export default function HomeScreen() {
  const {
    showEnjoyingSheet,
    showFeedbackSheet,
    setShowEnjoyingSheet,
    setShowFeedbackSheet,
  } = useOnboardingFlow();

  return (
    <View style={{ flex: 1 }}>
      {/* Normal app content */}
      <Text>Home Screen</Text>

      {/* ✅ FIRST bottom sheet */}
      {showEnjoyingSheet && (
        <EnjoyingRizonSheet
          onNotYet={() => {
            setShowEnjoyingSheet(false);
            setShowFeedbackSheet(true); // 👉 immediately show feedback sheet
          }}
          onYes={() => {
            setShowEnjoyingSheet(false);
          }}
        />
      )}

      {/* ✅ SECOND bottom sheet (Feedback) */}
      {showFeedbackSheet && (
        <FeedbackSheet
          onSubmit={async (text) => {
            await onboardingApi.submitFeedback(text);
            setShowFeedbackSheet(false); // close after success
          }}
        />
      )}
    </View>
  );
}
