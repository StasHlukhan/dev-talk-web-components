import AutoImport from 'unplugin-auto-import/vite'

/* CONFIGURATION FOR SCRIPTS AUTO-IMPORT */
export const ImportsBuilder = () => AutoImport({
  dts: './dts/auto-imports.d.ts',
  dirs: [
    './src/composables',
    './src/composables/**/index.ts'
  ],

  eslintrc: {
    enabled: true
  },

  imports: [
    'vue',
    '@vueuse/core',
    '@vueuse/head',
    { '@vueuse/core': ['promiseTimeout'] },
    { '@vueuse/integrations/useQRCode': ['useQRCode'] }
  ],
  vueTemplate: true
})
