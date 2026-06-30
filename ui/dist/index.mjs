"use client";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/components/Button/Button.tsx
import React from "react";

// src/utils/cx.ts
function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/components/Button/Button.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var Button = React.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      variant = "primary",
      size = "md",
      loading = false,
      fullWidth = false,
      leftIcon,
      rightIcon,
      children,
      className,
      disabled
    } = _b, rest = __objRest(_b, [
      "variant",
      "size",
      "loading",
      "fullWidth",
      "leftIcon",
      "rightIcon",
      "children",
      "className",
      "disabled"
    ]);
    return /* @__PURE__ */ jsxs(
      "button",
      __spreadProps(__spreadValues({
        ref,
        className: cx(
          "nb-btn",
          `nb-btn--${variant}`,
          `nb-btn--${size}`,
          fullWidth && "nb-btn--full",
          loading && "nb-btn--loading",
          className
        ),
        disabled: disabled || loading,
        "aria-busy": loading
      }, rest), {
        children: [
          loading && /* @__PURE__ */ jsx("span", { className: "nb-btn__spinner", "aria-hidden": "true" }),
          leftIcon && !loading && /* @__PURE__ */ jsx("span", { className: "nb-btn__icon", children: leftIcon }),
          /* @__PURE__ */ jsx("span", { className: "nb-btn__label", children }),
          rightIcon && /* @__PURE__ */ jsx("span", { className: "nb-btn__icon", children: rightIcon })
        ]
      })
    );
  }
);
Button.displayName = "Button";

// src/components/Badge/Badge.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var Badge = ({
  variant = "default",
  size = "md",
  children,
  className,
  dot = false
}) => /* @__PURE__ */ jsxs2("span", { className: cx("nb-badge", `nb-badge--${variant}`, `nb-badge--${size}`, className), children: [
  dot && /* @__PURE__ */ jsx2("span", { className: "nb-badge__dot", "aria-hidden": "true" }),
  children
] });
Badge.displayName = "Badge";

// src/components/Card/Card.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var CardHeader = ({ children, className }) => /* @__PURE__ */ jsx3("div", { className: cx("nb-card__header", className), children });
var CardBody = ({ children, className }) => /* @__PURE__ */ jsx3("div", { className: cx("nb-card__body", className), children });
var CardFooter = ({ children, className, divider = true }) => /* @__PURE__ */ jsx3("div", { className: cx("nb-card__footer", divider && "nb-card__footer--divider", className), children });
CardHeader.displayName = "Card.Header";
CardBody.displayName = "Card.Body";
CardFooter.displayName = "Card.Footer";
var Card = ({ variant = "default", padding = "md", interactive = false, className, children, as: Tag = "div", onClick }) => /* @__PURE__ */ jsx3(
  Tag,
  {
    className: cx(
      "nb-card",
      `nb-card--${variant}`,
      `nb-card--pad-${padding}`,
      interactive && "nb-card--interactive",
      className
    ),
    onClick,
    role: interactive ? "button" : void 0,
    tabIndex: interactive ? 0 : void 0,
    children
  }
);
Card.displayName = "Card";
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

// src/components/Alert/Alert.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var defaultIcons = {
  success: "\u2713",
  warning: "\u26A0",
  error: "\u2715",
  info: "\u2139"
};
var Alert = ({
  variant = "info",
  title,
  children,
  className,
  onDismiss,
  icon
}) => /* @__PURE__ */ jsxs3("div", { role: "alert", className: cx("nb-alert", `nb-alert--${variant}`, className), children: [
  /* @__PURE__ */ jsx4("span", { className: "nb-alert__icon", "aria-hidden": "true", children: icon != null ? icon : defaultIcons[variant] }),
  /* @__PURE__ */ jsxs3("div", { className: "nb-alert__content", children: [
    title && /* @__PURE__ */ jsx4("p", { className: "nb-alert__title", children: title }),
    children && /* @__PURE__ */ jsx4("div", { className: "nb-alert__body", children })
  ] }),
  onDismiss && /* @__PURE__ */ jsx4("button", { type: "button", className: "nb-alert__dismiss", "aria-label": "Dismiss", onClick: onDismiss, children: "\xD7" })
] });
Alert.displayName = "Alert";

// src/components/Avatar/Avatar.tsx
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
function getInitials(name) {
  return name.split(" ").slice(0, 2).map((w) => {
    var _a, _b;
    return (_b = (_a = w[0]) == null ? void 0 : _a.toUpperCase()) != null ? _b : "";
  }).join("");
}
var Avatar = ({
  src,
  alt,
  name,
  size = "md",
  variant = "circle",
  className,
  status
}) => {
  var _a;
  return /* @__PURE__ */ jsxs4(
    "span",
    {
      className: cx("nb-avatar", `nb-avatar--${size}`, `nb-avatar--${variant}`, className),
      "aria-label": alt != null ? alt : name,
      children: [
        src ? /* @__PURE__ */ jsx5("img", { src, alt: (_a = alt != null ? alt : name) != null ? _a : "", className: "nb-avatar__img" }) : name ? /* @__PURE__ */ jsx5("span", { className: "nb-avatar__initials", "aria-hidden": "true", children: getInitials(name) }) : /* @__PURE__ */ jsx5("span", { className: "nb-avatar__fallback", "aria-hidden": "true", children: /* @__PURE__ */ jsx5("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: "60%", height: "60%", children: /* @__PURE__ */ jsx5("path", { d: "M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" }) }) }),
        status && /* @__PURE__ */ jsx5("span", { className: cx("nb-avatar__status", `nb-avatar__status--${status}`), "aria-label": status })
      ]
    }
  );
};
Avatar.displayName = "Avatar";

// src/components/Input/Input.tsx
import React2 from "react";
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
var Input = React2.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      label,
      helpText,
      errorText,
      size = "md",
      leftAddon,
      rightAddon,
      leftIcon,
      rightIcon,
      fullWidth = false,
      className,
      id,
      disabled,
      required
    } = _b, rest = __objRest(_b, [
      "label",
      "helpText",
      "errorText",
      "size",
      "leftAddon",
      "rightAddon",
      "leftIcon",
      "rightIcon",
      "fullWidth",
      "className",
      "id",
      "disabled",
      "required"
    ]);
    const inputId = id != null ? id : label ? `nb-input-${label.toLowerCase().replace(/\s+/g, "-")}` : void 0;
    const hasError = Boolean(errorText);
    const helpId = inputId ? `${inputId}-help` : void 0;
    return /* @__PURE__ */ jsxs5("div", { className: cx("nb-input-wrapper", fullWidth && "nb-input-wrapper--full", className), children: [
      label && /* @__PURE__ */ jsxs5("label", { htmlFor: inputId, className: "nb-input__label", children: [
        label,
        required && /* @__PURE__ */ jsx6("span", { className: "nb-input__required", "aria-hidden": "true", children: " *" })
      ] }),
      /* @__PURE__ */ jsxs5("div", { className: cx("nb-input__group", `nb-input__group--${size}`, hasError && "nb-input__group--error", disabled && "nb-input__group--disabled"), children: [
        leftAddon && /* @__PURE__ */ jsx6("span", { className: "nb-input__addon nb-input__addon--left", children: leftAddon }),
        leftIcon && /* @__PURE__ */ jsx6("span", { className: "nb-input__icon nb-input__icon--left", children: leftIcon }),
        /* @__PURE__ */ jsx6(
          "input",
          __spreadValues({
            ref,
            id: inputId,
            className: cx(
              "nb-input__field",
              leftIcon && "nb-input__field--left-icon",
              rightIcon && "nb-input__field--right-icon",
              leftAddon && "nb-input__field--left-addon",
              rightAddon && "nb-input__field--right-addon"
            ),
            disabled,
            required,
            "aria-invalid": hasError || void 0,
            "aria-describedby": helpText || errorText ? helpId : void 0
          }, rest)
        ),
        rightIcon && /* @__PURE__ */ jsx6("span", { className: "nb-input__icon nb-input__icon--right", children: rightIcon }),
        rightAddon && /* @__PURE__ */ jsx6("span", { className: "nb-input__addon nb-input__addon--right", children: rightAddon })
      ] }),
      (helpText || errorText) && /* @__PURE__ */ jsx6("p", { id: helpId, className: cx("nb-input__help", hasError && "nb-input__help--error"), children: errorText != null ? errorText : helpText })
    ] });
  }
);
Input.displayName = "Input";

// src/components/Textarea/Textarea.tsx
import React3 from "react";
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
var Textarea = React3.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      label,
      helpText,
      errorText,
      fullWidth = false,
      resize = "vertical",
      className,
      id,
      disabled,
      required,
      rows = 4
    } = _b, rest = __objRest(_b, [
      "label",
      "helpText",
      "errorText",
      "fullWidth",
      "resize",
      "className",
      "id",
      "disabled",
      "required",
      "rows"
    ]);
    const textareaId = id != null ? id : label ? `nb-textarea-${label.toLowerCase().replace(/\s+/g, "-")}` : void 0;
    const hasError = Boolean(errorText);
    const helpId = textareaId ? `${textareaId}-help` : void 0;
    return /* @__PURE__ */ jsxs6("div", { className: cx("nb-textarea-wrapper", fullWidth && "nb-textarea-wrapper--full", className), children: [
      label && /* @__PURE__ */ jsxs6("label", { htmlFor: textareaId, className: "nb-textarea__label", children: [
        label,
        required && /* @__PURE__ */ jsx7("span", { className: "nb-textarea__required", "aria-hidden": "true", children: " *" })
      ] }),
      /* @__PURE__ */ jsx7(
        "textarea",
        __spreadValues({
          ref,
          id: textareaId,
          className: cx("nb-textarea__field", `nb-textarea__field--resize-${resize}`, hasError && "nb-textarea__field--error"),
          disabled,
          required,
          rows,
          "aria-invalid": hasError || void 0,
          "aria-describedby": helpText || errorText ? helpId : void 0
        }, rest)
      ),
      (helpText || errorText) && /* @__PURE__ */ jsx7("p", { id: helpId, className: cx("nb-textarea__help", hasError && "nb-textarea__help--error"), children: errorText != null ? errorText : helpText })
    ] });
  }
);
Textarea.displayName = "Textarea";

// src/components/Select/Select.tsx
import React4 from "react";
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
var Select = React4.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      label,
      helpText,
      errorText,
      size = "md",
      options,
      placeholder,
      fullWidth = false,
      className,
      id,
      disabled,
      required,
      children
    } = _b, rest = __objRest(_b, [
      "label",
      "helpText",
      "errorText",
      "size",
      "options",
      "placeholder",
      "fullWidth",
      "className",
      "id",
      "disabled",
      "required",
      "children"
    ]);
    const selectId = id != null ? id : label ? `nb-select-${label.toLowerCase().replace(/\s+/g, "-")}` : void 0;
    const hasError = Boolean(errorText);
    return /* @__PURE__ */ jsxs7("div", { className: cx("nb-select-wrapper", fullWidth && "nb-select-wrapper--full", className), children: [
      label && /* @__PURE__ */ jsxs7("label", { htmlFor: selectId, className: "nb-select__label", children: [
        label,
        required && /* @__PURE__ */ jsx8("span", { className: "nb-select__required", "aria-hidden": "true", children: " *" })
      ] }),
      /* @__PURE__ */ jsxs7("div", { className: cx("nb-select__group", `nb-select__group--${size}`, hasError && "nb-select__group--error", disabled && "nb-select__group--disabled"), children: [
        /* @__PURE__ */ jsxs7(
          "select",
          __spreadProps(__spreadValues({
            ref,
            id: selectId,
            className: "nb-select__field",
            disabled,
            required,
            "aria-invalid": hasError || void 0
          }, rest), {
            children: [
              placeholder && /* @__PURE__ */ jsx8("option", { value: "", disabled: true, children: placeholder }),
              options ? options.map((opt) => /* @__PURE__ */ jsx8("option", { value: opt.value, disabled: opt.disabled, children: opt.label }, opt.value)) : children
            ]
          })
        ),
        /* @__PURE__ */ jsx8("span", { className: "nb-select__chevron", "aria-hidden": "true", children: /* @__PURE__ */ jsx8("svg", { viewBox: "0 0 10 6", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx8("path", { d: "M1 1l4 4 4-4" }) }) })
      ] }),
      (helpText || errorText) && /* @__PURE__ */ jsx8("p", { className: cx("nb-select__help", hasError && "nb-select__help--error"), children: errorText != null ? errorText : helpText })
    ] });
  }
);
Select.displayName = "Select";

// src/components/Checkbox/Checkbox.tsx
import React5 from "react";
import { jsx as jsx9, jsxs as jsxs8 } from "react/jsx-runtime";
var Checkbox = React5.forwardRef(
  (_a, ref) => {
    var _b = _a, { label, helpText, errorText, indeterminate = false, className, id } = _b, rest = __objRest(_b, ["label", "helpText", "errorText", "indeterminate", "className", "id"]);
    const inputRef = React5.useRef(null);
    React5.useImperativeHandle(ref, () => inputRef.current);
    React5.useEffect(() => {
      if (inputRef.current) inputRef.current.indeterminate = indeterminate;
    }, [indeterminate]);
    const checkId = id != null ? id : label ? `nb-checkbox-${label.toLowerCase().replace(/\s+/g, "-")}` : void 0;
    const hasError = Boolean(errorText);
    return /* @__PURE__ */ jsxs8("div", { className: cx("nb-checkbox-wrapper", className), children: [
      /* @__PURE__ */ jsxs8("label", { className: "nb-checkbox__row", htmlFor: checkId, children: [
        /* @__PURE__ */ jsxs8("span", { className: cx("nb-checkbox__control", hasError && "nb-checkbox__control--error"), children: [
          /* @__PURE__ */ jsx9("input", __spreadValues({ ref: inputRef, type: "checkbox", id: checkId, className: "nb-checkbox__input" }, rest)),
          /* @__PURE__ */ jsx9("span", { className: "nb-checkbox__indicator", "aria-hidden": "true", children: indeterminate ? /* @__PURE__ */ jsx9("svg", { viewBox: "0 0 12 2", fill: "currentColor", children: /* @__PURE__ */ jsx9("rect", { x: "0", y: "0", width: "12", height: "2", rx: "1" }) }) : /* @__PURE__ */ jsx9("svg", { viewBox: "0 0 12 10", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx9("polyline", { points: "1 5 4.5 9 11 1" }) }) })
        ] }),
        label && /* @__PURE__ */ jsx9("span", { className: "nb-checkbox__label", children: label })
      ] }),
      (helpText || errorText) && /* @__PURE__ */ jsx9("p", { className: cx("nb-checkbox__help", hasError && "nb-checkbox__help--error"), children: errorText != null ? errorText : helpText })
    ] });
  }
);
Checkbox.displayName = "Checkbox";

// src/components/Divider/Divider.tsx
import { jsx as jsx10, jsxs as jsxs9 } from "react/jsx-runtime";
var Divider = ({
  orientation = "horizontal",
  label,
  className
}) => {
  if (orientation === "vertical") {
    return /* @__PURE__ */ jsx10("span", { role: "separator", "aria-orientation": "vertical", className: cx("nb-divider--vertical", className) });
  }
  if (label) {
    return /* @__PURE__ */ jsxs9("div", { role: "separator", className: cx("nb-divider--labeled", className), children: [
      /* @__PURE__ */ jsx10("span", { className: "nb-divider__line" }),
      /* @__PURE__ */ jsx10("span", { className: "nb-divider__label", children: label }),
      /* @__PURE__ */ jsx10("span", { className: "nb-divider__line" })
    ] });
  }
  return /* @__PURE__ */ jsx10("hr", { role: "separator", className: cx("nb-divider", className) });
};
Divider.displayName = "Divider";

// src/components/Text/Text.tsx
import { jsx as jsx11 } from "react/jsx-runtime";
var Text = ({
  as: Tag = "p",
  size = "base",
  weight = "regular",
  color = "primary",
  align = "left",
  display = false,
  truncate = false,
  className,
  children
}) => /* @__PURE__ */ jsx11(
  Tag,
  {
    className: cx(
      "nb-text",
      `nb-text--${size}`,
      `nb-text--${weight}`,
      `nb-text--${color}`,
      `nb-text--${align}`,
      display && "nb-text--display",
      truncate && "nb-text--truncate",
      className
    ),
    children
  }
);
Text.displayName = "Text";

// src/tokens/tokens.ts
var tokens = {
  color: {
    // Brand gold
    gold100: "var(--gold-100)",
    gold200: "var(--gold-200)",
    gold300: "var(--gold-300)",
    gold400: "var(--gold-400)",
    gold500: "var(--gold-500)",
    gold600: "var(--gold-600)",
    gold700: "var(--gold-700)",
    gold800: "var(--gold-800)",
    gold900: "var(--gold-900)",
    // Forest green
    green100: "var(--green-100)",
    green200: "var(--green-200)",
    green300: "var(--green-300)",
    green400: "var(--green-400)",
    green500: "var(--green-500)",
    green600: "var(--green-600)",
    green700: "var(--green-700)",
    green800: "var(--green-800)",
    green900: "var(--green-900)",
    // Earth brown
    brown100: "var(--brown-100)",
    brown200: "var(--brown-200)",
    brown300: "var(--brown-300)",
    brown400: "var(--brown-400)",
    brown500: "var(--brown-500)",
    brown600: "var(--brown-600)",
    brown700: "var(--brown-700)",
    brown800: "var(--brown-800)",
    brown900: "var(--brown-900)",
    // Semantic
    primary: "var(--color-primary)",
    primaryHover: "var(--color-primary-hover)",
    primaryActive: "var(--color-primary-active)",
    primarySubtle: "var(--color-primary-subtle)",
    primaryOn: "var(--color-primary-on)",
    secondary: "var(--color-secondary)",
    secondaryHover: "var(--color-secondary-hover)",
    secondaryActive: "var(--color-secondary-active)",
    secondarySubtle: "var(--color-secondary-subtle)",
    secondaryOn: "var(--color-secondary-on)",
    surface: "var(--color-surface)",
    surfaceRaised: "var(--color-surface-raised)",
    surfaceSunken: "var(--color-surface-sunken)",
    surfaceOverlay: "var(--color-surface-overlay)",
    surfaceInverse: "var(--color-surface-inverse)",
    textPrimary: "var(--color-text-primary)",
    textSecondary: "var(--color-text-secondary)",
    textTertiary: "var(--color-text-tertiary)",
    textDisabled: "var(--color-text-disabled)",
    textInverse: "var(--color-text-inverse)",
    textAccent: "var(--color-text-accent)",
    textLink: "var(--color-text-link)",
    textLinkHover: "var(--color-text-link-hover)",
    border: "var(--color-border)",
    borderStrong: "var(--color-border-strong)",
    borderFocus: "var(--color-border-focus)",
    success: "var(--color-success)",
    successSubtle: "var(--color-success-subtle)",
    warning: "var(--color-warning)",
    warningSubtle: "var(--color-warning-subtle)",
    error: "var(--color-error)",
    errorSubtle: "var(--color-error-subtle)",
    info: "var(--color-info)",
    infoSubtle: "var(--color-info-subtle)"
  },
  font: {
    display: "var(--font-display)",
    body: "var(--font-body)"
  },
  text: {
    "2xs": "var(--text-2xs)",
    xs: "var(--text-xs)",
    sm: "var(--text-sm)",
    base: "var(--text-base)",
    lg: "var(--text-lg)",
    xl: "var(--text-xl)",
    "2xl": "var(--text-2xl)",
    "3xl": "var(--text-3xl)",
    "4xl": "var(--text-4xl)",
    "5xl": "var(--text-5xl)",
    "6xl": "var(--text-6xl)",
    "7xl": "var(--text-7xl)"
  },
  space: {
    0: "var(--space-0)",
    px: "var(--space-px)",
    "0.5": "var(--space-0-5)",
    1: "var(--space-1)",
    1.5: "var(--space-1-5)",
    2: "var(--space-2)",
    3: "var(--space-3)",
    4: "var(--space-4)",
    5: "var(--space-5)",
    6: "var(--space-6)",
    8: "var(--space-8)",
    10: "var(--space-10)",
    12: "var(--space-12)",
    16: "var(--space-16)",
    20: "var(--space-20)",
    24: "var(--space-24)",
    32: "var(--space-32)"
  },
  radius: {
    none: "var(--radius-none)",
    sm: "var(--radius-sm)",
    md: "var(--radius-md)",
    lg: "var(--radius-lg)",
    xl: "var(--radius-xl)",
    "2xl": "var(--radius-2xl)",
    "3xl": "var(--radius-3xl)",
    full: "var(--radius-full)"
  },
  shadow: {
    sm: "var(--shadow-sm)",
    md: "var(--shadow-md)",
    lg: "var(--shadow-lg)",
    xl: "var(--shadow-xl)",
    "2xl": "var(--shadow-2xl)",
    inner: "var(--shadow-inner)",
    gold: "var(--shadow-gold)",
    green: "var(--shadow-green)"
  },
  transition: {
    fast: "var(--transition-fast)",
    base: "var(--transition-base)",
    slow: "var(--transition-slow)"
  }
};
export {
  Alert,
  Avatar,
  Badge,
  Button,
  Card,
  Checkbox,
  Divider,
  Input,
  Select,
  Text,
  Textarea,
  cx,
  tokens
};
