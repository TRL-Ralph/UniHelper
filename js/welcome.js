(function () {
    "use strict";

    var SEEN_KEY = "unihelper.welcomeSeen";

    function alreadySeen() {
        try { return sessionStorage.getItem(SEEN_KEY) === "1"; } catch (e) { return false; }
    }

    function markSeen() {
        try { sessionStorage.setItem(SEEN_KEY, "1"); } catch (e) { }
    }

    if (alreadySeen()) return;

    var STEPS = [
        {
            bubble: "Nice to meet you!",
            eyebrow: "WELCOME",
            title: "Hi, I’m Umi!",
            html:
                `<p class="uh-lead">I’ll be your guide around <strong>UniHelper</strong>, a friendly corner of the internet made for UMak students.</p>
         <p>Give me a minute and I’ll show you what this place is all about. It’s quick, I promise.</p>`
        },
        {
            bubble: "Let me explain!",
            eyebrow: "ABOUT THE WEBSITE",
            title: "What is UniHelper?",
            html:
                `<p>UniHelper is a mental wellness website for University of Makati students. It’s a safe, judgment-free space where you can read, reflect, connect with other students, and find support whenever school life feels heavy.</p>
         <p>Stressed about deadlines? Feeling low? Just curious about taking better care of yourself? You’re in the right place.</p>
         <div class="uh-pills">
           <span class="uh-pill uh-pill-a">Judgment-free</span>
           <span class="uh-pill uh-pill-b">Made for UMak students</span>
           <span class="uh-pill uh-pill-c">Gentle &amp; supportive</span>
         </div>`
        },
        {
            bubble: "Take a look around!",
            eyebrow: "WHAT’S INSIDE",
            title: "Four ways we can help",
            html:
                `<div class="uh-tiles">
           <div class="uh-tile uh-tile-community"><img src="assets/icons/community.svg" alt=""><div><strong>Community</strong><span>Share your story and read what other students are going through.</span></div></div>
           <div class="uh-tile uh-tile-learn"><img src="assets/icons/learn.svg" alt=""><div><strong>Learn</strong><span>Easy articles on stress, self-esteem, relationships and wellness.</span></div></div>
           <div class="uh-tile uh-tile-help"><img src="assets/icons/get-help.svg" alt=""><div><strong>Get Help</strong><span>Reach peer support or trusted professional support.</span></div></div>
           <div class="uh-tile uh-tile-care"><img src="assets/icons/self-care.svg" alt=""><div><strong>Mental Wellness</strong><span>Guided exercises and a private journal to reset your mind.</span></div></div>
         </div>`
        },
        {
            bubble: "I’m rooting for you!",
            eyebrow: "BEFORE YOU GO",
            title: "Because you matter.",
            html:
                `<p>On the Home page, tell me how you’re feeling today and I’ll point you to something that might help.</p>
         <p class="uh-careful">UniHelper is a support space, not a replacement for professional care. If things feel too heavy, please reach out to the UMak Guidance Office or someone you trust.</p>
         <p class="uh-proto">This is a prototype, so a few features are still under construction.</p>`
        }
    ];

    var overlay = document.createElement("div");
    overlay.className = "uh-welcome";
    overlay.id = "welcomeModal";
    overlay.innerHTML =
        `<div class="uh-box" role="dialog" aria-modal="true" aria-labelledby="uhTitle">
       <aside class="uh-side" aria-hidden="true">
         <span class="uh-orb uh-orb-1"></span>
         <span class="uh-orb uh-orb-2"></span>
         <span class="uh-orb uh-orb-3"></span>
         <span class="uh-spark uh-spark-1"></span>
         <span class="uh-spark uh-spark-2"></span>
         <span class="uh-spark uh-spark-3"></span>
         <div class="uh-bubble" id="uhBubble"></div>
         <img class="uh-umi" src="assets/images/umi-banner.png" alt="">
       </aside>
       <section class="uh-main">
         <button class="uh-close" type="button" aria-label="Close">&times;</button>
         <div class="uh-step" id="uhStep" aria-live="polite">
           <p class="uh-eyebrow" id="uhEyebrow"></p>
           <h2 id="uhTitle"></h2>
           <div class="uh-body" id="uhBody"></div>
         </div>
         <footer class="uh-foot">
           <div class="uh-dots" id="uhDots"></div>
           <div class="uh-nav">
             <button class="uh-btn uh-btn-ghost" id="uhBack" type="button">Back</button>
             <button class="uh-btn uh-btn-main" id="uhNext" type="button">Next</button>
           </div>
         </footer>
       </section>
     </div>`;

    var box = overlay.querySelector(".uh-box");
    var stepEl = overlay.querySelector("#uhStep");
    var eyebrowEl = overlay.querySelector("#uhEyebrow");
    var titleEl = overlay.querySelector("#uhTitle");
    var bodyEl = overlay.querySelector("#uhBody");
    var bubbleEl = overlay.querySelector("#uhBubble");
    var dotsEl = overlay.querySelector("#uhDots");
    var backBtn = overlay.querySelector("#uhBack");
    var nextBtn = overlay.querySelector("#uhNext");
    var closeBtn = overlay.querySelector(".uh-close");
    var current = 0;
    var previousOverflow = "";

    STEPS.forEach(function (step, index) {
        var dot = document.createElement("button");
        dot.type = "button";
        dot.className = "uh-dot";
        dot.setAttribute("aria-label", "Go to step " + (index + 1) + " of " + STEPS.length);
        dot.addEventListener("click", function () { show(index); });
        dotsEl.appendChild(dot);
    });

    function show(index) {
        var direction = index >= current ? "uh-from-right" : "uh-from-left";
        current = index;
        var step = STEPS[index];

        eyebrowEl.textContent = step.eyebrow;
        titleEl.textContent = step.title;
        bodyEl.innerHTML = step.html;
        bubbleEl.textContent = step.bubble;

        stepEl.classList.remove("uh-from-right", "uh-from-left");
        void stepEl.offsetWidth;
        stepEl.classList.add(direction);

        bubbleEl.classList.remove("pop");
        void bubbleEl.offsetWidth;
        bubbleEl.classList.add("pop");

        Array.prototype.forEach.call(dotsEl.children, function (dot, i) {
            dot.classList.toggle("active", i === index);
            dot.classList.toggle("done", i < index);
            if (i === index) dot.setAttribute("aria-current", "step");
            else dot.removeAttribute("aria-current");
        });

        backBtn.style.visibility = index === 0 ? "hidden" : "visible";
        nextBtn.textContent = index === STEPS.length - 1 ? "Let’s go!" : "Next";
    }

    function next() {
        if (current < STEPS.length - 1) show(current + 1);
        else close();
    }

    function back() {
        if (current > 0) show(current - 1);
    }

    function close() {
        overlay.classList.remove("open");
        document.body.style.overflow = previousOverflow;
        markSeen();
        document.removeEventListener("keydown", onKey, true);
    }

    function onKey(event) {
        if (event.key === "Escape") {
            event.stopPropagation(); // Escape must not dismiss the welcome popup
        } else if (event.key === "ArrowRight") {
            next();
        } else if (event.key === "ArrowLeft") {
            back();
        } else if (event.key === "Tab") {
            var focusable = Array.prototype.filter.call(
                box.querySelectorAll("button"),
                function (el) { return el.style.visibility !== "hidden"; }
            );
            var index = focusable.indexOf(document.activeElement);
            var target = event.shiftKey ? index - 1 : index + 1;
            if (target < 0) target = focusable.length - 1;
            if (target >= focusable.length) target = 0;
            event.preventDefault();
            focusable[target].focus();
        }
    }

    nextBtn.addEventListener("click", next);
    backBtn.addEventListener("click", back);
    closeBtn.addEventListener("click", close);
    document.body.appendChild(overlay);
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    show(0);
    overlay.classList.add("open");
    nextBtn.focus();
    document.addEventListener("keydown", onKey, true);
})();