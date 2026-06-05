# Q-G Public Release Boundary

## Purpose

This note defines what may be summarized in Diamond OS Public and what must stay outside the public repository.

## Can be public

- Architecture summaries
- Module relationship notes
- Review checklists
- Mock data rules
- Validation purpose summaries
- Public-safe integration plans
- Small examples using mock data only

## Should stay private

- Full source packages
- Build artifacts
- Full logs
- Deployment configuration
- Database configuration
- Complete validation output
- Internal handoff documents
- Private package history

## Release rule

Public material should explain the architecture direction without exposing operational details.

## Example rule

Examples should use mock data, local-only assumptions, and minimal files.

## Next step

Use this boundary before adding any public example derived from Q-G or AI Brain Map packages.
