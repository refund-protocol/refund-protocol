/**
 * Feature flags allow controlled rollout of protocol behavior.
 * Flags are evaluated deterministically.
 */

export type FeatureFlag =
  | "eligibility_v2"
  | "batching_v2"
  | "extended_observation";

const ENABLED_FLAGS: Set<FeatureFlag> = new Set();

export function isFeatureEnabled(flag: FeatureFlag): boolean {
  return ENABLED_FLAGS.has(flag);
}
