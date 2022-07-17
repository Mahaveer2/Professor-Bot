var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_ce9a716b = require("../../chunks/index-ce9a716b.js");
var import_PageTransition_67ebd413 = require("../../chunks/PageTransition-67ebd413.js");
var card_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".card.svelte-ihav9.svelte-ihav9{position:relative;overflow:hidden;cursor:pointer;transition:.2s ease-in-out}img.svelte-ihav9.svelte-ihav9{transition:.1s ease;width:100%;height:100%}img.svelte-ihav9.svelte-ihav9:hover{transform:scale(1.2)}.card.svelte-ihav9 h5.svelte-ihav9{position:absolute;bottom:5%;left:10%;color:#fff}")();
const css = {
  code: ".card.svelte-ihav9.svelte-ihav9{position:relative;overflow:hidden;cursor:pointer;transition:.2s ease-in-out}img.svelte-ihav9.svelte-ihav9{transition:.1s ease;width:100%;height:100%}img.svelte-ihav9.svelte-ihav9:hover{transform:scale(1.2)}.card.svelte-ihav9 h5.svelte-ihav9{position:absolute;bottom:5%;left:10%;color:#fff}",
  map: null
};
const Card = (0, import_index_ce9a716b.c)(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { img = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  $$result.css.add(css);
  return `<div class="${"card flex justify-center w-full svelte-ihav9"}"><div class="${"rounded-lg w-full shadow-lg bg-white max-w-sm"}"><img class="${"rounded-t-lg w-full svelte-ihav9"}"${(0, import_index_ce9a716b.d)("src", img, 0)}${(0, import_index_ce9a716b.d)("alt", title, 0)}>
      <h5 class="${"text-black text-xl font-medium mb-2 svelte-ihav9"}">${(0, import_index_ce9a716b.e)(title)}</h5></div>
</div>`;
});
var logo = "/_app/immutable/assets/chat-1ebd05cb.png";
const Routes = (0, import_index_ce9a716b.c)(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"hero"}"></div>
  ${(0, import_index_ce9a716b.v)(import_PageTransition_67ebd413.P, "PageTransition").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"mt-[80vh] ml-[12%] flex justify-between items-center"}"><h1 class="${"text-4xl text-gradient w-[53%] "}">Welcome to my portfolio</h1>
        <p class="${"w-[40%] "}">I am an indie web developer</p></div>
      <div class="${"grid w-[80%] ml-auto mr-auto grid-cols-1 lg:grid-cols-3 gap-[20px] p-5 mt-5 card-grid"}"><a target="${"_blank"}" href="${"https://mkvchatapp.herokuapp.com/"}">${(0, import_index_ce9a716b.v)(Card, "Card").$$render($$result, {
        title: "Python Django Chat app",
        img: logo
      }, {}, {})}</a>
      <a target="${"_blank"}" href="${"https://nextjsmemer.vercel.app/"}">${(0, import_index_ce9a716b.v)(Card, "Card").$$render($$result, {
        title: "Nextjs Twitter clone",
        img: "https://9to5mac.com/wp-content/uploads/sites/6/2019/07/twitter-desktop-dark-mode-new-design.jpeg?quality=82&strip=all"
      }, {}, {})}</a>
      <a href="${"#noPreveiwAvailable"}">${(0, import_index_ce9a716b.v)(Card, "Card").$$render($$result, {
        title: "Django Social Network",
        img: "https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/686321/retina_1708x683_staging.toptal.net_designers_ux_minimalist-brutalist-web-design-92ef53170f74a492eecb6562729c5d24.png"
      }, {}, {})}</a>
    <a target="${"_blank"}" href="${"https://badsituationgames.netlify.app/"}">${(0, import_index_ce9a716b.v)(Card, "Card").$$render($$result, {
        title: "Games made with Unity",
        img: "https://cdn.mos.cms.futurecdn.net/ikAXid4d5CLbmXcWCfRJqm.jpeg"
      }, {}, {})}</a>
    <a target="${"_blank"}" href="${"https://moviesappbya.netlify.app/"}">${(0, import_index_ce9a716b.v)(Card, "Card").$$render($$result, {
        title: "Vuejs movie app",
        img: "https://s.studiobinder.com/wp-content/uploads/2020/04/Best-Movies-of-2017-Featured.jpg"
      }, {}, {})}</a>
    <a href="${"#noPreveiwAvailable"}">${(0, import_index_ce9a716b.v)(Card, "Card").$$render($$result, {
        title: "Django LMS",
        img: "https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/686321/retina_1708x683_staging.toptal.net_designers_ux_minimalist-brutalist-web-design-92ef53170f74a492eecb6562729c5d24.png"
      }, {}, {})}</a></div>`;
    }
  })}`;
});
