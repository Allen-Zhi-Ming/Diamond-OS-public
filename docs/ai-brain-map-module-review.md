# AI Brain Map Module Review

## Purpose

This note defines a public-safe review boundary for AI Brain Map module examples in Diamond OS Public.

AI Brain Map concepts can be documented as module surfaces and demonstrated with mock data. They should not replace the app shell, import private package content, or expose deployment details.

## Review principles

- Treat AI Brain Map as an attachable module surface.
- Keep the app shell as the stable outer layer.
- Use mock graph data only.
- Keep route module contracts explicit.
- Keep validation local and public-safe.
- Document what is intentionally excluded.

## Public module fields

A public AI Brain Map module example should identify:

- `moduleId`: stable identifier for the mock module.
- `routeId`: route identifier for the public example.
- `dataPolicy`: expected value is `mock-only`.
- `shellPolicy`: expected value is `attach-only` or `route-module-only`.
- `validation`: local checks that can run without private services.

## Allowed public content

- Placeholder graph nodes and edges.
- Mock route metadata.
- Local validation scripts.
- Documentation explaining module boundaries.
- Review notes for future public examples.

## Disallowed public content

- Private source package files.
- Production graph data.
- Build output.
- Deployment configuration.
- Database configuration.
- Private API keys, secrets, or environment values.
- Internal handoff material.
- Full validation logs.

## Relationship to app shell protection

AI Brain Map examples should attach to the shell through route module boundaries. They should not replace, weaken, or bypass the shell.

## Relationship to validation gates

AI Brain Map examples should use validation gates to confirm mock data policy, route metadata, module scope, and shell policy.

## Review checklist

Before adding or changing an AI Brain Map module example, confirm that:

- The module uses placeholder graph data only.
- The shell remains the stable entry point.
- The route module contract is clear.
- The validator does not call external services.
- No deployment or database configuration is included.
- The documentation explains what is intentionally excluded.
