var __dsPreview = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // <define:import.meta.env>
  var init_define_import_meta_env = __esm({
    "<define:import.meta.env>"() {
    }
  });

  // ds-raw:__ds_raw__
  var require_ds_raw = __commonJS({
    "ds-raw:__ds_raw__"(exports, module) {
      init_define_import_meta_env();
      module.exports = window.NaturesBeautyUi;
    }
  });

  // shim:react-shim
  var require_react_shim = __commonJS({
    "shim:react-shim"(exports, module) {
      init_define_import_meta_env();
      var R = window.React;
      function np(p, k) {
        var o = {};
        for (var x in p) if (x !== "children") o[x] = p[x];
        if (k !== void 0) o.key = k;
        return o;
      }
      function jsx2(t, p, k) {
        var c = p && p.children;
        return c === void 0 ? R.createElement(t, np(p, k)) : R.createElement(t, np(p, k), c);
      }
      function jsxs2(t, p, k) {
        return R.createElement.apply(R, [t, np(p, k)].concat(p.children));
      }
      module.exports = R;
      module.exports.jsx = jsx2;
      module.exports.jsxs = jsxs2;
      module.exports.jsxDEV = function(t, p, k, s) {
        return (s ? jsxs2 : jsx2)(t, p, k);
      };
      module.exports.Fragment = R.Fragment;
    }
  });

  // .design-sync/previews/Textarea.tsx
  var Textarea_exports = {};
  __export(Textarea_exports, {
    BasicTextareas: () => BasicTextareas,
    ResizeModes: () => ResizeModes,
    WithHelpAndError: () => WithHelpAndError
  });
  init_define_import_meta_env();

  // ds-shim:ds
  var ds_exports = {};
  __export(ds_exports, {
    default: () => ds_default
  });
  init_define_import_meta_env();
  __reExport(ds_exports, __toESM(require_ds_raw()));
  var g = window.NaturesBeautyUi;
  var ds_default = "default" in g ? g.default : g;

  // .design-sync/previews/Textarea.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  function BasicTextareas() {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: "16px", padding: "16px", maxWidth: "480px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        ds_exports.Textarea,
        {
          label: "Project Description",
          placeholder: "Describe your project — scope, style, timeline, and any special requirements.",
          helpText: "The more detail you provide, the more accurate your estimate will be.",
          rows: 4
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        ds_exports.Textarea,
        {
          label: "Additional Notes",
          placeholder: "Anything else we should know before your consultation?",
          rows: 3
        }
      )
    ] });
  }
  function WithHelpAndError() {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: "16px", padding: "16px", maxWidth: "480px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        ds_exports.Textarea,
        {
          label: "Site Access Instructions",
          placeholder: "e.g. Gate code is 1234. Call 30 minutes before arrival.",
          helpText: "Our team will use these to reach the site safely.",
          rows: 3
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        ds_exports.Textarea,
        {
          label: "Special Requirements",
          placeholder: "List any special requirements or constraints for the build.",
          errorText: "Please describe any requirements before submitting.",
          rows: 3,
          fullWidth: true
        }
      )
    ] });
  }
  function ResizeModes() {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: "16px", padding: "16px", maxWidth: "480px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Textarea, { label: "Vertical resize (default)", resize: "vertical", rows: 2, placeholder: "Drag corner to resize vertically" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Textarea, { label: "No resize", resize: "none", rows: 2, placeholder: "This textarea cannot be resized" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Textarea, { label: "Both directions", resize: "both", rows: 2, placeholder: "Drag corner to resize in any direction" })
    ] });
  }
  return __toCommonJS(Textarea_exports);
})();
