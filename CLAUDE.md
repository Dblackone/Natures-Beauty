# Nature's Beauty Construction — Repo Guide

Nature's Beauty Construction (NBC) is a Nigerian construction company (Jenyo. Akarakiri Global Enterprise). This repo holds its design system, component library, and business documents.

## Canonical design system

**Every design-related output in this repo — HTML documents, letters, invoices, reports, UI components, new templates, or anything visual — must follow the design system defined here. Do not invent new colors, fonts, spacing, or component markup. This is not optional guidance; treat it as the single source of truth.**

The design system is also published to claude.ai/design (project id `816494b1-5551-4041-b908-51c2b852af3c`, synced via `.design-sync/`) — that project and this repo must stay in agreement. If in doubt about a visual decision, match what's already in `tokens.css` / `ui/src/nb-ui.css` rather than improvising.

**The `templates/` directory holds the master document templates**, sourced directly from the design system built in claude.ai/design (exported as `.dc.html` files, flattened to standalone HTML). When producing any new business document, start from the matching file in `templates/` rather than the component library or `letterhead.css` — they are the current reference for layout, tone, and visual treatment.

### Source of truth files

- **`tokens.css`** (repo root) — the full set of ~167 CSS custom properties: brand colors, semantic colors, typography, spacing, radius, shadow, transitions. `@import` this in any new stylesheet. Never hardcode a hex/px value that already has a token.
- **`templates/`** — the **master** HTML document templates (letters, invoices, reports, salary slips, quotes, plus brand guidelines, landing page, pitch deck, stationery) — 13 templates total, each self-contained with inline styles matching the brand system below. `templates/index.html` is the gallery/index of all of them.
- **`ui/src/nb-ui.css`** — every component's BEM (`.nb-*`) styling, all driven by `var(--token-name)` from `tokens.css`.
- **`ui/src/components/`** — the React/TypeScript source for the 11 components (Alert, Avatar, Badge, Button, Card, Checkbox, Divider, Input, Select, Text, Textarea). `ui/` builds to `@natures-beauty/ui` (see `ui/package.json`).
- **`templates/letterhead.css`** — shared stylesheet for any custom document built outside the 13 master templates; kept in sync with the same tokens/fonts.
- **`design-system.html`** — visual reference/style guide page for the whole system.

### Brand identity (quick reference)

- **Primary**: Gold `--gold-500 (#c8901a)` — amber-gold, the signature NBC color
- **Secondary**: Forest Green `--green-600 (#2e5e3a)`
- **Neutral/background**: Earth Brown ramp (`--brown-100` warm off-white surface → `--brown-900` near-black text)
- **Display/headline font**: `Sora` (loaded from Google Fonts at runtime, not bundled)
- **Body font**: `Work Sans` (loaded from Google Fonts at runtime, not bundled)
- Nigerian business conventions apply to financial documents: VAT 7.5%, PAYE, Pension 8%, NHF, currency is ₦ (Naira)

> **History**: the brand originally used Lemonada (display) + Nunito (body) with gold `#c9912a` / green `#2d5c40`. It was rebranded to Sora + Work Sans and the hex values above after the claude.ai/design project introduced this pairing in its exported templates and it was adopted as canon across the repo (`tokens.css`, `templates/`, `letterhead.css`, root marketing pages).

### Styling idiom — read before writing any component or document markup

- **No CSS-in-JS, no Tailwind, no style props (for the component library).** The `ui/` package is pure CSS, BEM classes, custom properties only.
- Pattern: `.nb-<component>`, `.nb-<component>__<part>`, `.nb-<component>--<variant>`. E.g. `.nb-btn`, `.nb-btn__label`, `.nb-btn--primary`.
- Reuse the real class names already defined in `ui/src/nb-ui.css` — do not invent new utility classes or ad hoc styling. If a needed visual doesn't exist yet, extend the token set / component styles deliberately rather than bypassing them with one-off CSS.
- `Card` is a compound component: always compose `Card.Header` / `Card.Body` / `Card.Footer`, never a bare `<Card>` with raw children.
- **The `templates/*.html` master documents use inline styles** (this is how they were authored in claude.ai/design) — match their existing inline color/spacing/type values exactly when editing or extending one, rather than converting them to classes or introducing `letterhead.css` mid-document.

### When producing any new design artifact

1. **For a business document** (letter, invoice, quote, report, payslip, etc.): open the matching file in `templates/` first and use it as the master — copy its structure and inline styles, fill in real content. Only fall back to `letterhead.css` if no matching master template exists yet.
2. **For a UI component**: check `tokens.css` and `ui/src/nb-ui.css` for the existing token/component vocabulary before adding anything new.
3. Keep new UI work inside `ui/` using the same BEM + token approach — never introduce a second styling system into the codebase.
4. If a new component or token is genuinely needed, add it to `tokens.css` / `ui/src/` first, then use it — don't hardcode a one-off value in a template.
5. Fonts (Sora, Work Sans) load from Google Fonts at runtime — don't bundle or self-host them; link the same Google Fonts URL already used in the other templates.

## Repo layout

- `tokens.css` — design tokens (source of truth)
- `templates/` — master HTML business document templates (13: letters, invoices, reports, payslips, quotes, brand guidelines, landing page, pitch deck, stationery)
- `ui/` — `@natures-beauty/ui` React component library (TypeScript, tsup build)
- `design-system.html` — style guide / visual reference
- `.design-sync/` — sync config + anchor linking this repo to the claude.ai/design project
