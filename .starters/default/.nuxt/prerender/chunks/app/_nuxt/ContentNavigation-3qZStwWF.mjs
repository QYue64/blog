import { u as useAsyncData } from './asyncData-rR55K7BA.mjs';
import { v as useState, h as useContent, w as fetchContentNavigation, a as __nuxt_component_0$4 } from '../server.mjs';
import { defineComponent, toRefs, computed, useSlots, useSSRContext, h } from 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/vue@3.4.15_typescript@5.3.3/node_modules/vue/index.mjs';
import { hash } from 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/ohash@1.1.3/node_modules/ohash/dist/index.mjs';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/ofetch@1.3.3/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/unctx@2.3.1/node_modules/unctx/dist/index.mjs';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/@unhead+shared@1.8.10/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/vue-router@4.3.0_vue@3.4.21/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/h3@1.11.1/node_modules/h3/dist/index.mjs';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/ufo@1.3.2/node_modules/ufo/dist/index.mjs';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/destr@2.0.2/node_modules/destr/dist/index.mjs';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/cookie-es@1.0.0/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/nanoid@4.0.2/node_modules/nanoid/index.js';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/scule@1.2.0/node_modules/scule/dist/index.mjs';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/unhead@1.8.10/node_modules/unhead/dist/index.mjs';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/vue@3.4.15_typescript@5.3.3/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/@iconify+vue@4.1.1_vue@3.4.15/node_modules/@iconify/vue/dist/offline.mjs';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/@iconify+vue@4.1.1_vue@3.4.15/node_modules/@iconify/vue/dist/iconify.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/unenv@1.9.0/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/unstorage@1.10.1/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/unstorage@1.10.1/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/unstorage@1.10.1/node_modules/unstorage/drivers/memory.mjs';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/unstorage@1.10.1/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/unstorage@1.10.1/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/radix3@1.1.0/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/pathe@1.1.2/node_modules/pathe/dist/index.mjs';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/shikiji@0.9.19/node_modules/shikiji/dist/index.mjs';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/shikiji-transformers@0.9.19/node_modules/shikiji-transformers/dist/index.mjs';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/unified@11.0.4/node_modules/unified/index.js';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/mdast-util-to-string@4.0.0/node_modules/mdast-util-to-string/index.js';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/micromark@4.0.0/node_modules/micromark/index.js';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/unist-util-stringify-position@4.0.0/node_modules/unist-util-stringify-position/index.js';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/micromark-util-character@2.0.1/node_modules/micromark-util-character/index.js';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/micromark-util-chunked@2.0.0/node_modules/micromark-util-chunked/index.js';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/micromark-util-resolve-all@2.0.0/node_modules/micromark-util-resolve-all/index.js';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/micromark-util-sanitize-uri@2.0.0/node_modules/micromark-util-sanitize-uri/index.js';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/slugify@1.6.6/node_modules/slugify/slugify.js';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/remark-parse@11.0.0/node_modules/remark-parse/index.js';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/remark-rehype@11.1.0/node_modules/remark-rehype/index.js';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/remark-mdc@3.0.2/node_modules/remark-mdc/dist/index.mjs';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/hast-util-to-string@3.0.0/node_modules/hast-util-to-string/index.js';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/github-slugger@2.0.0/node_modules/github-slugger/index.js';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/detab@3.0.2/node_modules/detab/index.js';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/remark-emoji@4.0.1/node_modules/remark-emoji/index.js';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/remark-gfm@4.0.0/node_modules/remark-gfm/index.js';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/rehype-external-links@3.0.0/node_modules/rehype-external-links/index.js';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/rehype-sort-attribute-values@5.0.0/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/rehype-sort-attributes@5.0.0/node_modules/rehype-sort-attributes/index.js';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/rehype-raw@7.0.0/node_modules/rehype-raw/index.js';

const ContentNavigation = defineComponent({
  name: "ContentNavigation",
  props: {
    /**
     * A query to be passed to `fetchContentNavigation()`.
     */
    query: {
      type: Object,
      required: false,
      default: void 0
    }
  },
  async setup(props) {
    const {
      query
    } = toRefs(props);
    const queryBuilder = computed(() => {
      var _a;
      if (typeof ((_a = query.value) == null ? void 0 : _a.params) === "function") {
        return query.value.params();
      }
      return query.value;
    });
    if (!queryBuilder.value && useState("dd-navigation").value) {
      const { navigation: navigation2 } = useContent();
      return { navigation: navigation2 };
    }
    const { data: navigation } = await useAsyncData(
      `content-navigation-${hash(queryBuilder.value)}`,
      () => fetchContentNavigation(queryBuilder.value)
    );
    return { navigation };
  },
  /**
   * Navigation empty fallback
   * @slot empty
   */
  render(ctx) {
    const slots = useSlots();
    const { navigation } = ctx;
    const renderLink = (link) => h(__nuxt_component_0$4, { to: link._path }, () => link.title);
    const renderLinks = (data, level) => h(
      "ul",
      level ? { "data-level": level } : null,
      data.map((link) => {
        if (link.children) {
          return h("li", null, [renderLink(link), renderLinks(link.children, level + 1)]);
        }
        return h("li", null, renderLink(link));
      })
    );
    const defaultNode = (data) => renderLinks(data, 0);
    return (slots == null ? void 0 : slots.default) ? slots.default({ navigation, ...this.$attrs }) : defaultNode(navigation);
  }
});
const _sfc_main = ContentNavigation;
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/@nuxt+content@2.11.0_nuxt@3.9.3_rollup@3.29.3_vue@3.4.15/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ContentNavigation-3qZStwWF.mjs.map
