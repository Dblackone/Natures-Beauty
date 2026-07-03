# Nature's Beauty Construction — Repo Guide

Nature's Beauty Construction (NBC) is a Nigerian construction company (Jenyo. Akarakiri Global Enterprise). This repo holds its design system, component library, and business documents.

## Canonical design system

**Every design-related output in this repo — HTML documents, letters, invoices, reports, UI components, new templates, or anything visual — must follow the design system defined here. Do not invent new colors, fonts, spacing, or component markup. This is not optional guidance; treat it as the single source of truth.**

The design system is also published to claude.ai/design (project id `816494b1-5551-4041-b908-51c2b852af3c`, synced via `.design-sync/`) — that project and this repo must stay in agreement. If in doubt about a visual decision, match what's already in `tokens.css` / `ui/src/nb-ui.css` rather than improvising.

### Source of truth files

- **`tokens.css`** (repo root) — the full set of ~167 CSS custom properties: brand colors, semantic colors, typography, spacing, radius, shadow, transitions. `@import` this in any new stylesheet. Never hardcode a hex/px value that already has a token.
- **`ui/src/nb-ui.css`** — every component's BEM (`.nb-*`) styling, all driven by `var(--token-name)` from `tokens.css`.
- **`ui/src/components/`** — the React/TypeScript source for the 11 components (Alert, Avatar, Badge, Button, Card, Checkbox, Divider, Input, Select, Text, Textarea). `ui/` builds to `@natures-beauty/ui` (see `ui/package.json`).
- **`templates/`** — existing HTML document templates (letters, invoices, reports, salary slips, etc.) built with `letterhead.css` + the tokens.
- **`design-system.html`** — visual reference/style guide page for the whole system.

### Brand identity (quick reference)

- **Primary**: Gold `--gold-500 (#c9912a)` — amber-gold, the signature NBC color
- **Secondary**: Forest Green `--green-600 (#2d5c40)`
- **Neutral/background**: Earth Brown ramp (`--brown-100` warm off-white surface → `--brown-900` near-black text)
- **Display/headline font**: `Lemonada` (loaded from Google Fonts at runtime, not bundled)
- **Body font**: `Nunito` (loaded from Google Fonts at runtime, not bundled)
- Nigerian business conventions apply to financial documents: VAT 7.5%, PAYE, Pension 8%, NHF, currency is ₦ (Naira)

### Styling idiom — read before writing any component or document markup

- **No CSS-in-JS, no Tailwind, no style props, no inline styles.** Pure CSS, BEM classes, custom properties only.
- Pattern: `.nb-<component>`, `.nb-<component>__<part>`, `.nb-<component>--<variant>`. E.g. `.nb-btn`, `.nb-btn__label`, `.nb-btn--primary`.
- Reuse the real class names already defined in `ui/src/nb-ui.css` — do not invent new utility classes or ad hoc styling. If a needed visual doesn't exist yet, extend the token set / component styles deliberately rather than bypassing them with one-off CSS.
- `Card` is a compound component: always compose `Card.Header` / `Card.Body` / `Card.Footer`, never a bare `<Card>` with raw children.
- For non-React documents (letters, invoices, HTML templates), still follow the same token/color/font system for visual consistency, matching the patterns already used in `templates/*.html` and `templates/letterhead.css`.

### When producing any new design artifact

1. Check `tokens.css` and `ui/src/nb-ui.css` (or the matching `.prompt.md` under a future synced bundle) for the existing token/component vocabulary before adding anything new.
2. Match existing templates in `templates/` for document layout conventions (A4 sizing, header/footer, VAT lines, signature blocks, etc.) when creating new business documents.
3. Keep new UI work inside `ui/` using the same BEM + token approach — never introduce a second styling system into the codebase.
4. If a new component or token is genuinely needed, add it to `tokens.css` / `ui/src/` first, then use it — don't hardcode a one-off value in a template.

## Repo layout

- `tokens.css` — design tokens (source of truth)
- `ui/` — `@natures-beauty/ui` React component library (TypeScript, tsup build)
- `templates/` — HTML business document templates (letters, invoices, reports, payslips, quotes)
- `design-system.html` — style guide / visual reference
- `.design-sync/` — sync config + anchor linking this repo to the claude.ai/design project
