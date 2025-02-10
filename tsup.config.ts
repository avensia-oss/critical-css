import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs'],
  dts: true,
  bundle: true,
  noExternal: ['css-tree'],
  treeshake: true,
})
