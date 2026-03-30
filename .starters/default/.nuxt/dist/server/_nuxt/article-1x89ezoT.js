import { h as useContent, b as useRoute, o as useAppConfig, u as useHead, a as __nuxt_component_0, k as __nuxt_component_1, _ as _export_sfc } from "../server.mjs";
import __nuxt_component_2 from "./ProseA-JekqIH0i.js";
import { defineComponent, ref, computed, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { f as formatDate } from "./date-QVYH-A7n.js";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderSlot } from "vue/server-renderer";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
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
  __name: "article",
  __ssrInlineRender: true,
  setup(__props) {
    const { page } = useContent();
    const route = useRoute();
    const alpine = useAppConfig().alpine;
    const article2 = ref(null);
    if (page.value) {
      const linkArray = [];
      const metaArray = [];
      if (page.value.cover) {
        metaArray.push({ property: "og:image", content: page.value.cover });
      }
      if (page.value.canonical) {
        linkArray.push({ rel: "canonical", href: page.value.canonical });
      }
      useHead({
        meta: metaArray,
        link: linkArray
      });
    }
    const parentPath = computed(
      () => {
        const pathTabl = route.path.split("/");
        pathTabl.pop();
        return pathTabl.join("/");
      }
    );
    const onBackToTop = () => {
      var _a;
      (_a = article2.value) == null ? void 0 : _a.scrollIntoView({
        behavior: "smooth"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      const _component_ProseA = __nuxt_component_2;
      _push(`<article${ssrRenderAttrs(mergeProps({
        ref_key: "article",
        ref: article2
      }, _attrs))} data-v-c46ef290>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(parentPath),
        class: "back"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "ph:arrow-left" }, null, _parent2, _scopeId));
            _push2(`<span data-v-c46ef290${_scopeId}> Back </span>`);
          } else {
            return [
              createVNode(_component_Icon, { name: "ph:arrow-left" }),
              createVNode("span", null, " Back ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<header data-v-c46ef290>`);
      if ((_a = unref(page)) == null ? void 0 : _a.title) {
        _push(`<h1 class="title" data-v-c46ef290>${ssrInterpolate(unref(page).title)}</h1>`);
      } else {
        _push(`<!---->`);
      }
      if ((_b = unref(page)) == null ? void 0 : _b.date) {
        _push(`<time${ssrRenderAttr("datetime", unref(page).date)} data-v-c46ef290>${ssrInterpolate(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(unref(page).date))}</time>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header><div class="prose" data-v-c46ef290>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      if ((_c = unref(alpine)) == null ? void 0 : _c.backToTop) {
        _push(`<div class="back-to-top" data-v-c46ef290>`);
        _push(ssrRenderComponent(_component_ProseA, { onClick: onBackToTop }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b2, _c2, _d, _e, _f, _g, _h;
            if (_push2) {
              _push2(`${ssrInterpolate(((_b2 = (_a2 = unref(alpine)) == null ? void 0 : _a2.backToTop) == null ? void 0 : _b2.text) || "Back to top")} `);
              _push2(ssrRenderComponent(_component_Icon, {
                name: ((_d = (_c2 = unref(alpine)) == null ? void 0 : _c2.backToTop) == null ? void 0 : _d.icon) || "material-symbols:arrow-upward"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createTextVNode(toDisplayString(((_f = (_e = unref(alpine)) == null ? void 0 : _e.backToTop) == null ? void 0 : _f.text) || "Back to top") + " ", 1),
                createVNode(_component_Icon, {
                  name: ((_h = (_g = unref(alpine)) == null ? void 0 : _g.backToTop) == null ? void 0 : _h.icon) || "material-symbols:arrow-upward"
                }, null, 8, ["name"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></article>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../layouts/article.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const article = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c46ef290"]]);
export {
  article as default
};
//# sourceMappingURL=article-1x89ezoT.js.map
