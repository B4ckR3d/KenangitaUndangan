---
name: skill-creator
description: Create new skills, modify and improve existing skills, and measure skill performance. Use when users want to create a skill from scratch, edit, or optimize an existing skill, run evals to test a skill, benchmark skill performance with variance analysis, or optimize a skill's description for better triggering accuracy.
---

# Skill Creator

A skill for creating new skills and iteratively improving them.

At a high level, the process of creating a skill goes like this:

- Decide what you want the skill to do and roughly how it should do it
- Write a draft of the skill
- Create a few test prompts and run evaluations on them
- Help the user evaluate the results both qualitatively and quantitatively
- Rewrite the skill based on feedback from the user's evaluation of the results
- Repeat until satisfied
- Optimize skill description for high triggering accuracy

## Creating a skill

### 1. Capture Intent
Start by understanding the user's intent:
1. What should this skill enable the agent to do?
2. When should this skill trigger? (what user phrases/contexts)
3. What's the expected output format?
4. Should we set up test cases / evals to verify the skill works?

### 2. Anatomy of a Skill
```
skill-name/
├── SKILL.md (required)
│   ├── YAML frontmatter (name, description required)
│   └── Markdown instructions
└── Bundled Resources (optional)
    ├── scripts/    - Executable code for deterministic/repetitive tasks
    ├── references/ - Docs loaded into context as needed
    └── assets/     - Files used in output (templates, icons, fonts)
```

### 3. Progressive Disclosure
Skills use a three-level loading system:
1. **Metadata** (name + description) - In context for discovery (~100 words).
2. **SKILL.md body** - In context whenever skill triggers (<500 lines ideal).
3. **Bundled resources** - Loaded on-demand as needed.

### 4. Writing Style & Principles
- Keep `SKILL.md` concise and structured.
- Use imperative form in instructions.
- Provide clear output templates and concrete input/output examples.
- Explain the rationale for constraints rather than ambiguous rules.
- Test and iterate.
