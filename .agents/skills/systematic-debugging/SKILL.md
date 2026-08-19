---
name: systematic-debugging
description: Use when encountering any bug, test failure, or unexpected behavior, before proposing fixes
---

# Systematic Debugging

## Overview

**Core principle:** ALWAYS find root cause before attempting fixes. Symptom fixes are failure.

## The Iron Law

```
NO FIXES WITHOUT ROOT CAUSE INVESTIGATION FIRST
```

If you haven't completed Phase 1, you cannot propose fixes.

## The Four Phases

You MUST complete each phase before proceeding to the next.

### Phase 1: Root Cause Investigation
1. **Read Error Messages Carefully**: Read stack traces completely, note line numbers, error codes.
2. **Reproduce Consistently**: Identify exact steps to trigger the issue reliably.
3. **Check Recent Changes**: Inspect git diff, recent commits, dependency changes.
4. **Gather Evidence in Multi-Component Systems**: Log inputs/outputs across boundaries.
5. **Trace Data Flow**: Trace backward until the source origin is found.

### Phase 2: Pattern Analysis
1. **Find Working Examples**: Locate similar working code in the codebase.
2. **Compare Against References**: Read reference implementations line by line.
3. **Identify Differences**: Catalog every difference between working and broken code.

### Phase 3: Hypothesis and Testing
1. **Form Single Hypothesis**: State clearly: "I think X is the root cause because Y".
2. **Test Minimally**: Test the hypothesis with the smallest possible experiment.

### Phase 4: Implementation and Verification
1. **Fix at the Root Cause**: Do not mask symptoms.
2. **Verify with Tests**: Confirm fix passes and causes no regressions.
