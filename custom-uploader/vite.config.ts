import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

import { IconsPluginCustom } from './vite.config.icons'
import { ComponentsBuilder } from './vite.config.components'
import { ImportsBuilder } from './vite.config.imports'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    envDir: '../',
    define: {
      'process.env': env
    },
    plugins: [
      vue({ customElement: true }),
      IconsPluginCustom(),
      ComponentsBuilder(),
      ImportsBuilder()
    ],
    base: './',
    build: {
      emptyOutDir: true,
      outDir: '../native-project/public/scripts',
      lib: {
        entry: './src/main.ts',
        name: 'CustomUploader',
        fileName: (format) => `custom-uploader.${format}.js`
      }
    },

    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
