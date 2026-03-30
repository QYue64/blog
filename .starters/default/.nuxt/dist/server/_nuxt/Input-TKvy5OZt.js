import { defineComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
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
  __name: "Input",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: String,
      required: true
    },
    field: {
      type: Object,
      required: true,
      validator: (value) => {
        if (!value.name) {
          return false;
        }
        return true;
      }
    }
  },
  emits: ["update:modelValue"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-d1bc9653><label${ssrRenderAttr("for", __props.field.name)} data-v-d1bc9653>${ssrInterpolate(__props.field.label)}</label>`);
      if (__props.field.type !== "textarea") {
        _push(`<input${ssrRenderAttr("id", __props.field.name)}${ssrRenderAttr("name", __props.field.name)}${ssrRenderAttr("value", __props.modelValue)}${ssrRenderAttr("type", __props.field.type ? __props.field.type : "text")}${ssrRenderAttr("placeholder", __props.field.placeholder ? __props.field.placeholder : "")} data-v-d1bc9653>`);
      } else {
        _push(`<textarea${ssrRenderAttr("id", __props.field.name)}${ssrRenderAttr("name", __props.field.name)}${ssrRenderAttr("type", __props.field.type ? __props.field.type : "text")}${ssrRenderAttr("placeholder", __props.field.placeholder ? __props.field.placeholder : "")} data-v-d1bc9653>${ssrInterpolate(__props.modelValue)}</textarea>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../components/data-entry/Input.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d1bc9653"]]);
export {
  __nuxt_component_0 as default
};
//# sourceMappingURL=Input-TKvy5OZt.js.map
