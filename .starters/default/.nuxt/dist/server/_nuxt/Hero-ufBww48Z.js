import "./MDCSlot-VIEgV7xL.js";
import _sfc_main$1 from "./NuxtImg-_wBVCxI2.js";
import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { s as ssrRenderSlot } from "./ssrSlot-z8N4oWgt.js";
import { _ as _export_sfc } from "../server.mjs";
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
  __name: "Hero",
  __ssrInlineRender: true,
  props: {
    image: {
      type: String,
      default: null
    },
    imageAlt: {
      type: String,
      default: "Hero Image"
    },
    imagePosition: {
      type: String,
      default: "right"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero" }, _attrs))} data-v-ce2c89e1><div class="layout" data-v-ce2c89e1><div class="content" data-v-ce2c89e1><div class="title" data-v-ce2c89e1>`);
      ssrRenderSlot(_ctx.$slots, "title", { unwrap: "p" }, () => {
        _push(` Hero title `);
      }, _push, _parent);
      _push(`</div><div class="description" data-v-ce2c89e1>`);
      ssrRenderSlot(_ctx.$slots, "description", { unwrap: "p" }, () => {
        _push(` Hero description `);
      }, _push, _parent);
      _push(`</div></div>`);
      if (__props.image) {
        _push(ssrRenderComponent(_component_NuxtImg, {
          class: __props.imagePosition,
          src: __props.image,
          alt: __props.imageAlt,
          width: 16,
          height: 9
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../components/content/Hero.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Hero = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ce2c89e1"]]);
export {
  Hero as default
};
//# sourceMappingURL=Hero-ufBww48Z.js.map
