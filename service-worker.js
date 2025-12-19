const i = [
  "./app/immutable/assets/page-54f4d176.css",
  "./app/immutable/chunks/singletons-886c71d9.js",
  "./app/immutable/chunks/index-06b9bfde.js",
  "./app/immutable/chunks/i18n-7acc434f.js",
  "./app/immutable/chunks/ms-82f4d192.js",
  "./app/immutable/chunks/id-b1e1ff25.js",
  "./app/immutable/chunks/1-79577567.js",
  "./app/immutable/chunks/zh-Hant-79f99e59.js",
  "./app/immutable/chunks/tr-1316d765.js",
  "./app/immutable/start-32744ce0.js",
  "./app/immutable/modules/pages/layout.ts-e4e26074.js",
  "./app/immutable/chunks/es-7c0be0fd.js",
  "./app/immutable/chunks/hu-4ebb5507.js",
  "./app/immutable/chunks/2-7dcaf21a.js",
  "./app/immutable/chunks/ru-5f7b907e.js",
  "./app/immutable/chunks/pt-45628ab2.js",
  "./app/immutable/chunks/0-f5b363cd.js",
  "./app/immutable/chunks/ar-faba7b51.js",
  "./app/immutable/chunks/pl-71ee319d.js",
  "./app/immutable/chunks/cs-0fb15a8f.js",
  "./app/immutable/chunks/layout-e4a84b88.js",
  "./app/immutable/chunks/zh-Hans-13150fb1.js",
  "./app/immutable/chunks/ja-1d99ac9b.js",
  "./app/immutable/components/error.svelte-6f16e1f8.js",
  "./app/immutable/chunks/fr-ebaf45f7.js",
  "./app/immutable/chunks/it-a01df235.js",
  "./app/immutable/chunks/en-0ebedb5d.js",
  "./app/immutable/chunks/nl-2736968f.js",
  "./app/immutable/chunks/de-8640df98.js",
  "./app/immutable/components/pages/layout.svelte-f415011a.js",
  "./app/immutable/chunks/ko-e10f04d3.js",
  "./app/immutable/chunks/SelectionGroupIcon-b5ff4833.js",
  "./app/immutable/components/pages/page.svelte-39667b59.js"
], m = [
  "./MS_Basic.sf3",
  "./favicon.png",
  "./librescore1024.png",
  "./librescore128.png",
  "./librescore144.png",
  "./librescore16.png",
  "./librescore168.png",
  "./librescore192-apple.png",
  "./librescore192.png",
  "./librescore256.png",
  "./librescore32.png",
  "./librescore48.png",
  "./librescore512.png",
  "./librescore64.png",
  "./librescore72.png",
  "./librescore96.png",
  "./manifest.webmanifest",
  "./smui-dark.css",
  "./smui.css"
], l = "1719710261059", p = (
  /** @type {ServiceWorkerGlobalScope} */
  /** @type {unknown} */
  self
), n = `cache-${l}`, u = [
  ...i,
  // the app itself
  ...m
  // everything in `static`
];
p.addEventListener("install", (e) => {
  async function s() {
    await (await caches.open(n)).addAll(u);
  }
  e.waitUntil(s());
});
p.addEventListener("activate", (e) => {
  async function s() {
    for (const a of await caches.keys())
      a !== n && await caches.delete(a);
  }
  e.waitUntil(s());
});
p.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET")
    return;
  async function s() {
    const a = new URL(e.request.url), t = await caches.open(n);
    if (u.includes(a.pathname))
      return t.match(e.request);
    try {
      const c = await fetch(e.request);
      return c.status === 200 && t.put(e.request, c.clone()), c;
    } catch {
      return t.match(e.request);
    }
  }
  e.respondWith(s());
});
