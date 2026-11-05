# @natures-beauty/ui conventions

Pure CSS design system for Nature's Beauty Construction (NBC) — no theme provider, no CSS-in-JS, no Tailwind. Every component ships its own BEM-style stylesheet driven entirely by CSS custom properties.

## Setup

No wrapping provider is required — components work standalone. Just import the package and its stylesheet once at the app root:

```jsx
import { Button, Card, Text } from '@natures-beauty/ui';
import '@natures-beauty/ui/dist/ds-entry.css'; // tokens.css + nb-ui.css
```

`Lemonada` (display/headline serif) and `Nunito` (body sans) are loaded from Google Fonts at runtime by the host app — they are not bundled as `@font-face`. If a design needs the real NBC type pairing, load both families from Google Fonts before rendering.

## Styling idiom: BEM classes + CSS custom properties

There are no style props. Every component renders fixed `.nb-*` classes; appearance is controlled entirely by CSS custom properties cascading from `tokens.css`. Block/element/modifier pattern: `.nb-<component>`, `.nb-<component>__<part>`, `.nb-<component>--<variant>`. Examples from the real stylesheet:

| Component | Block | Modifiers |
|---|---|---|
| Button | `.nb-btn` | `--primary` `--secondary` `--outline` `--ghost` `--danger`, `--sm` `--md` `--lg`, `--loading`, `--full` |
| Badge | `.nb-badge` | `--primary` `--secondary` `--success` `--warning` `--error` `--info` `--default`, `--sm` `--md` |
| Avatar | `.nb-avatar` | `--circle` `--square`, `--xs` `--sm` `--md` `--lg` `--xl`, `__status--online/away/busy/offline` |
| Card | `.nb-card` | `--default` `--raised` `--outlined` `--filled`, `--interactive`, `--pad-none/sm/md/lg` |
| Alert | `.nb-alert` | `--success` `--info` `--warning` `--error` |

Custom compositions inside a design (e.g. wrapping a Card body) should reuse these real class names, not invent new ones — the stylesheet has no generic utility classes to fall back on.

## Tokens

`tokens.css` defines ~167 custom properties consumed via `var(--*)` throughout `nb-ui.css`. Key ones: `--color-primary` / `--color-primary-hover` / `--color-primary-active` / `--color-primary-subtle` / `--color-primary-on` (and the `--color-secondary-*` equivalents), semantic `--color-success` / `--color-warning` / `--color-error` / `--color-info` (each with a `-subtle` tint), `--color-surface` / `--color-surface-raised` / `--color-surface-sunken` / `--color-surface-overlay`, `--color-border` / `--color-border-strong` / `--color-border-focus`, `--color-text-accent` / `--color-text-disabled` / `--color-text-inverse`, plus the raw `--brown-100…900` palette ramp and `--breakpoint-sm/md/lg/xl`. Read `tokens/` in the bundle before inventing a new color — NBC's signature look is the amber-gold primary on a warm neutral surface.

## Compound components

`Card` is compound: always compose `Card.Header`, `Card.Body`, `Card.Footer` as children — a bare `<Card>` with raw children is not how the system is used. No other component in this set is compound.

## Where the truth lives

- `tokens/tokens.css` — full custom-property list
- `_ds_bundle.css` (reached via `styles.css`'s `@import`) — every `.nb-*` rule
- `components/general/<Name>/<Name>.prompt.md` — per-component usage doc with the real props and example composition

## Example

```jsx
<Card variant="raised">
  <Card.Header>
    <Badge variant="primary">Featured</Badge>
    <Text as="h3" display>Custom Home Build</Text>
  </Card.Header>
  <Card.Body>
    <Text color="secondary">Full design-to-delivery service for your dream home.</Text>
  </Card.Body>
  <Card.Footer>
    <Button variant="primary">Schedule Consultation</Button>
    <Button variant="ghost">Download Brochure</Button>
  </Card.Footer>
</Card>
```

# NaturesBeautyUi (@natures-beauty/ui@1.0.0)

This design system is the published @natures-beauty/ui React library, bundled as a single
browser global. All 11 components are the real upstream code.

## Where things are

- `_ds_bundle.js` — the whole-DS bundle at the project root; loads every component to `window.NaturesBeautyUi`. First line is a `/* @ds-bundle: … */` metadata header.
- `styles.css` — the single stylesheet entry: it `@import`s the tokens, fonts, and component styles (`_ds_bundle.css`). Link this one file.
- `components/<group>/<Name>/<Name>.prompt.md` (example JSX + variants), `<Name>.d.ts` (types), `<Name>.html` (variant grid).
- `tokens/*.css` — CSS custom properties, names verbatim from upstream.
- `fonts/` — `@font-face` files + `fonts.css` (when the package ships fonts).

For a specific component, `read_file("components/<group>/<Name>/<Name>.prompt.md")`.

## Loading

Add these two lines to your page once (React must be on the page first):

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
```

Components are then available at `window.NaturesBeautyUi.*`. Mount into a dedicated child node (e.g. `<div id="ds-root">`), not the host page's own React root, so the two trees don't collide:

```jsx
const { Alert } = window.NaturesBeautyUi;
ReactDOM.createRoot(document.getElementById('ds-root')).render(<Alert />);
```

## Tokens

160 CSS custom properties from @natures-beauty/ui. Names are
preserved verbatim from upstream. They are declared inside `_ds_bundle.css` (this DS ships one compiled stylesheet rather than separate token files).

- **color** (46): `--color-primary`, `--color-primary-hover`, `--color-primary-active`, …
- **spacing** (24): `--space-0`, `--space-px`, `--space-0-5`, …
- **typography** (13): `--font-display`, `--font-body`, `--weight-light`, …
- **radius** (8): `--radius-none`, `--radius-sm`, `--radius-md`, …
- **shadow** (8): `--shadow-sm`, `--shadow-md`, `--shadow-lg`, …
- **other** (61): `--gold-100`, `--gold-200`, `--gold-300`, …

## Components

### general
- `Alert`
- `Avatar`
- `Badge`
- `Button`
- `Card` (compound: `Card.Header`, `Card.Body`, `Card.Footer`)
- `Checkbox`
- `Divider`
- `Input`
- `Select`
- `Text`
- `Textarea`
