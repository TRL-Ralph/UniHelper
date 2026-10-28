/* Learn — category filters, article cards, article reader, hash routing
   Routes:  learn.html                    all articles
            learn.html#category/Stress    filtered list
            learn.html#article/<id>       reader                        */
"use strict";

(function (UH) {
  const articles = UH.articles;
  const featuredGrid = document.getElementById("featuredGrid");
  const featuredHeading = document.getElementById("featuredHeading");
  const libraryView = document.getElementById("libraryView");
  const articleView = document.getElementById("articleView");
  const heading = document.getElementById("articlesHeading");
  const grid = document.getElementById("articleGrid");
  const resultCount = document.getElementById("resultCount");
  const emptyState = document.getElementById("emptyState");
  const hero = document.getElementById("learnHero");
  const filterRow = document.getElementById("filterRow");

  const CATEGORIES = ["All", ...UH.articleCategories];
  const BASE_TITLE = document.title;
  let activeCategory = "All";

  const GRID_ICON = `<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="3" width="8" height="8" rx="1.5"/><rect x="3" y="13" width="8" height="8" rx="1.5"/><rect x="13" y="13" width="8" height="8" rx="1.5"/></svg>`;
  const clock = (min) => `<span class="meta-item"><img src="assets/icons/clock.png" alt="">${min} min read</span>`;

  function renderFilters() {
    filterRow.innerHTML = CATEGORIES.map((name) =>
      `<button class="chip" type="button" data-category="${name}" aria-pressed="false">${name === "All" ? GRID_ICON : ""}${name}</button>`
    ).join("");
  }

  function renderFeatured() {
    const featured = UH.featuredArticleIds.map((id) => articles.find((a) => a.id === id)).filter(Boolean);
    featuredGrid.innerHTML = featured.map((a) => `
      <a class="media-card media-card--v" href="#article/${a.id}" aria-label="Read ${UH.esc(a.title)}">
        <span class="media-media"><img src="assets/images/article-placeholder.jpg" alt="">
          <span class="pill" data-category="${a.category}">${UH.esc(a.category)}</span></span>
        <span class="media-body">
          <span class="media-title">${UH.esc(a.title)}</span>
          <span class="media-desc clamp-3">${UH.esc(a.deck)}</span>
          <span class="meta">${clock(a.readTime)}</span>
        </span>
      </a>`).join("");
    const show = activeCategory === "All";
    featuredGrid.hidden = !show;
    featuredHeading.hidden = !show;
  }

  function cardMarkup(a) {
    return `
      <a class="media-card media-card--h" href="#article/${a.id}" aria-label="Read ${UH.esc(a.title)}">
        <span class="media-media"><img src="assets/images/article-placeholder.jpg" alt=""></span>
        <span class="media-body">
          <span class="pill" data-category="${a.category}">${UH.esc(a.category)}</span>
          <span class="media-title clamp-3">${UH.esc(a.title)}</span>
          <span class="meta">${clock(a.readTime)}</span>
        </span>
      </a>`;
  }

  function renderCards() {
    const visible = activeCategory === "All" ? articles : articles.filter((a) => a.category === activeCategory);
    grid.innerHTML = visible.map(cardMarkup).join("");
    resultCount.textContent = `${visible.length} ${visible.length === 1 ? "article" : "articles"}`;
    emptyState.hidden = visible.length !== 0;
  }

  function setCategory(category, { updateHash = true } = {}) {
    activeCategory = CATEGORIES.includes(category) ? category : "All";
    filterRow.querySelectorAll(".chip").forEach((button) => {
      const selected = button.dataset.category === activeCategory;
      button.classList.toggle("selected", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    heading.textContent = activeCategory === "All" ? "More Articles" : `${activeCategory} Articles`;
    renderFeatured();
    renderCards();
    if (updateHash) {
      const next = activeCategory === "All" ? location.pathname + location.search : `#category/${activeCategory}`;
      history.replaceState(null, "", next);
    }
  }

  function showLibrary() {
    articleView.hidden = true;
    libraryView.hidden = false;
    hero.hidden = false;
    document.title = BASE_TITLE;
  }

  function showArticle(id) {
    const article = articles.find((a) => a.id === id);
    if (!article) { showLibrary(); setCategory("All", { updateHash: false }); return; }

    libraryView.hidden = true;
    hero.hidden = true;
    articleView.hidden = false;
    document.title = `${article.title} | UniHelper`;

    const related = articles.filter((a) => a.category === article.category && a.id !== article.id).slice(0, 2);
    const sections = article.sections.map(([title, text]) =>
      `<section><h2>${UH.esc(title)}</h2><p>${UH.esc(text)}</p></section>`).join("");

    articleView.innerHTML = `
      <a class="btn btn-soft btn-sm article-back" href="#learn"><span aria-hidden="true">←</span> Back to Articles</a>
      <div class="article-meta">
        <span class="pill" data-category="${article.category}">${UH.esc(article.category)}</span>
        <span>${article.readTime} min read</span><span>UniHelper Learn</span>
      </div>
      <h1 class="article-title">${UH.esc(article.title)}</h1>
      <p class="article-deck">${UH.esc(article.deck)}</p>
      <img class="article-cover" src="assets/images/article-placeholder.jpg" alt="">
      <div class="article-body">
        ${sections}
        <div class="article-callout"><strong>A gentle reminder:</strong> You deserve support, and you do not have to figure everything out at once. Take what feels useful from this article and move at your own pace.</div>
        <p class="article-disclaimer">This article is for general educational purposes only. It is not a diagnosis or a substitute for individualized advice from a qualified mental health professional. If you are concerned about your well-being, consider speaking with a trusted professional or support person.</p>
      </div>
      ${related.length ? `<aside class="related"><div class="section-head"><h2>More in ${UH.esc(article.category)}</h2></div>
        <div class="card-grid">${related.map(cardMarkup).join("")}</div></aside>` : ""}`;

    UH.scrollToTop();
  }

  function route() {
    const hash = decodeURIComponent(location.hash || "");
    const article = hash.match(/^#article\/(.+)$/);
    const category = hash.match(/^#category\/(.+)$/);

    if (article) { showArticle(article[1]); return; }
    showLibrary();
    setCategory(category ? category[1] : "All", { updateHash: false });
  }

  filterRow.addEventListener("click", (e) => {
    const button = e.target.closest(".chip");
    if (button) setCategory(button.dataset.category);
  });

  window.addEventListener("hashchange", route);
  renderFilters();
  route();
})(window.UH);
