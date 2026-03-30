import { o as useAppConfig, k as __nuxt_component_1, _ as _export_sfc } from "../server.mjs";
import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { useClipboard, onClickOutside } from "@vueuse/core";
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
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProseCodeCopyButton",
  __ssrInlineRender: true,
  props: {
    content: {
      type: String,
      default: ""
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const copyButtonRef = ref();
    useClipboard();
    onClickOutside(copyButtonRef, () => {
      if (state.value === "copied") {
        state.value = "init";
      }
    });
    const { prose } = useAppConfig();
    const state = ref("init");
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_Icon = __nuxt_component_1;
      _push(`<button${ssrRenderAttrs(mergeProps({
        ref_key: "copyButtonRef",
        ref: copyButtonRef,
        class: [(__props.show || state.value === "copied") && "show"]
      }, _attrs))} data-v-c3e91f7c><span class="sr-only" data-v-c3e91f7c>Copy to clipboard</span><span class="icon-wrapper" data-v-c3e91f7c>`);
      if (state.value === "copied") {
        _push(ssrRenderComponent(_component_Icon, {
          name: (_a = unref(prose).copyButton) == null ? void 0 : _a.iconCopied,
          size: "18",
          class: "copied"
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_Icon, {
          name: (_b = unref(prose).copyButton) == null ? void 0 : _b.iconCopy,
          size: "18"
        }, null, _parent));
      }
      _push(`</span></button>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/@nuxt-themes+typography@0.11.0_rollup@3.29.3_vue@3.4.15/node_modules/@nuxt-themes/typography/components/ProseCodeCopyButton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c3e91f7c"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProseCode",
  __ssrInlineRender: true,
  props: {
    code: {
      type: String,
      default: ""
    },
    language: {
      type: String,
      default: null
    },
    filename: {
      type: String,
      default: null
    },
    highlights: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const hovered = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProseCodeCopyButton = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [[`highlight-${__props.language}`], "prose-code"]
      }, _attrs))} data-v-4f2aceaf>`);
      if (__props.filename) {
        _push(`<span class="filename" data-v-4f2aceaf>${ssrInterpolate(__props.filename)}</span>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_ProseCodeCopyButton, {
        show: hovered.value,
        content: __props.code,
        class: "copy-button"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/@nuxt-themes+typography@0.11.0_rollup@3.29.3_vue@3.4.15/node_modules/@nuxt-themes/typography/components/global/ProseCode.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4f2aceaf"]]);
export {
  __nuxt_component_0 as default
};
//# sourceMappingURL=ProseCode-nY8yK-W7.js.map
