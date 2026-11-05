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

  // .design-sync/previews/Badge.tsx
  var Badge_exports = {};
  __export(Badge_exports, {
    DotMode: () => DotMode,
    Sizes: () => Sizes,
    Variants: () => Variants
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

  // .design-sync/previews/Badge.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  function Variants() {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", gap: "8px", flexWrap: "wrap", padding: "16px", alignItems: "center" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Badge, { variant: "primary", children: "Featured" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Badge, { variant: "secondary", children: "New" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Badge, { variant: "success", children: "Approved" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Badge, { variant: "warning", children: "Pending" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Badge, { variant: "error", children: "Overdue" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Badge, { variant: "info", children: "In Review" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Badge, { variant: "default", children: "Draft" })
    ] });
  }
  function Sizes() {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", gap: "12px", alignItems: "center", padding: "16px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Badge, { variant: "primary", size: "sm", children: "Small" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Badge, { variant: "primary", size: "md", children: "Medium" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Badge, { variant: "success", size: "sm", children: "On Track" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Badge, { variant: "success", size: "md", children: "On Track" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Badge, { variant: "warning", size: "sm", children: "Delayed" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Badge, { variant: "warning", size: "md", children: "Delayed" })
    ] });
  }
  function DotMode() {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", gap: "12px", flexWrap: "wrap", padding: "16px", alignItems: "center" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Badge, { variant: "success", dot: true, children: "Active project" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Badge, { variant: "warning", dot: true, children: "Permit pending" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Badge, { variant: "error", dot: true, children: "Action needed" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Badge, { variant: "info", dot: true, children: "Under review" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Badge, { variant: "default", dot: true, children: "Archived" })
    ] });
  }
  return __toCommonJS(Badge_exports);
})();
