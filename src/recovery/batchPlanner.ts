import { Claim } from "../types/claims";

/**
 * Groups claims into deterministic batches.
 * Execution is intentionally abstracted.
 */
export function planRecoveryBatch(claims: Claim[]): Claim[][] {
  const batches: Claim[][] = [];
  const batchSize = 100;

  for (let i = 0; i < claims.length; i += batchSize) {
    batches.push(claims.slice(i, i + batchSize));
  }

  return batches;
}
