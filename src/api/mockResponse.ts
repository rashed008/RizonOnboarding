export interface OnboardingStatus {
  userId: string;
  justOnboarded: boolean;
  hasSubmittedFeedback: boolean;
  reviewPromptEligibleAt: number | null;
}

export const mockOnboardingStatus: OnboardingStatus = {
  userId: "12345",
  justOnboarded: true,
  hasSubmittedFeedback: false,
  reviewPromptEligibleAt: null,
};
