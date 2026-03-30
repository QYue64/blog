import "./MDCSlot-VIEgV7xL.js";
import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { s as ssrRenderSlot } from "./ssrSlot-z8N4oWgt.js";
import { _ as _export_sfc } from "../server.mjs";
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
  __name: "Alert",
  __ssrInlineRender: true,
  props: {
    /**
     * @values info, success, warning, danger
     */
    type: {
      type: String,
      default: "info",
      validator(value) {
        return ["info", "success", "warning", "danger", "primary"].includes(value);
      }
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["alert", [__props.type]]
      }, _attrs))} data-v-2a88a1dd><div class="alert-content" data-v-2a88a1dd>`);
      ssrRenderSlot(_ctx.$slots, "default", { unwrap: "p" }, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/@nuxt-themes+elements@0.9.5_rollup@3.29.3_vue@3.4.15/node_modules/@nuxt-themes/elements/components/globals/Alert.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Alert = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2a88a1dd"]]);
export {
  Alert as default
};
//# sourceMappingURL=Alert-n2laLqAb.js.map
