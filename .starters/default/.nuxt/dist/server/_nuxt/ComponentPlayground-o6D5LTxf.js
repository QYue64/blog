import { defineComponent, computed, resolveComponent, ref, h, useSSRContext } from "vue";
import Ellipsis from "./Ellipsis-k84f258M.js";
import ComponentPlaygroundData from "./ComponentPlaygroundData-dp3WjC5I.js";
import { _ as _export_sfc } from "../server.mjs";
import "vue/server-renderer";
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
import "./TabsHeader-0wRfio_G.js";
import "./ComponentPlaygroundProps-dFca0kq7.js";
import "./ProseH4-ka9vr7Dq.js";
import "./ProseCodeInline-pV8y8HjW.js";
import "./Badge-sDS-OQuI.js";
import "./MDCSlot-VIEgV7xL.js";
import "./ssrSlot-z8N4oWgt.js";
import "./ProseP-vkVV1HYm.js";
import "@vueuse/core";
import "./ComponentPlaygroundSlots-mO9uLF3x.js";
import "./ComponentPlaygroundTokens-22OuyAwx.js";
const _sfc_main = defineComponent({
  props: {
    component: {
      type: String,
      required: true
    },
    props: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  async setup(props) {
    const as = computed(() => resolveComponent(props.component));
    const formProps = ref({
      ...props.props
    });
    const componentData = await useComponentMeta(props.component);
    return {
      as,
      formProps,
      componentData
    };
  },
  render(ctx) {
    const componentSlots = Object.entries(this.$slots).reduce(
      (acc, [key, slot]) => {
        if (key.startsWith("component-")) {
          const slotKey = key.replace("component-", "");
          acc[slotKey] = slot;
        }
        return acc;
      },
      {}
    );
    return h(
      "div",
      {
        class: "component-playground"
      },
      [
        h(
          "div",
          {
            class: "component-playground-wrapper"
          },
          [
            h(
              Ellipsis,
              {
                class: "component-playground-ellipsis",
                blur: "5vw",
                height: "100%",
                width: "100%"
              }
            ),
            h(
              ctx.as,
              {
                ...ctx.formProps,
                class: "component-playground-component"
              },
              {
                ...componentSlots
              }
            )
          ]
        ),
        h(
          ComponentPlaygroundData,
          {
            modelValue: ctx.formProps,
            componentData: ctx.componentData,
            "onUpdate:modelValue": (val) => ctx.formProps = val
          }
        )
      ]
    );
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/@nuxt-themes+elements@0.9.5_rollup@3.29.3_vue@3.4.15/node_modules/@nuxt-themes/elements/components/meta/ComponentPlayground.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ComponentPlayground = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4f560182"]]);
export {
  ComponentPlayground as default
};
//# sourceMappingURL=ComponentPlayground-o6D5LTxf.js.map
