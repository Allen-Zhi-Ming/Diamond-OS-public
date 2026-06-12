# Route Module Contract

## Purpose

This note defines a public-safe contract for route modules in Diamond OS Public.

A route module is an attachable feature surface. It can describe a feature boundary, a mock route, a validation rule, or a local example. It should not replace the app shell or import private package content.

## Contract principles

- A route module attaches to the shell; it does not become the shell.
- A route module uses explicit names and predictable file boundaries.
- A route module can include mock data only when the data is generic and removable.
- A route module should include local validation when possible.
- A route module should document its public release boundary.

## Required public fields

A public route module note should identify:

- `routeId`: stable route identifier for the mock or documentation surface.
- `moduleScope`: short description of the feature boundary.
- `dataPolicy`: expected value is `mock-only` for public examples.
- `shellPolicy`: expected value is `attach-only` or `route-module-only`.
- `validation`: local checks that can run without private services.

## Allowed example content

- Placeholder route metadata.
- Generic component names.
- Mock graph or checklist data.
- Local validation scripts.
- Public documentation links.

## Disallowed example content

- Private source package files.
- Build output.
- Full validation logs.
- Deployment configuration.
- Database configuration.
- Secrets or environment values.
- Internal handoff material.

## Relationship to App Shell Protection

The app shell remains the stable entry point. Route modules can define feature surfaces and validation examples, but they must not replace, weaken, or bypass the shell boundary.

## Relationship to AI Brain Map

AI Brain Map examples should follow this route module contract. They can describe module boundaries, mock graph structures, and validation steps, but they must remain public-safe and mock-only.

## Review checklist

Before adding or changing a route module example, confirm that:

- The module has a clear route boundary.
- The shell remains the stable outer layer.
- All data is placeholder data.
- The example runs locally without private services.
- The documentation explains what is intentionally excluded.
