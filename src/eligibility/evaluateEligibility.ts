import { WalletContext, EligibilityResult } from "../types/eligibility";

/**
 * Deterministic eligibility evaluation.
 * No side effects. No RPC calls.
 */
export function evaluateEligibility(context: WalletContext): EligibilityResult {
  if (!context.firstInteractionAt) {
    return { status: "under_review" };
  }

  if (context.firstInteractionAt > Date.now()) {
    return { status: "ineligible", reason: "invalid_timestamp" };
  }

  return { status: "eligible" };
}
