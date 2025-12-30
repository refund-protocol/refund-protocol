# Data Flow

At a high level, REFUND processes data through the following flow:

- Onchain activity is monitored and indexed
- Rug-like events are classified using predefined criteria
- Affected wallets are evaluated against eligibility constraints
- Extracted value is routed into recovery pools
- Refunds are distributed in deterministic batches

Implementation specifics are intentionally abstracted.
