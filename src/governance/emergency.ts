/**
 * Emergency controls.
 * These mechanisms are intentionally restrictive.
 */

let emergencyPaused = false;

export function triggerEmergencyPause(): void {
  emergencyPaused = true;
}

export function clearEmergencyPause(): void {
  emergencyPaused = false;
}

export function isEmergencyPaused(): boolean {
  return emergencyPaused;
}
