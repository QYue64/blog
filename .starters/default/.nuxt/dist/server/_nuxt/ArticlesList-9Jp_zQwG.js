import __nuxt_component_0 from "./ArticlesListItem-NYaSM8ty.js";
import __nuxt_component_2 from "./ProseA-JekqIH0i.js";
import __nuxt_component_1 from "./ProseCodeInline-pV8y8HjW.js";
import { u as useAsyncData } from "./asyncData-rR55K7BA.js";
import { q as queryContent, _ as _export_sfc } from "../server.mjs";
import { defineComponent, withAsyncContext, computed, unref, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { withTrailingSlash } from "ufo";
import "./NuxtImg-_wBVCxI2.js";
import "./date-QVYH-A7n.js";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "@unhead/shared";
import "vue-router";
import "h3";
import "defu";
import "klona";
import "devalue";
import "ohash";
import "destr";
import "cookie-es";
import "nanoid";
import "scule";
import "unhead";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ArticlesList",
  __ssrInlineRender: true,
  props: {
    path: {
      type: String,
      default: "articles"
    }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const { data: _articles } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(props.path, async () => await queryContent(withTrailingSlash(props.path)).sort({ date: -1 }).find(), "$nzn4HIzK3O")), __temp = await __temp, __restore(), __temp);
    const articles = computed(() => _articles.value || []);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_ArticlesListItem = __nuxt_component_0;
      const _component_ProseA = __nuxt_component_2;
      const _component_ProseCodeInline = __nuxt_component_1;
      if ((_a = unref(articles)) == null ? void 0 : _a.length) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "articles-list" }, _attrs))} data-v-01e93ac2><div class="featured" data-v-01e93ac2>`);
        _push(ssrRenderComponent(_component_ArticlesListItem, {
          article: unref(articles)[0],
          featured: true
        }, null, _parent));
        _push(`</div><div class="layout" data-v-01e93ac2><!--[-->`);
        ssrRenderList(unref(articles).slice(1), (article, index) => {
          _push(ssrRenderComponent(_component_ArticlesListItem, {
            key: index,
            article
          }, null, _parent));
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "tour" }, _attrs))} data-v-01e93ac2><p data-v-01e93ac2>Seems like there are no articles yet.</p><p data-v-01e93ac2> You can start by `);
        _push(ssrRenderComponent(_component_ProseA, { href: "https://alpine.nuxt.space/articles/write-articles" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`creating`);
            } else {
              return [
                createTextVNode("creating")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(` one in the `);
        _push(ssrRenderComponent(_component_ProseCodeInline, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`articles`);
            } else {
              return [
                createTextVNode("articles")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(` folder. </p></div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../components/content/ArticlesList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ArticlesList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-01e93ac2"]]);
export {
  ArticlesList as default
};
//# sourceMappingURL=ArticlesList-9Jp_zQwG.js.map
