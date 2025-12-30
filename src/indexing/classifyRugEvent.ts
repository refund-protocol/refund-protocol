import { RugEvent } from "../types/events";

/**
 * Classifies a potential rug event.
 * This function does not perform onchain indexing.
 */
export function classifyRugEvent(input: {
  tokenAddress: string;
  signals: number;
}): RugEvent {
  return {
    eventId: crypto.randomUUID(),
    tokenAddress: input.tokenAddress,
    detectedAt: Date.now(),
    classificationConfidence: Math.min(input.signals / 10, 1),
  };
}
