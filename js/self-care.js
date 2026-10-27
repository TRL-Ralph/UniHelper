/* Self-Care — format filter for exercises (same chip pattern as Learn) */
"use strict";

(function () {
  const row = document.getElementById("typeFilter");
  const grid = document.getElementById("exerciseGrid");
  const count = document.getElementById("exerciseCount");
  const cards = [...grid.querySelectorAll(".media-card")];

  function apply(type) {
    let shown = 0;
    cards.forEach((card) => {
      const match = type === "all" || card.dataset.type === type;
      card.hidden = !match;
      if (match) shown += 1;
    });
    row.querySelectorAll(".chip").forEach((chip) => {
      const on = chip.dataset.type === type;
      chip.classList.toggle("selected", on);
      chip.setAttribute("aria-pressed", String(on));
    });
    count.textContent = `${shown} ${shown === 1 ? "exercise" : "exercises"}`;
  }

  row.addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (chip) apply(chip.dataset.type);
  });

  apply("all");
})();
