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

  const onNotYet = () => {
    setShowEnjoyingSheet(false);
    setShowFeedbackSheet(true);
  };

  const onYesLovingIt = async () => {
    setShowEnjoyingSheet(false);
    await onboardingApi.scheduleReviewPrompt();
  };

  const onFeedbackSubmit = async (text: string) => {
    await onboardingApi.submitFeedback(text); // wait → NO race condition
    setShowFeedbackSheet(false);
  };

  return {
    showEnjoyingSheet,
    showFeedbackSheet,
    showReviewSheet,
    onNotYet,
    onYesLovingIt,
    onFeedbackSubmit,
  };
};
