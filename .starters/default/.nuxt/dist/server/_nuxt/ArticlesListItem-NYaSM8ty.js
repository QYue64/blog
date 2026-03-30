import { m as useContentPreview, a as __nuxt_component_0$1, _ as _export_sfc } from "../server.mjs";
import _sfc_main$1 from "./NuxtImg-_wBVCxI2.js";
import { defineComponent, computed, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { f as formatDate } from "./date-QVYH-A7n.js";
import { ssrRenderAttrs, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
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
  __name: "ArticlesListItem",
  __ssrInlineRender: true,
  props: {
    article: {
      type: Object,
      required: true,
      validator: (value) => {
        if ((value == null ? void 0 : value._path) && value.title) {
          return true;
        }
        return false;
      }
    },
    featured: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const id = computed(() => {
      var _a, _b;
      return ((_a = useContentPreview()) == null ? void 0 : _a.isEnabled()) ? (_b = props.article) == null ? void 0 : _b._id : void 0;
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_NuxtImg = _sfc_main$1;
      if (__props.article._path && __props.article.title) {
        _push(`<article${ssrRenderAttrs(mergeProps({
          class: { "featured": __props.featured },
          "data-content-id": unref(id)
        }, _attrs))} data-v-8cbebf72>`);
        if (__props.article.cover) {
          _push(`<div class="image" data-v-8cbebf72>`);
          if ((_a = __props.article) == null ? void 0 : _a.badges) {
            _push(`<div data-v-8cbebf72><!--[-->`);
            ssrRenderList(__props.article.badges, (badge, index) => {
              _push(`<span style="${ssrRenderStyle({
                backgroundColor: (badge == null ? void 0 : badge.bg) || "rgba(0, 0, 0, 0.3)",
                color: (badge == null ? void 0 : badge.color) || "white"
              })}" data-v-8cbebf72>${ssrInterpolate(typeof badge === "string" ? badge : badge.content)}</span>`);
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: __props.article._path
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_NuxtImg, {
                  src: __props.article.cover,
                  alt: __props.article.title,
                  width: "16",
                  height: "9"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_NuxtImg, {
                    src: __props.article.cover,
                    alt: __props.article.title,
                    width: "16",
                    height: "9"
                  }, null, 8, ["src", "alt"])
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="content" data-v-8cbebf72>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: __props.article._path,
          class: "headline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h1 data-v-8cbebf72${_scopeId}>${ssrInterpolate(__props.article.title)}</h1>`);
            } else {
              return [
                createVNode("h1", null, toDisplayString(__props.article.title), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<p class="description" data-v-8cbebf72>${ssrInterpolate(__props.article.description)}</p><time data-v-8cbebf72>${ssrInterpolate(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(__props.article.date))}</time></div></article>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../components/content/ArticlesListItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8cbebf72"]]);
export {
  __nuxt_component_0 as default
};
//# sourceMappingURL=ArticlesListItem-NYaSM8ty.js.map
