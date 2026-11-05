Card from @natures-beauty/ui. Use via `window.NaturesBeautyUi.Card` (bundle loaded from the root `_ds_bundle.js`).

Sub-components: `Card.Header`, `Card.Body`, `Card.Footer`. See the DS docs for composition — e.g. items like `Card.Item` go inside `<Card>`; containers like `Card.Group` wrap multiple `<Card>`s.

## Props

```ts
interface CardProps {
  variant?: "default" | "raised" | "outlined" | "filled";
  padding?: "sm" | "md" | "lg" | "none";
  interactive?: boolean;
  className?: string;
  children: React.ReactNode;
  as?: "symbol" | "object" | "circle" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | (string & {}) /* +164 more */;
  onClick?: () => void;
}
```

## Related

`Card.Header`, `Card.Body`, `Card.Footer`
