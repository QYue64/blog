import { _ as _export_sfc, a as __nuxt_component_0, k as __nuxt_component_1 } from "../server.mjs";
import { withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
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
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_Icon = __nuxt_component_1;
  _push(`<section${ssrRenderAttrs(_attrs)} data-v-8da1f86a><p class="message" data-v-8da1f86a> This page could not be found </p><p class="status" data-v-8da1f86a> 404 </p>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Back to homepage `);
        _push2(ssrRenderComponent(_component_Icon, { name: "ph:arrow-right" }, null, _parent2, _scopeId));
      } else {
        return [
          createTextVNode(" Back to homepage "),
          createVNode(_component_Icon, { name: "ph:arrow-right" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../components/DocumentDrivenNotFound.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-8da1f86a"]]);
export {
  __nuxt_component_3 as default
};
//# sourceMappingURL=DocumentDrivenNotFound-kZ7PaaPT.js.map
