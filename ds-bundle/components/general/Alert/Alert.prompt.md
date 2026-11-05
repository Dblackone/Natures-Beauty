Alert from @natures-beauty/ui. Use via `window.NaturesBeautyUi.Alert` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface AlertProps {
  variant?: "success" | "warning" | "error" | "info";
  title?: string;
  children?: React.ReactNode;
  className?: string;
  onDismiss?: () => void;
  icon?: React.ReactNode;
}
```
