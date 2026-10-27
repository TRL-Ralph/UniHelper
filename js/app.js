/* UniHelper — shared app shell
   Builds the header, sidebar, footer and the "Under Construction" popup once,
   so every page gets the same navigation and behaviour. Also owns the demo
   session (login / guest) used by the header and the Login page. */
"use strict";

window.UH = window.UH || {};

(function (UH) {
  const body = document.body;
  const PAGE = body.dataset.page || "";

  /* ---------- helpers --------------------------------------------------- */
  UH.esc = (value) =>
    String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  UH.reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  UH.scrollToTop = () => window.scrollTo({ top: 0, behavior: UH.reducedMotion() ? "auto" : "smooth" });

  /* ---------- demo session (front-end only) ----------------------------- */
  const SESSION_KEY = "unihelper.session";
  UH.session = {
    get() {
      try { return JSON.parse(localStorage.getItem(SESSION_KEY)); } catch (e) { return null; }
    },
    set(session) {
      try { localStorage.setItem(SESSION_KEY, JSON.stringify(session)); } catch (e) { /* storage blocked */ }
    },
    clear() {
      try { localStorage.removeItem(SESSION_KEY); } catch (e) { /* storage blocked */ }
    }
  };

  /* ---------- toast ----------------------------------------------------- */
  let toastEl, toastTimer;
  UH.toast = (message) => {
    if (!toastEl) {
      toastEl = document.createElement("div");
      toastEl.className = "toast";
      toastEl.setAttribute("role", "status");
      toastEl.setAttribute("aria-live", "polite");
      body.appendChild(toastEl);
    }
    toastEl.textContent = message;
    toastEl.classList.add("visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("visible"), 2600);
  };

  /* ---------- "Under Construction" popup -------------------------------- */
  let wipModal, wipBack, wipOpener;

  function buildWip() {
    wipModal = document.createElement("div");
    wipModal.className = "wip-backdrop";
    wipModal.id = "wipModal";
    wipModal.innerHTML = `
      <div class="wip-box" role="dialog" aria-modal="true" aria-labelledby="wipTitle">
        <h2 id="wipTitle">Under Construction</h2>
        <div class="wip-text">
          <p>Sorry! This feature isn’t available in the prototype just yet.</p>
          <p>We are still helping the team get everything ready, so this part of UniHelper is still under development.</p>
          <p>Thank you for your patience! (╥﹏╥)<br>- Umi</p>
        </div>
        <button class="btn wip-back" id="wipBack" type="button">Back</button>
        <img class="wip-mascot" src="assets/images/mascot.png" alt="">
      </div>`;
    body.appendChild(wipModal);
    wipBack = wipModal.querySelector("#wipBack");

    wipBack.addEventListener("click", UH.closeWip);
    wipModal.addEventListener("click", (e) => { if (e.target === wipModal) UH.closeWip(); });
  }

  UH.openWip = (event) => {
    if (event && event.preventDefault) event.preventDefault();
    wipOpener = document.activeElement;
    wipModal.classList.add("open");
    wipBack.focus();
  };

  UH.closeWip = () => {
    if (!wipModal.classList.contains("open")) return;
    wipModal.classList.remove("open");
    if (wipOpener && wipOpener.focus) wipOpener.focus();
  };

  // Any element with data-wip opens the popup — no per-page wiring needed.
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-wip]");
    if (trigger) UH.openWip(e);
  });

  /* ---------- shell ----------------------------------------------------- */
  const NAV = [
    { key: "home", label: "Home", href: "home.html", icon: "home.svg" },
    { key: "community", label: "Community", href: null, icon: "community.svg" },
    { key: "learn", label: "Learn", href: "learn.html", icon: "learn.svg" },
    { key: "help", label: "Get Help", href: "get-help.html", icon: "get-help.svg" },
    { key: "selfcare", label: "Self-Care", href: "self-care.html", icon: "self-care.svg" },
    { key: "settings", label: "Settings", href: "settings.html", icon: "settings.svg" }
  ];

  function authMarkup(prefix) {
    const session = UH.session.get();
    if (session) {
      return `
        <span class="user-chip"><img src="assets/icons/avatar.svg" alt=""><span>${UH.esc(session.name)}</span></span>
        ${session.type === "guest"
          ? `<a class="topbar-link" href="login.html">Log In</a>`
          : `<button class="topbar-link" type="button" data-action="logout" style="background:none;border:0;padding:0;font-family:inherit">Log Out</button>`}`;
    }
    return `
      <a class="topbar-link" href="login.html">Log In</a>
      <a class="btn btn-sm" href="#" data-wip>Sign Up</a>`;
  }

  function buildShell() {
    const header = document.createElement("header");
    header.className = "topbar";
    header.innerHTML = `
      <img class="topbar-leaf-left" src="assets/icons/leaf-left.png" alt="">
      <button class="menu-toggle" id="menuToggle" type="button" aria-label="Open navigation menu" aria-expanded="false" aria-controls="sidebar">
        <span></span><span></span><span></span>
      </button>
      <a class="brand" href="home.html" aria-label="UniHelper home">
        <img class="brand-logo" src="assets/images/logo.png" alt="">
        <span class="brand-copy">
          <span class="brand-name">UniHelper</span>
          <span class="brand-tag">You’re not alone. UMak is with you.</span>
        </span>
      </a>
      <img class="topbar-leaf" src="assets/icons/bell-leaf.svg" alt="" aria-hidden="true">
      <div class="topbar-actions">
        <button class="icon-btn" type="button" aria-label="Notifications" data-wip><img src="assets/icons/bell.svg" alt=""></button>
        <span class="topbar-divider" aria-hidden="true"></span>
        <div class="topbar-actions" id="topbarAuth" style="gap:18px">${authMarkup()}</div>
      </div>`;

    const navLinks = NAV.map((item) => {
      const active = item.key === PAGE;
      const attrs = item.href ? `href="${item.href}"` : `href="#" data-wip`;
      return `<a class="nav-item nav-${item.key}${active ? " active" : ""}" ${attrs}${active ? ' aria-current="page"' : ""}>
        <img src="assets/icons/${item.icon}" alt=""><span>${item.label}</span></a>`;
    }).join("");

    const aside = document.createElement("aside");
    aside.className = "sidebar";
    aside.id = "sidebar";
    aside.setAttribute("aria-label", "Main navigation");
    aside.innerHTML = `
      <nav class="side-nav">${navLinks}</nav>
      <div class="sidebar-auth" id="sidebarAuth">${authMarkup()}</div>
      <img class="sidebar-decoration" src="assets/icons/bush.svg" alt="" aria-hidden="true">`;

    const scrim = document.createElement("div");
    scrim.className = "sidebar-scrim";
    scrim.id = "sidebarScrim";

    const skip = document.createElement("a");
    skip.className = "skip-link";
    skip.href = "#main";
    skip.textContent = "Skip to content";

    body.prepend(skip, header, aside, scrim);

    const main = document.getElementById("main");
    if (main) {
      const footer = document.createElement("footer");
      footer.className = "site-footer";
      footer.innerHTML = `<p>UniHelper · UMak is with you.</p>`;
      main.appendChild(footer);
    }

    wireSidebar();
    wireAuth();
  }

  function wireSidebar() {
    const toggle = document.getElementById("menuToggle");
    const scrim = document.getElementById("sidebarScrim");
    const isDrawer = () => window.matchMedia("(max-width: 900px)").matches;

    function setOpen(open) {
      body.classList.toggle("sidebar-open", open);
      body.classList.toggle("no-scroll", open && isDrawer());
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    }

    toggle.addEventListener("click", () => setOpen(!body.classList.contains("sidebar-open")));
    scrim.addEventListener("click", () => setOpen(false));
    document.querySelectorAll(".nav-item").forEach((link) =>
      link.addEventListener("click", () => { if (isDrawer()) setOpen(false); })
    );
    window.addEventListener("resize", () => { if (!isDrawer()) setOpen(false); });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && body.classList.contains("sidebar-open")) { setOpen(false); toggle.focus(); }
    });
  }

  function wireAuth() {
    document.addEventListener("click", (e) => {
      if (e.target.closest("[data-action='logout']")) {
        UH.session.clear();
        window.location.href = "login.html";
      }
    });
  }

  /* ---------- global keys ------------------------------------------------ */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") UH.closeWip();
    // keep keyboard focus inside the popup while it is open
    if (e.key === "Tab" && wipModal.classList.contains("open")) {
      e.preventDefault();
      wipBack.focus();
    }
  });

  document.addEventListener("dragstart", (e) => { if (e.target.matches && e.target.matches("img")) e.preventDefault(); });

  /* ---------- go ---------------------------------------------------------- */
  buildWip();
  if (body.dataset.layout !== "bare") buildShell();
})(window.UH);
