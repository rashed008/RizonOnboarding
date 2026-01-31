import React from "react";
import { Text, View } from "react-native";
import { onboardingApi } from "../src/api/onboarding.api";
import { useOnboardingFlow } from "../src/features/onboarding/hooks/useOnboardingFlow";
import EnjoyingRizonSheet from "../src/features/onboarding/sheets/EnjoyingRizonSheet";
import FeedbackSheet from "../src/features/onboarding/sheets/FeedbackSheet";
import ReviewSheet from "../src/features/onboarding/sheets/ReviewSheet";
import { redirectToStore } from "../src/utils/storeRedirect";

export default function HomeScreen() {
  const {
    showEnjoyingSheet,
    showFeedbackSheet,
    showReviewSheet,
    setShowEnjoyingSheet,
    setShowFeedbackSheet,
    onUserLovesApp,
  } = useOnboardingFlow();

  return (
    <View style={{ flex: 1 }}>
      <Text> </Text>

      {showEnjoyingSheet && (
        <EnjoyingRizonSheet
          onNotYet={() => {
            setShowEnjoyingSheet(false);
            setShowFeedbackSheet(true);
          }}
          onYes={onUserLovesApp}
        />
      )}

      {showFeedbackSheet && (
        <FeedbackSheet
          onSubmit={async (text) => {
            await onboardingApi.submitFeedback(text);
          }}
        />
      )}

      {showReviewSheet && (
        <ReviewSheet
          onReviewPress={() => {
            redirectToStore();
          }}
        />
      )}
    </View>
  );
}
