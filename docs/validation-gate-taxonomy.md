# Validation Gate Taxonomy

## Purpose

This note defines a public-safe taxonomy for validation gates in Diamond OS Public.

Validation gates describe how public examples, route modules, and architecture notes can be checked without using private services, deployment settings, or production data.

## Gate types

### Required gates

Required gates should pass before a public example is considered ready.

Examples:

- Required documentation files exist.
- Mock data files exist.
- Local validation scripts run without external services.
- Public examples use placeholder data only.
- Shell and route module boundaries remain clear.

### Optional gates

Optional gates improve clarity but do not block early documentation work.

Examples:

- Extra README sections.
- Additional mock scenarios.
- More detailed field descriptions.
- Review notes for future module expansion.

### Manual review gates

Manual review gates require human review before publishing larger changes.

Examples:

- Adding a new public module pattern.
- Changing app shell boundary wording.
- Expanding AI Brain Map examples.
- Adding architecture notes based on prior private package experience.

## Public-safe gate rules

A validation gate should:

- Run locally when possible.
- Use mock data only.
- Avoid private package files.
- Avoid deployment configuration.
- Avoid database configuration.
- Avoid full validation logs.
- Explain what is intentionally excluded.

## Relationship to mock examples

Mock examples should include small local validators when practical. These validators should check structure and policy fields, not private runtime behavior.

## Relationship to route modules

Route module examples should use validation gates to confirm route metadata, module scope, shell policy, and data policy.

## Review checklist

Before adding a new validation gate, confirm that:

- It can be explained in public documentation.
- It does not require private services.
- It does not expose production details.
- It improves clarity or safety.
- It aligns with the app shell and route module boundaries.
