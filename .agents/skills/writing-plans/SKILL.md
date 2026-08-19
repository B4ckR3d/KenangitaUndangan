---
name: writing-plans
description: Use when you have a spec or requirements for a multi-step task, before touching code
---

# Writing Plans

## Overview

Write comprehensive implementation plans assuming the engineer has zero context for our codebase. Document everything they need to know: which files to touch for each task, code, testing, and verification steps. Give them the whole plan as bite-sized tasks. DRY. YAGNI. TDD.

**Announce at start:** "I'm using the writing-plans skill to create the implementation plan."

## Task Right-Sizing

A task is the smallest unit that carries its own test cycle and is worth a fresh reviewer's gate. Fold setup, configuration, scaffolding, and documentation steps into the task whose deliverable needs them.

## Bite-Sized Task Granularity (2-5 minutes per step)

- Step 1: Write the failing test (RED)
- Step 2: Run it to verify it fails correctly
- Step 3: Implement minimal code to pass (GREEN)
- Step 4: Run tests to verify all pass
- Step 5: Refactor and commit
