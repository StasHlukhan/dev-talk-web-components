import Components from 'unplugin-vue-components/vite'
import { IconsResolverCustom } from './vite.config.icons'

/* CONFIGURATION FOR COMPONENTS AUTO-IMPORT */
export const ComponentsBuilder = () => Components({
  dts: './dts/components.d.ts',
  dirs: [
    './src/components'
  ],
  resolvers: [
    IconsResolverCustom()
  ]
})
