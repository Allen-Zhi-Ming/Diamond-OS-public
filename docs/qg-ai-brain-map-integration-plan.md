# Q-G AI Brain Map Integration Plan

## Purpose

This note defines a public-safe integration plan for bringing AI Brain Map concepts into the Q-G final architecture direction.

## Baseline

The final architecture package remains the trunk.

The AI Brain Map package is treated as a specialized module package.

QG v362 already shows a later integration direction through AI brain route surfaces and module-oriented structures.

## Integration approach

Use modular grafting instead of full package replacement.

Recommended target shape:

- `src/modules/ai-brain-map/`
- route module binding
- component registry
- graph contract notes
- scoped styles
- validation notes

## What should not happen

- Do not replace the final architecture app shell.
- Do not import full build artifacts.
- Do not publish private logs.
- Do not expose deployment details.
- Do not copy full package history into the public repository.

## Required public docs before code examples

- Architecture map
- Integration plan
- Validation surface
- Public release boundary
- Mock example plan

## Next step

Create a small public-safe mock route example after the documentation boundary is stable.
