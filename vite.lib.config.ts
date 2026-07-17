import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

const cuidaIconsEntry = fileURLToPath(
  new URL('./node_modules/@sysvale/cuida-icons/dist/index.js', import.meta.url),
)

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
  resolve: {
    alias: {
      '@sysvale/cuida-icons': cuidaIconsEntry,
    },
  },
  build: {
    lib: {
      entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
      name: 'Akoma',
      formats: ['es', 'cjs'],
      fileName: (format) => (format === 'es' ? 'akoma.js' : 'akoma.cjs'),
    },
    rollupOptions: {
      external: ['vue', '@sysvale/cuida-icons'],
      output: {
        globals: {
          vue: 'Vue',
          '@sysvale/cuida-icons': 'CuidaIcons',
        },
        assetFileNames: 'akoma.[ext]',
      },
    },
    cssCodeSplit: false,
    emptyOutDir: true,
  },
})
