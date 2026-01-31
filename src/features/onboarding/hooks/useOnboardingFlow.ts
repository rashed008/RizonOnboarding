//

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
        setShowEnjoyingSheet(true); // ✅ FIRST bottom sheet
      }
    };

    init();
  }, []);

  return {
    showEnjoyingSheet,
    showFeedbackSheet,
    showReviewSheet,
    setShowEnjoyingSheet,
    setShowFeedbackSheet,
    setShowReviewSheet,
  };
};
