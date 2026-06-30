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
