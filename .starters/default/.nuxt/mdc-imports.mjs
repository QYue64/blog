import Highlight from '/Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/@nuxtjs+mdc@0.3.2_rollup@3.29.3/node_modules/@nuxtjs/mdc/dist/runtime/shiki/index.mjs'

export const remarkPlugins = {
}

export const rehypePlugins = {
  'highlight': { instance: Highlight, options: {"src":"/Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/@nuxtjs+mdc@0.3.2_rollup@3.29.3/node_modules/@nuxtjs/mdc/dist/runtime/shiki/index.mjs"} },
}

export const highlight = {"theme":{"default":"github-light","dark":"github-dark"},"preload":["json","js","ts","html","css","vue","diff","shell","markdown","yaml","bash","ini","c","cpp"]}