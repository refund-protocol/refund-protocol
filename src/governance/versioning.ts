/**
 * Protocol versioning utilities.
 * Used to gate behavior changes safely.
 */

export type ProtocolVersion = {
  major: number;
  minor: number;
  patch: number;
};

export const CURRENT_VERSION: ProtocolVersion = {
  major: 0,
  minor: 1,
  patch: 0,
};

export function versionToString(v: ProtocolVersion): string {
  return `${v.major}.${v.minor}.${v.patch}`;
}
