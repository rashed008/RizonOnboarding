import { useEffect, useState } from "react";
import { onboardingApi } from "../../../api/onboarding.api";

export const useOnboardingFlow = () => {
  const [showEnjoyingSheet, setShowEnjoyingSheet] = useState(false);
  const [showFeedbackSheet, setShowFeedbackSheet] = useState(false);
  const [showReviewSheet, setShowReviewSheet] = useState(false);

  useEffect(() => {
    const init = async () => {
      const status: any = await onboardingApi.getOnboardingStatus();

      if (status.justOnboarded) {
        setShowEnjoyingSheet(true);
      }
    };

    init();
  }, []);

  const onUserLovesApp = async () => {
    // Notify backend that the user gave positive feedback.
    // This schedules the review prompt by storing a future
    // eligibility timestamp (e.g. now + 2–3 days).
    onboardingApi.scheduleReviewPrompt();

    // Close the current onboarding sheet
    setShowEnjoyingSheet(false);

    // Testing behavior:
    // The review bottom sheet is shown immediately to allow
    // easy verification of the flow.
    //
    // In production, this should NOT be shown here.
    // Instead, the app should check the backend-provided
    // `reviewPromptEligibleAt` timestamp on app launch
    // (or foreground) and show the review sheet only
    // after the 2–3 day delay has passed.
    setShowReviewSheet(true);
  };

  return {
    showEnjoyingSheet,
    showFeedbackSheet,
    showReviewSheet,
    setShowEnjoyingSheet,
    setShowFeedbackSheet,
    setShowReviewSheet,
    onUserLovesApp,
  };
};
