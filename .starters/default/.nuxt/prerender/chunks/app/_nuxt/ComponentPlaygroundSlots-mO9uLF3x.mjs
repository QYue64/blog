import { defineComponent, mergeProps, useSSRContext } from 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/vue@3.4.15_typescript@5.3.3/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate } from 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/vue@3.4.15_typescript@5.3.3/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ComponentPlaygroundSlots",
  __ssrInlineRender: true,
  props: {
    componentData: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "component-playground-data-section" }, _attrs))}><pre>${ssrInterpolate(JSON.stringify(__props.componentData, null, 2))}</pre></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/@nuxt-themes+elements@0.9.5_rollup@3.29.3_vue@3.4.15/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundSlots.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ComponentPlaygroundSlots-mO9uLF3x.mjs.map
