import { f as flatUnwrap } from "./MDCSlot-VIEgV7xL.js";
import { ssrRenderSlot as ssrRenderSlot$1 } from "vue/server-renderer";
const ssrRenderSlot = (slots, name, props, fallbackRenderFn, push, parentComponent, slotScopeId) => {
  if (slots[name]) {
    return ssrRenderSlot$1({ ...slots, [name]: () => flatUnwrap(slots[name](), props == null ? void 0 : props.unwrap) }, name, props, fallbackRenderFn, push, parentComponent, slotScopeId);
  }
  return ssrRenderSlot$1(slots, name, props, fallbackRenderFn, push, parentComponent, slotScopeId);
};
export {
  ssrRenderSlot as s
};
//# sourceMappingURL=ssrSlot-z8N4oWgt.js.map
