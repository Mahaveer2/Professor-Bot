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
  default: () => Blog,
  prerender: () => prerender
});
module.exports = __toCommonJS(stdin_exports);
var import_index_ce9a716b = require("../../chunks/index-ce9a716b.js");
var import_firestore = require("firebase/firestore");
var import_app = require("firebase/app");
var import_analytics = require("firebase/analytics");
const firebaseConfig = {
  apiKey: "AIzaSyBa5FEp_ODMfg1JE8Fv5eS_XLMzqfjv07o",
  authDomain: "svelteblog-b6e9d.firebaseapp.com",
  projectId: "svelteblog-b6e9d",
  storageBucket: "svelteblog-b6e9d.appspot.com",
  messagingSenderId: "234249096363",
  appId: "1:234249096363:web:38fa607733b33555e0bbee",
  measurementId: "G-NX8RSZB9PC"
};
(0, import_app.initializeApp)(firebaseConfig);
const db = (0, import_firestore.getFirestore)();
const prerender = true;
const Blog = (0, import_index_ce9a716b.c)(($$result, $$props, $$bindings, slots) => {
  let books = [];
  const blogRef = (0, import_firestore.collection)(db, "posts");
  (0, import_firestore.getDocs)(blogRef).then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      books.push({ ...doc.data(), id: doc.id });
      books = books;
    });
  }).catch((err) => console.log(err));
  return `<h1 class="${"text-gradient text-center text-3xl mt-4"}">Blog</h1>
${$$result.head += `${$$result.title = `<title>MahaveerK | Blog</title>`, ""}`, ""}
${(0, import_index_ce9a716b.f)(books, (post) => {
    return `<div class="${"card p-3"}"><h1 class="${"tex-red-200"}">author: ${(0, import_index_ce9a716b.e)(post.author)}</h1>
    <h3>${(0, import_index_ce9a716b.e)(post.body)}</h3>
  </div>`;
  })}`;
});
