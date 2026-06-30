import { defineConfig } from 'tsup';
import { copyFileSync, mkdirSync } from 'fs';
import { join } from 'path';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  splitting: false,
  sourcemap: false,
  clean: true,
  external: ['react', 'react-dom'],
  outDir: 'dist',
  esbuildOptions(options) {
    options.banner = { js: '"use client";' };
  },
  async onSuccess() {
    mkdirSync('dist', { recursive: true });
    copyFileSync(join('..', 'tokens.css'), join('dist', 'tokens.css'));
    copyFileSync(join('src', 'nb-ui.css'), join('dist', 'nb-ui.css'));
    console.log('Copied CSS files to dist/');
  },
});
