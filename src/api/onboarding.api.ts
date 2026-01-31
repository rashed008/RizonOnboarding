import { mockOnboardingStatus } from "./mockResponse";

export const onboardingApi = {
  getOnboardingStatus: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockOnboardingStatus);
      }, 500);
    });
  },

  submitFeedback: async (feedback: string) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Feedback sent:", feedback);
        resolve({ success: true });
      }, 800);
    });
  },

  scheduleReviewPrompt: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        mockOnboardingStatus.reviewPromptEligibleAt =
          Date.now() + 2 * 24 * 60 * 60 * 1000; // +2 days
        resolve({ success: true });
      }, 400);
    });
  },
};
