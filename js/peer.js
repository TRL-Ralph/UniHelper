/* Peer Support — tag filter (same chip pattern as Learn) + shared thread data */
"use strict";

(function (UH) {
  const list = document.getElementById("threadList");
  const filter = document.getElementById("tagFilter");
  const count = document.getElementById("threadCount");
  const heading = document.getElementById("threadHeading");
  const empty = document.getElementById("threadEmpty");
  const TAGS = [{ key: "all", label: "All" }, ...UH.threadTags];
  const labelOf = (key) => (TAGS.find((t) => t.key === key) || { label: key }).label;
  let active = "all";

  filter.innerHTML = TAGS.map((t) =>
    `<button class="chip" type="button" data-filter="${t.key}" aria-pressed="false">${UH.esc(t.label)}</button>`).join("");

  function render() {
    const visible = UH.threads.filter((t) => active === "all" || t.tags.includes(active));
    list.innerHTML = visible.map((t) => `
      <article class="thread" id="thread-${t.id}">
        <div class="thread-avatar"><img src="assets/icons/profile.png" alt=""></div>
        <div class="thread-body">
          <h3 class="thread-title">${UH.esc(t.title)}</h3>
          <p class="thread-excerpt clamp-2">${UH.esc(t.excerpt)}</p>
          <ul class="thread-tags">${t.tags.map((k) => `<li><span class="pill" data-category="${UH.esc(labelOf(k))}">${UH.esc(labelOf(k))}</span></li>`).join("")}</ul>
        </div>
        <div class="thread-meta">
          <div><img src="assets/icons/replies.png" alt=""><span>${t.replies} replies</span></div>
          <div><img src="assets/icons/views.png" alt=""><span>${t.views} views</span></div>
        </div>
        <button class="btn btn-bright btn-sm" type="button" data-wip>Join</button>
      </article>`).join("");

    count.textContent = `${visible.length} ${visible.length === 1 ? "thread" : "threads"}`;
    heading.textContent = active === "all" ? "All Threads" : `${labelOf(active)} Threads`;
    list.hidden = visible.length === 0;
    empty.hidden = visible.length !== 0;
    filter.querySelectorAll(".chip").forEach((chip) => {
      const on = chip.dataset.filter === active;
      chip.classList.toggle("selected", on);
      chip.setAttribute("aria-pressed", String(on));
    });
  }

  filter.addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    active = chip.dataset.filter;
    render();
  });

  // Linked from Home ("Recent Community Posts"): scroll to + highlight that thread.
  function focusThread() {
    const match = location.hash.match(/^#thread-(.+)$/);
    if (!match) return;
    const el = document.getElementById("thread-" + decodeURIComponent(match[1]));
    if (!el) return;
    el.scrollIntoView({ block: "center", behavior: UH.reducedMotion() ? "auto" : "smooth" });
    el.classList.remove("flash");
    void el.offsetWidth;
    el.classList.add("flash");
  }

  render();
  focusThread();
  window.addEventListener("hashchange", focusThread);
})(window.UH);
