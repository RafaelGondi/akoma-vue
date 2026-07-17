import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      include: ['src'],
      outDir: 'dist',
      tsconfigPath: './tsconfig.lib.json',
      rollupTypes: true,
    }),
  ],
  build: {
    lib: {
      entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
      name: 'Akoma',
      formats: ['es', 'cjs'],
      fileName: (format) => (format === 'es' ? 'akoma.js' : 'akoma.cjs'),
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        assetFileNames: 'akoma.[ext]',
      },
    },
    cssCodeSplit: false,
    emptyOutDir: true,
  },
})
