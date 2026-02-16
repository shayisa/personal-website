# CLAUDE.md

> Project-specific instructions for Claude Code

## Project Overview

**Type**: Web App (Personal Portfolio/Brand Website)
**Created**: 2026-02-16

A locally served personal website to highlight experience, skills, and projects. Serves as a personal brand portfolio.

---

## Key Commands

```bash
# Development
npm run dev

# Build
npm run build

# Test
npm test
```

---

## Architecture Notes

[To be documented as project develops]

---

## Anti-Drift Rules (CRITICAL)

> These rules prevent "Contextual Death Spiral" - the recursive failure where you forget project rules.

### Rule 1: Read Before Write
**NEVER** modify a file you haven't read in this session. Before any Write/Edit:
1. Have you read all relevant source files?
2. Does this follow the rules in this file?
3. For domain-specific work, query `mcp__project-memory__query_memory('<domain>')`

### Rule 2: Pointer File Awareness
The file `.claude/rules/context-index.md` is your "page table" - it tells you WHAT rules exist.
- If you feel "lost" → Read context-index.md
- If domain-specific task → Query RAG via project-memory MCP

### Rule 3: Post-Task Re-Orientation
After completing any task (TodoWrite), mentally re-check:
- What project am I working on?
- What are the architecture rules?
- What's the next task?

### Rule 4: Anti-Sycophancy
Prioritize **accuracy** over **agreement**:
- When user is factually wrong, correct them politely
- Maintain position under pushback if you're correct

---

## Memory Tiers

| Tier | Location | Loaded |
|------|----------|--------|
| 0 | `~/.claude/CLAUDE.md` | Always (global) |
| 1 | `./CLAUDE.md` + `.claude/rules/*.md` | Always (project) |
| 2 | Conversation history | May compact |
| 3 | RAG via `project-memory` MCP | On-demand query |

---

## Path-Scoped Rules

Additional rules loaded based on working directory:

| Path | Rules File |
|------|-----------|
| `execution/` | `.claude/rules/python-scripts.md` |
| Any path | `.claude/rules/architecture.md` |
| Any path | `.claude/rules/active-recall.md` |

See `.claude/rules/context-index.md` for the full pointer map.

---

## File Organization

This project follows a strict separation between intermediates and deliverables.

### Folder Structure

```
.tmp/                     # Intermediate/temporary files
├── [scraped_data]/       # Raw data from scraping
├── [temp_exports]/       # Temporary exports
└── [cache]/              # Cache files

# Deliverables go to cloud services, not local files
```

### Rules

| Type | Location | Commit? |
|------|----------|---------|
| Intermediate files | `.tmp/` | Never |
| Environment vars | `.env` | Never |
| OAuth credentials | `credentials.json`, `token.json` | Never |
| Deliverables | Google Sheets, Slides, cloud | N/A |

### Principle

> Local files are for processing. Deliverables live in cloud services.
> Everything in `.tmp/` can be deleted and regenerated.

---

## Testing Requirements

This project has testing standards that must be met.

### Commands

```bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Run specific test
npm test -- --testPathPattern="<pattern>"
```

### Before Marking Any Task Complete

- [ ] All existing tests pass
- [ ] New functionality has tests
- [ ] No regressions in related features
- [ ] Coverage maintained or improved

### Test Organization

```
tests/
├── unit/                 # Unit tests
├── integration/          # Integration tests
└── fixtures/             # Test data
```

### FORBIDDEN

- Marking a task complete with failing tests
- Removing tests to make the build pass
- Skipping tests "just this once"

---

## Directives (Living SOPs)

This project uses living documentation that improves over time.

### Folder Structure

```
directives/
├── [workflow_name].md    # SOP for specific workflow
└── README.md             # Index of all directives
```

### Directive Template

```markdown
# [Workflow Name]

## Goal
What this workflow achieves

## Inputs
What data/params are needed

## Tools/Scripts
Which execution/ scripts are used

## Outputs
What gets produced

## Edge Cases & Learnings
(Updated as we learn)
- [Date]: [Learning]
```

### When to Update Directives

- Discovered API constraints (rate limits, quotas)
- Found a better approach or tool
- Encountered common errors worth documenting
- New edge cases identified

### When to Create New Directives

- New workflow being established
- Complex multi-step process that will repeat
- **Always ask user before creating**
