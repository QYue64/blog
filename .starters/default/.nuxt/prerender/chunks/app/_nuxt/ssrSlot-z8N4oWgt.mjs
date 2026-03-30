import { f as flatUnwrap } from './MDCSlot-VIEgV7xL.mjs';
import { ssrRenderSlot as ssrRenderSlot$1 } from 'file:///Users/jiyankang/vscodeProjects/witque-blog/node_modules/.pnpm/vue@3.4.15_typescript@5.3.3/node_modules/vue/server-renderer/index.mjs';

const ssrRenderSlot = (slots, name, props, fallbackRenderFn, push, parentComponent, slotScopeId) => {
  if (slots[name]) {
    return ssrRenderSlot$1({ ...slots, [name]: () => flatUnwrap(slots[name](), props == null ? void 0 : props.unwrap) }, name, props, fallbackRenderFn, push, parentComponent, slotScopeId);
  }
  return ssrRenderSlot$1(slots, name, props, fallbackRenderFn, push, parentComponent, slotScopeId);
};

export { ssrRenderSlot as s };
//# sourceMappingURL=ssrSlot-z8N4oWgt.mjs.map
