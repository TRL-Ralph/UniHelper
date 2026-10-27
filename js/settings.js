/* Settings — scroll-spy tabs, info tooltips, prototype controls */
"use strict";

(function (UH) {
  const tabs = [...document.querySelectorAll("#settingsTabs .chip")];
  const sections = tabs.map((tab) => document.getElementById(tab.dataset.target));
  const nav = document.querySelector(".settings-nav");
  const slider = document.getElementById("soundSlider");
  const sliderValue = document.getElementById("soundValue");

  /* --- tabs scroll to their section; the active tab follows the scroll --- */
  function setActive(id) {
    tabs.forEach((tab) => {
      const on = tab.dataset.target === id;
      tab.classList.toggle("selected", on);
      tab.setAttribute("aria-pressed", String(on));
    });
  }

  let pinned = null; // a clicked tab stays active until the user scrolls by hand
  ["wheel", "touchmove", "keydown"].forEach((type) =>
    window.addEventListener(type, () => { pinned = null; }, { passive: true }));

  function updateActive() {
    if (pinned) { setActive(pinned); return; }
    const line = UH_HEADER() + nav.offsetHeight + 24;
    let current = sections[0];
    sections.forEach((section) => { if (section.getBoundingClientRect().top <= line) current = section; });
    // at the very bottom, the last section wins even if it is short
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = sections[sections.length - 1];
    setActive(current.id);
  }

  function UH_HEADER() {
    return parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 72;
  }

  tabs.forEach((tab) => tab.addEventListener("click", () => {
    pinned = tab.dataset.target;
    setActive(pinned);
    document.getElementById(tab.dataset.target).scrollIntoView({ behavior: UH.reducedMotion() ? "auto" : "smooth" });
  }));
  window.addEventListener("scroll", updateActive, { passive: true });
  window.addEventListener("resize", updateActive);
  updateActive();

  /* --- tooltips for the (i) buttons --- */
  const tooltip = document.createElement("div");
  tooltip.className = "info-tooltip";
  tooltip.setAttribute("role", "tooltip");
  document.body.appendChild(tooltip);

  function showTooltip(icon) {
    tooltip.textContent = icon.dataset.tip;
    tooltip.classList.add("visible");
    const rect = icon.getBoundingClientRect();
    const width = tooltip.offsetWidth, height = tooltip.offsetHeight;
    const left = Math.min(Math.max(8, rect.left), window.innerWidth - width - 8);
    const below = rect.bottom + 8 + height < window.innerHeight;
    tooltip.style.left = left + "px";
    tooltip.style.top = (below ? rect.bottom + 8 : rect.top - height - 8) + "px";
  }
  const hideTooltip = () => tooltip.classList.remove("visible");

  document.querySelectorAll(".info-icon").forEach((icon) => {
    icon.addEventListener("mouseenter", () => showTooltip(icon));
    icon.addEventListener("mouseleave", hideTooltip);
    icon.addEventListener("focus", () => showTooltip(icon));
    icon.addEventListener("blur", hideTooltip);
    icon.addEventListener("click", (e) => { e.stopPropagation(); showTooltip(icon); });
  });
  document.addEventListener("click", hideTooltip);
  window.addEventListener("scroll", hideTooltip, { passive: true });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") hideTooltip(); });

  /* --- prototype controls: the slider opens the popup, like the toggles --- */
  slider.addEventListener("pointerdown", UH.openWip);
  slider.addEventListener("keydown", (e) => {
    if (e.key.startsWith("Arrow") || e.key === "Home" || e.key === "End") UH.openWip(e);
  });
  slider.addEventListener("input", () => { sliderValue.textContent = slider.value + "%"; });

  /* --- registration reflects the demo session --- */
  const session = UH.session.get();
  if (session) {
    document.getElementById("registrationBody").innerHTML = session.type === "guest"
      ? `<h3>You’re browsing as a guest</h3>
         <p>Log in with your account to save your profile, preferences, and history.</p>
         <a class="btn" href="login.html">Log In / Sign In</a>`
      : `<h3>Signed in as ${UH.esc(session.name)}</h3>
         <p>Your profile, preferences, and history are saved to this account.</p>
         <button class="btn" type="button" data-action="logout">Log Out</button>`;
  }
})(window.UH);
