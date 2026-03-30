import { defineComponent, h, inject, computed, unref, ref, Suspense, nextTick, mergeProps, Transition, provide, withCtx, createVNode, openBlock, createBlock, useSSRContext } from 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/vue@3.4.15_typescript@5.3.3/node_modules/vue/index.mjs';
import { l as layouts, P as PageRouteSymbol, b as useRoute, d as appLayoutTransition, e as _wrapIf, L as LayoutMetaSymbol, g as useRuntimeConfig, h as useContent, i as useRequestEvent, j as useContentHead, f as useNuxtApp } from '../server.mjs';
import { useRoute as useRoute$1 } from 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/vue-router@4.3.0_vue@3.4.21/node_modules/vue-router/dist/vue-router.node.mjs';
import _sfc_main$1 from './ContentRenderer-npCvl6uL.mjs';
import _sfc_main$2 from './DocumentDrivenEmpty-kO7tUmPk.mjs';
import __nuxt_component_3 from './DocumentDrivenNotFound-kZ7PaaPT.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/vue@3.4.15_typescript@5.3.3/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/ofetch@1.3.3/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/unctx@2.3.1/node_modules/unctx/dist/index.mjs';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/@unhead+shared@1.8.10/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/h3@1.11.1/node_modules/h3/dist/index.mjs';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/ufo@1.3.2/node_modules/ufo/dist/index.mjs';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/ohash@1.1.3/node_modules/ohash/dist/index.mjs';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/destr@2.0.2/node_modules/destr/dist/index.mjs';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/cookie-es@1.0.0/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/nanoid@4.0.2/node_modules/nanoid/index.js';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/scule@1.2.0/node_modules/scule/dist/index.mjs';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/unhead@1.8.10/node_modules/unhead/dist/index.mjs';
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
import './ContentRendererMarkdown-jXlJ4h_S.mjs';
import 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/property-information@6.4.0/node_modules/property-information/index.js';

const LayoutLoader = defineComponent({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    layoutProps: Object
  },
  async setup(props, context) {
    const LayoutComponent = await layouts[props.name]().then((r) => r.default || r);
    return () => h(LayoutComponent, props.layoutProps, context.slots);
  }
});
const __nuxt_component_0 = defineComponent({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    },
    fallback: {
      type: [String, Object],
      default: null
    }
  },
  setup(props, context) {
    const nuxtApp = useNuxtApp();
    const injectedRoute = inject(PageRouteSymbol);
    const route = injectedRoute === useRoute() ? useRoute$1() : injectedRoute;
    const layout = computed(() => {
      var _a, _b;
      let layout2 = (_b = (_a = unref(props.name)) != null ? _a : route.meta.layout) != null ? _b : "default";
      if (layout2 && !(layout2 in layouts)) {
        if (props.fallback) {
          layout2 = unref(props.fallback);
        }
      }
      return layout2;
    });
    const layoutRef = ref();
    context.expose({ layoutRef });
    const done = nuxtApp.deferHydration();
    return () => {
      var _a;
      const hasLayout = layout.value && layout.value in layouts;
      const transitionProps = (_a = route.meta.layoutTransition) != null ? _a : appLayoutTransition;
      return _wrapIf(Transition, hasLayout && transitionProps, {
        default: () => h(Suspense, { suspensible: true, onResolve: () => {
          nextTick(done);
        } }, {
          default: () => h(
            LayoutProvider,
            {
              layoutProps: mergeProps(context.attrs, { ref: layoutRef }),
              key: layout.value || void 0,
              name: layout.value,
              shouldProvide: !props.name,
              hasTransition: !!transitionProps
            },
            context.slots
          )
        })
      }).default();
    };
  }
});
const LayoutProvider = defineComponent({
  name: "NuxtLayoutProvider",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean]
    },
    layoutProps: {
      type: Object
    },
    hasTransition: {
      type: Boolean
    },
    shouldProvide: {
      type: Boolean
    }
  },
  setup(props, context) {
    const name = props.name;
    if (props.shouldProvide) {
      provide(LayoutMetaSymbol, {
        isCurrent: (route) => {
          var _a;
          return name === ((_a = route.meta.layout) != null ? _a : "default");
        }
      });
    }
    return () => {
      var _a, _b;
      if (!name || typeof name === "string" && !(name in layouts)) {
        return (_b = (_a = context.slots).default) == null ? void 0 : _b.call(_a);
      }
      return h(
        LayoutLoader,
        { key: name, layoutProps: props.layoutProps, name },
        context.slots
      );
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "document-driven",
  __ssrInlineRender: true,
  setup(__props) {
    const { contentHead } = useRuntimeConfig().public.content;
    const { page, layout } = useContent();
    if (!page.value && true) {
      const event = useRequestEvent();
      event.res.statusCode = 404;
    }
    if (contentHead) {
      useContentHead(page);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_ContentRenderer = _sfc_main$1;
      const _component_DocumentDrivenEmpty = _sfc_main$2;
      const _component_DocumentDrivenNotFound = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "document-driven-page" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, {
        name: unref(layout) || "default"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(page)) {
              _push2(ssrRenderComponent(_component_ContentRenderer, {
                key: unref(page)._id,
                value: unref(page)
              }, {
                empty: withCtx(({ value }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_DocumentDrivenEmpty, { value }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_DocumentDrivenEmpty, { value }, null, 8, ["value"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_DocumentDrivenNotFound, null, null, _parent2, _scopeId));
            }
          } else {
            return [
              unref(page) ? (openBlock(), createBlock(_component_ContentRenderer, {
                key: unref(page)._id,
                value: unref(page)
              }, {
                empty: withCtx(({ value }) => [
                  createVNode(_component_DocumentDrivenEmpty, { value }, null, 8, ["value"])
                ]),
                _: 1
              }, 8, ["value"])) : (openBlock(), createBlock(_component_DocumentDrivenNotFound, { key: 1 }))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/@nuxt+content@2.11.0_nuxt@3.9.3_rollup@3.29.3_vue@3.4.15/node_modules/@nuxt/content/dist/runtime/pages/document-driven.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=document-driven-jeT_SgAC.mjs.map
