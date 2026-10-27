/* Home — mood check-in + featured articles + recent posts (shared data) */
"use strict";

(function (UH) {
  const MOOD_RESPONSES = {
    great: {
      title: "I'm glad you're having a great day!",
      text: "Keep taking care of yourself, and remember to cherish even the smallest of good moments.",
      links: [
        { label: "Self-Care tips", icon: "self-care.svg", href: "self-care.html" },
        { label: "Positive Articles", icon: "learn.svg", href: "learn.html#category/Wellness" },
        { label: "Encourage Someone", icon: "community.svg", href: "peer-support.html" }
      ]
    },
    good: {
      title: "It’s nice to hear you’re doing well",
      text: "Taking a moment to check in with yourself is already a healthy habit.",
      single: true,
      links: [
        { label: "Daily Reflection", icon: "self-care.svg", href: "self-care.html#journal" },
        { label: "Wellness Articles", icon: "learn.svg", href: "learn.html#category/Wellness" }
      ]
    },
    okay: {
      title: "It’s okay to have an “okay” day",
      text: "Not everyday has to be amazing. Just remember to take care of yourself.",
      links: [
        { label: "Stress Management", icon: "learn.svg", href: "learn.html#category/Stress" },
        { label: "Self-Care Tips", icon: "self-care.svg", href: "self-care.html" },
        { label: "Breathing Exercises", icon: "self-care.svg", href: "self-care.html#exercises" }
      ]
    },
    stressed: {
      title: "I’m sorry things feel stressful right now",
      text: "Try taking a short break, drinking some water, or practicing a quick breathing exercise.",
      links: [
        { label: "Breathing Exercises", icon: "self-care.svg", href: "self-care.html#exercises" },
        { label: "Share Experience", icon: "community.svg", href: "peer-support.html" },
        { label: "Managing Stress", icon: "learn.svg", href: "learn.html#category/Stress" },
        { label: "Peer Support", icon: "get-help.svg", href: "peer-support.html" }
      ]
    },
    sad: {
      title: "I'm sorry you're feeling this way today.",
      text: "You don't have to go through difficult moments alone.",
      links: [
        { label: "Professional Support", icon: "get-help.svg", href: "#", wip: true },
        { label: "Self-Care Tips", icon: "self-care.svg", href: "self-care.html" },
        { label: "Peer Support", icon: "get-help.svg", href: "peer-support.html" }
      ]
    }
  };

  function initMood() {
    const pick = document.getElementById("moodPick");
    const response = document.getElementById("moodResponse");
    const confirmButton = document.getElementById("moodConfirm");
    const doneButton = document.getElementById("moodDone");
    const options = document.querySelectorAll(".mood-option");
    let selected = null;

    options.forEach((option) => {
      option.addEventListener("click", () => {
        selected = option.dataset.mood;
        options.forEach((other) => {
          other.classList.toggle("selected", other === option);
          other.setAttribute("aria-pressed", String(other === option));
        });
        confirmButton.disabled = false;
      });
    });

    confirmButton.addEventListener("click", () => {
      const data = MOOD_RESPONSES[selected];
      if (!data) return;

      document.getElementById("moodResponseTitle").textContent = data.title;
      document.getElementById("moodResponseText").textContent = data.text;

      const links = document.getElementById("moodLinks");
      links.className = "mood-links" + (data.single ? " single" : "");
      links.innerHTML = data.links.map((item) =>
        `<a class="mood-link" href="${item.href}"${item.wip ? " data-wip" : ""}>
           <img src="assets/icons/${item.icon}" alt="">${UH.esc(item.label)}</a>`).join("");

      pick.hidden = true;
      response.hidden = false;
      response.querySelector("h2").setAttribute("tabindex", "-1");
      response.querySelector("h2").focus({ preventScroll: true });
    });

    doneButton.addEventListener("click", () => {
      response.hidden = true;
      pick.hidden = false;
      selected = null;
      options.forEach((option) => { option.classList.remove("selected"); option.setAttribute("aria-pressed", "false"); });
      confirmButton.disabled = true;
    });
  }

  function clock(min) {
    return `<span class="meta-item"><img src="assets/icons/clock.png" alt="">${min} min read</span>`;
  }

  function renderArticles() {
    const holder = document.getElementById("homeArticles");
    const featured = UH.featuredArticleIds
      .map((id) => UH.articles.find((a) => a.id === id))
      .filter(Boolean);

    holder.innerHTML = featured.map((a) => `
      <a class="media-card media-card--h media-card--flat" href="learn.html#article/${a.id}">
        <span class="media-media"><img src="assets/images/Thumbnail.png" alt=""></span>
        <span class="media-body">
          <span class="meta"><span class="pill" data-category="${a.category}">${UH.esc(a.category)}</span>${clock(a.readTime)}</span>
          <span class="media-title">${UH.esc(a.title)}</span>
          <span class="media-desc clamp-2">${UH.esc(a.deck)}</span>
        </span>
      </a>`).join("");
  }

  function tagLabel(key) {
    const tag = UH.threadTags.find((t) => t.key === key);
    return tag ? tag.label : key;
  }

  function renderPosts() {
    const holder = document.getElementById("homePosts");
    holder.innerHTML = UH.threads.slice(0, 3).map((t) => {
      const label = tagLabel(t.tags[0]);
      return `
      <a class="post-card" href="peer-support.html#thread-${t.id}">
        <div class="post-top">
          <img class="post-avatar" src="assets/icons/avatar.svg" alt="">
          <span class="post-user">Anonymous</span>
          <span class="pill" data-category="${UH.esc(label)}">${UH.esc(label)}</span>
          <span class="post-more" aria-hidden="true">•••</span>
        </div>
        <h3>${UH.esc(t.title)}</h3>
        <p class="clamp-2">${UH.esc(t.excerpt)}</p>
        <div class="post-foot">
          <span><img src="assets/icons/like.svg" alt="">${t.likes}</span>
          <span><img src="assets/icons/comment.svg" alt="">${t.replies}</span>
          <span><img src="assets/icons/share.svg" alt=""></span>
          <time>${UH.esc(t.ago)}</time>
        </div>
      </a>`;
    }).join("");
  }

  initMood();
  renderArticles();
  renderPosts();
})(window.UH);
