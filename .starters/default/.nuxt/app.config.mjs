
import { updateAppConfig } from '#app/config'
import { defuFn } from 'defu'

const inlineConfig = {
  "nuxt": {
    "buildId": "690e1d50-e3da-4017-9b06-73803eef9f4c"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}

import cfg0 from "/Users/jiyankang/vscodeProjects/witque-blog/.starters/default/app.config.ts"
import cfg1 from "/Users/jiyankang/vscodeProjects/witque-blog/app.config.ts"
import cfg2 from "/Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/@nuxt-themes+typography@0.11.0_rollup@3.29.3_vue@3.4.15/node_modules/@nuxt-themes/typography/app.config.ts"
import cfg3 from "/Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/@nuxt-themes+elements@0.9.5_rollup@3.29.3_vue@3.4.15/node_modules/@nuxt-themes/elements/app.config.ts"

export default /*@__PURE__*/ defuFn(cfg0, cfg1, cfg2, cfg3, inlineConfig)
