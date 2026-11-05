Input from @natures-beauty/ui. Use via `window.NaturesBeautyUi.Input` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface InputProps {
  label?: string;
  helpText?: string;
  errorText?: string;
  size?: "sm" | "md" | "lg";
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  style?: React.CSSProperties;
  className?: string;
  id?: string;
  children?: React.ReactNode;
}
```
