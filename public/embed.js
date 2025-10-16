/* Simple embed: include <script src="/embed.js"></script> after deployment and set window.__HORO_ENDPOINT__ */
(async function(){
  const endpoint = window.__HORO_ENDPOINT__ || "/api/horoscope";
  try {
    const r = await fetch(endpoint);
    if (!r.ok) { console.warn("embed fetch failed", r.status); return; }
    const data = await r.json();
    const container = document.createElement("div");
    container.style.maxWidth="700px";
    container.style.margin="12px auto";
    container.style.padding="12px";
    container.style.background="#fff";
    container.style.border="1px solid #eee";
    container.innerHTML = `<h3>রাশিফল — ${data.date}</h3><pre style="white-space:pre-wrap">${JSON.stringify(data, null, 2)}</pre>`;
    document.body.insertBefore(container, document.body.firstChild);
  } catch (e) {
    console.warn("embed error", e);
  }
})();