/**
 * Continuous onchain observer.
 * Implementation details intentionally abstracted.
 */

export type IndexerStatus = "idle" | "running" | "paused";

export class Indexer {
  private status: IndexerStatus = "idle";

  start() {
    this.status = "running";
  }

  pause() {
    this.status = "paused";
  }

  getStatus(): IndexerStatus {
    return this.status;
  }
}
