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

  // .design-sync/previews/Alert.tsx
  var Alert_exports = {};
  __export(Alert_exports, {
    StatusVariants: () => StatusVariants,
    TitleOnly: () => TitleOnly,
    WithDismiss: () => WithDismiss
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

  // .design-sync/previews/Alert.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  function StatusVariants() {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: "12px", padding: "16px", maxWidth: "480px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Alert, { variant: "success", title: "Project Approved", children: "Your custom home build proposal has been approved. We'll be in touch within 24 hours." }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Alert, { variant: "info", title: "Site Visit Scheduled", children: "A team member will assess your lot on Friday between 9 AM and 12 PM." }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Alert, { variant: "warning", title: "Permit Pending", children: "Building permits are still processing. Construction start may be delayed by 5–7 days." }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Alert, { variant: "error", title: "Payment Failed", children: "We couldn't process your deposit. Please update your payment details." })
    ] });
  }
  function WithDismiss() {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: "12px", padding: "16px", maxWidth: "480px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Alert, { variant: "success", title: "Quote Sent", onDismiss: () => {
      }, children: "Your quote request has been sent to our estimating team." }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Alert, { variant: "warning", title: "Unsaved Changes", onDismiss: () => {
      }, children: "You have unsaved changes to your project specifications." })
    ] });
  }
  function TitleOnly() {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: "12px", padding: "16px", maxWidth: "480px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Alert, { variant: "info", title: "Office closed 26 Dec – 2 Jan for the holiday season." }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Alert, { variant: "success", title: "Your consultation is confirmed for Jan 8 at 10:00 AM." }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Alert, { variant: "warning", title: "Material costs have increased 4% since your last estimate." })
    ] });
  }
  return __toCommonJS(Alert_exports);
})();
