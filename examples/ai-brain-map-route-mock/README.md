# AI Brain Map Route Mock

This example shows a public-safe route mock for an AI Brain Map module.

It does not import private Q-G source code. It uses small placeholder data only.

## Purpose

- Show how a Brain Map module can be represented through a route boundary.
- Keep the app shell separate from the feature module.
- Keep example data generic and removable.

## Files

- `mock-route.json`: route and module metadata.
- `mock-brain-graph.json`: placeholder graph data.
- `validate-mock.mjs`: small validation script.

## Run

```bash
node examples/ai-brain-map-route-mock/validate-mock.mjs
```

## Expected result

The script prints `AI Brain Map route mock validation passed`.
