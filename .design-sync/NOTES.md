# Design-Sync Notes — @natures-beauty/ui

## Repo-specific gotchas

- **Entry point mismatch**: `ui/package.json` declares `"main": "dist/index.cjs.js"` and `"module": "dist/index.esm.js"`, but `tsup` actually emits `dist/index.js` (CJS) and `dist/index.mjs` (ESM). Always pass `--entry ./ui/dist/index.mjs` to the converter explicitly — do NOT rely on `package.json` `module`/`main` for the entry path.
- **node_modules location**: The package lives at `ui/`, so pass `--node-modules ui/node_modules` to the converter. Run `npm ci` from the `ui/` directory before building if `node_modules` is missing.
- **Google Fonts runtime**: Lemonada and Nunito are loaded from Google Fonts CDN at runtime — they are not self-hosted. They are suppressed via `cfg.runtimeFontPrefixes`. Do not attempt to source them from the repo.
- **Tokens are in repo root**: `tokens.css` lives at the repo root (not under `ui/src/`), but `tsup` copies it to `ui/dist/tokens.css` during build. Always ensure a fresh build has been run when re-syncing so `dist/tokens.css` is up to date.
- **CSS structure**: Component styles in `dist/nb-ui.css` use `var(--*)` custom properties defined in `dist/tokens.css`. Both must be present for styled renders. No CSS-in-JS, no Tailwind.
- **No provider needed**: Components use pure CSS classes with no React context/theme provider. No `cfg.provider` is required.
- **BEM-style classes**: All components use `.nb-*` prefix (`.nb-btn`, `.nb-badge`, `.nb-card`, etc.). Preview compositions should use the actual class names when composing custom markup.
- **Compound components**: `Card` uses a compound API — `Card.Header`, `Card.Body`, `Card.Footer`. Preview must compose the full compound, not just `<Card>`.

- **`tokensGlob` requires `tokensPkg`**: `cfg.tokensGlob` is a glob filter within a SEPARATE npm tokens package — it does nothing without `cfg.tokensPkg`. Since tokens are in the same package (`dist/tokens.css`), we use a combined CSS entry instead. Before re-syncing, regenerate `ui/dist/ds-entry.css` by concatenating `ui/dist/tokens.css` + `ui/dist/nb-ui.css` (this step will eventually be part of the tsup build). See `cssEntry: "dist/ds-entry.css"` in config.
- **`ds-entry.css` is not in the tsup build output**: It must be created manually before running the converter. The re-sync command below includes this step.

- **`tokens.css` header comment trips a false `[CSS_IMPORT_MISSING]`**: the repo's `tokens.css` doc header contains a literal `Usage: @import './tokens.css';` line. The validator's `@import` regex matches that text even inside the comment, since `_ds_bundle.css` is built from the concatenated `ds-entry.css` (which inlines this comment verbatim). Fix is in the concatenation step below (`sed '/Usage: @import/d'` strips the line before concatenating) — never edit the repo's real `tokens.css`, this only affects the design-sync-only `ds-entry.css` artifact.

## Re-sync command

From repo root after a fresh clone or source change:

```sh
# If node_modules missing: (cd ui && npm ci)
# Regenerate combined CSS entry (tokens + components), stripping the
# tokens.css doc comment's literal "@import" text (false-positive trap):
sed '/Usage: @import/d' ui/dist/tokens.css > /tmp/tokens-stripped.css
cat /tmp/tokens-stripped.css ui/dist/nb-ui.css > ui/dist/ds-entry.css
# Run the driver:
node .ds-sync/resync.mjs --config .design-sync/config.json \
  --node-modules ui/node_modules \
  --entry ./ui/dist/index.mjs \
  --out ./ds-bundle \
  --remote .design-sync/.cache/remote-sync.json
```

## Re-sync risks

- `runtimeFontPrefixes` suppresses `[FONT_MISSING]` for Lemonada/Nunito. If the project ever switches to self-hosted fonts, remove those entries and add paths to `cfg.extraFonts` instead.
- `dist/tokens.css` is a copy of the root-level `tokens.css`. If design tokens change in the root file, the package must be rebuilt before re-sync sees the update.
- Authored preview compositions in `.design-sync/previews/` assume the current prop APIs. After a major version bump, recheck each `.tsx` against the updated `ui/dist/index.d.ts`.
