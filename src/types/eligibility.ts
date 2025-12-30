export type EligibilityResult =
  | { status: "eligible" }
  | { status: "ineligible"; reason: string }
  | { status: "under_review" };

export type WalletContext = {
  walletAddress: string;
  firstInteractionAt?: number;
};
