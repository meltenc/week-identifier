# AGENTS.md

Guidance for coding agents (Claude Code, etc.) working in this repository.

## Project

Zero-dependency Node.js library + CLI that returns a unique, sequential week number for a date. Week #1 is the week of Monday, January 5, 1970. Published on npm as `week-identifier` (CommonJS, Node.js >= 22).

- `index.js` – library:
  - `weekIdentifier(date?)` → week number. Accepts a date string, a `Date` (any realm), a ms timestamp, or nothing (now). Throws on invalid string/Date/timestamp; other types (`null`, objects…) fall back to now – changing that is a breaking change (v3).
  - `dateFromWeek(weekId)` → `Date` of the Monday 00:00 (local time) starting that week. Accepts numbers or numeric strings (`Number()` semantics). Fractional ids are floored, ids <= 0 return the epoch Monday. Throws `Error` on non-numeric input, `RangeError` beyond the `Date` range.
- `cli.js` – `week-identifier [date]`, `--from <id>`, `--help`/`-h`, `--version`/`-v`. Errors go to stderr with exit code 1.
- `test.js` (library, incl. multi-timezone/DST tests) and `test-cli.js` (CLI, spawns `cli.js`).

## Key behavior

- Weeks are counted on the **local calendar day**: the local Y/M/D is converted with `Date.UTC` before dividing, so DST shifts never move a week boundary. Don't reintroduce millisecond arithmetic on local timestamps.
- `dateFromWeek` uses `new Date(1970, 0, 5 + days)` (local date arithmetic) for the same reason.
- DST tests set `process.env.TZ` at runtime and loop over several zones; new date logic must pass them.
- Date-only ISO strings (`'2026-07-06'`) are parsed as UTC by JavaScript itself – documented in the README, not a bug to "fix" in the library.

## Commands

```bash
npm ci
npm test              # mocha + nyc (100% coverage expected)
npm run lint          # ESLint 10, flat config (eslint.config.js)
npm run format:check  # Prettier
```

## Conventions

- ES2020+ CommonJS, `'use strict'`, descriptive thrown errors (never return `NaN`), JSDoc on public functions.
- Keep zero runtime dependencies. Published files are restricted by `files` in `package.json` (`index.js`, `cli.js` + README/LICENSE).
- Update `CHANGELOG.md` (Keep a Changelog, `[Unreleased]` section) with every user-visible change.

## CI and workflow

- `master` is protected: changes go through a PR; checks `test (22.x)`, `test (24.x)`, `test (26.x)` must pass.
- `.github/workflows/ci.yml`: lint, format, `npm audit --omit=dev`, tests with coverage on Node 22/24/26; Codecov upload (OIDC) from Node 24. Actions are pinned by SHA (Dependabot keeps them current).
- `.github/dependabot.yml`: monthly grouped updates for npm and GitHub Actions.

## Release

1. Move `[Unreleased]` in `CHANGELOG.md` to the new version with today's date.
2. `npm version patch|minor|major` (bumps `package.json`, commits, tags `vX.Y.Z`).
3. `git push --follow-tags` → `.github/workflows/release.yml` checks the tag matches `package.json`, runs tests and publishes to npm with trusted publishing (OIDC, provenance; no npm token). The npm trusted publisher is bound to `release.yml` and the `npm` environment.
