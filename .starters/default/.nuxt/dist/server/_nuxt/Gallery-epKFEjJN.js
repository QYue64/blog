import _sfc_main$1 from "./NuxtImg-_wBVCxI2.js";
import { defineComponent, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { p as usePinceauRuntime, _ as _export_sfc } from "../server.mjs";
import "ufo";
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
  __name: "Gallery",
  __ssrInlineRender: true,
  props: {
    images: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const _6Li_cols = computed(() => ((props = __$pProps) => props.images.length < 2 ? props.images.length : 2)());
    const __$pProps = __props;
    const { $pinceau } = usePinceauRuntime(__$pProps, void 0, { _6Li_cols });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: ["gallery", [unref($pinceau)]]
      }, _attrs))} data-v-e572c204><div class="layout" data-v-e572c204><!--[-->`);
      ssrRenderList(__props.images, (image, index) => {
        _push(ssrRenderComponent(_component_NuxtImg, {
          key: index,
          src: image,
          width: 16,
          height: 9
        }, null, _parent));
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../components/content/Gallery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Gallery = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e572c204"]]);
export {
  Gallery as default
};
//# sourceMappingURL=Gallery-epKFEjJN.js.map
