export type Claim = {
  claimId: string;
  walletAddress: string;
  eventId: string;
  submittedAt: number;
  status: "submitted" | "batched" | "finalized";
};
