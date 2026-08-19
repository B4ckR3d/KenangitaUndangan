---
name: verification-before-completion
description: Use before declaring any task complete to verify tests, build, lint, and behavioral correctness
---

# Verification Before Completion

## Overview

Never mark a task complete without running comprehensive verification.

## Checklist

1. **Automated Tests**: Run test suite to ensure all unit and integration tests pass.
2. **Type Check & Build**: Ensure TypeScript compiles cleanly without errors or untyped overrides.
3. **Lint & Formatting**: Verify no lint errors or styling anomalies.
4. **Behavioral Testing**: Manually or programmatically confirm the user's explicit objective was met.
