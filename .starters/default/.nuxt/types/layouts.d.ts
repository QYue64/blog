import { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "article" | "default" | "page"
declare module "../../../../node_modules/.pnpm/nuxt@3.9.3_@types+node@20.11.5_eslint@8.56.0_rollup@3.29.3_typescript@5.3.3/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}