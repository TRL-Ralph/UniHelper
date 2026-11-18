const HOME_PAGE = "home.html";

const wipModal = document.getElementById("wipModal");
const wipBack = document.getElementById("wipBack");

function openWip(event) {
  event.preventDefault();
  if (!wipModal) {
    return;
  }
  wipModal.classList.add("open");
  wipBack.focus();
}

function closeWip() {
  if (wipModal) {
    wipModal.classList.remove("open");
  }
}

function setError(input, text) {
  const wrap = input.closest(".field-wrap");
  const message = input.closest(".field").querySelector(".field-error");
  message.textContent = text;
  wrap.classList.toggle("has-error", Boolean(text));
  return !text;
}

const SESSION_KEY = "unihelper.session"; // same key app.js reads for the header

function saveSession(type, name) {
  try { localStorage.setItem(SESSION_KEY, JSON.stringify({ type, name })); } catch (e) { /* storage blocked */ }
}

/* Loading overlay: shown only on login / guest entry. The home page preloads in a
   hidden iframe; we leave once it has loaded AND the three messages have played once. */
const LOADING_MESSAGES = ["Loading!", "One moment!", "Almost there!"];
const LOADING_STEP_MS = 1400;
const LOADING_FAILSAFE_MS = 15000; // shortcut: stops a hung preload from trapping the user, only fires if load never finishes
let entering = false;

function enterSite() {
  if (entering) {
    return;
  }
  entering = true;

  const overlay = document.createElement("div");
  overlay.className = "loading-overlay";
  overlay.setAttribute("role", "status");
  overlay.innerHTML = `
    <div class="loading-card">
      <img src="assets/video/umi-loading.webp" alt="">
      <p class="loading-text"></p>
    </div>`;
  const text = overlay.querySelector(".loading-text");
  const page = document.querySelector(".auth-page");
  page.inert = true;
  document.body.append(overlay);
  document.body.classList.add("is-loading");
  requestAnimationFrame(() => overlay.classList.add("show"));

  const setText = (message) => {
    text.classList.remove("swap");
    void text.offsetWidth; // restart the entrance animation
    text.textContent = message;
    text.classList.add("swap");
  };

  const played = new Promise((resolve) => {
    let i = 0;
    setText(LOADING_MESSAGES[0]);
    const timer = setInterval(() => {
      i += 1;
      setText(LOADING_MESSAGES[i]);
      if (i === LOADING_MESSAGES.length - 1) {
        clearInterval(timer);
        setTimeout(resolve, LOADING_STEP_MS / 2); // let the last message be seen
      }
    }, LOADING_STEP_MS);
  });

  const ready = new Promise((resolve) => {
    const frame = document.createElement("iframe");
    frame.src = HOME_PAGE;
    frame.tabIndex = -1;
    frame.setAttribute("aria-hidden", "true");
    frame.className = "preload-frame";
    frame.addEventListener("load", resolve, { once: true });
    document.body.append(frame);
    setTimeout(resolve, LOADING_FAILSAFE_MS);
  });

  Promise.all([played, ready]).then(() => {
    overlay.classList.remove("show");
    setTimeout(() => { window.location.href = HOME_PAGE; }, 300);
  });
}

// Back button can restore this page from cache mid-load: undo the overlay.
window.addEventListener("pageshow", (event) => {
  if (!event.persisted) {
    return;
  }
  document.querySelectorAll(".loading-overlay, .preload-frame").forEach((el) => el.remove());
  document.body.classList.remove("is-loading");
  const page = document.querySelector(".auth-page");
  if (page) {
    page.inert = false;
  }
  entering = false;
});

function initEyes() {
  document.querySelectorAll(".eye-toggle").forEach((button) => {
    const input = button.closest(".field-wrap").querySelector("input");

    button.addEventListener("click", () => {
      const show = input.type === "password";
      input.type = show ? "text" : "password";
      button.classList.toggle("shown", show);
      button.setAttribute("aria-label", show ? "Hide password" : "Show password");
    });
  });
}

function initLogin() {
  const form = document.getElementById("loginForm");
  if (!form) {
    return;
  }

  const username = document.getElementById("username");
  const password = document.getElementById("password");

  // Each field validates on its own, on every keystroke. Whitespace-only counts as empty.
  const checkUser = () => setError(username, username.value.trim() ? "" : "Please enter your username.");
  const checkPass = () => setError(password, password.value.trim() ? "" : "Please enter your password.");
  username.addEventListener("input", checkUser);
  password.addEventListener("input", checkPass);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const okUser = checkUser();
    const okPass = checkPass();

    if (okUser && okPass) {
      saveSession("user", username.value.trim());
      enterSite();
    }
  });

  document.getElementById("guestLogin").addEventListener("click", (event) => {
    event.preventDefault();
    saveSession("guest", "Guest");
    enterSite();
  });
}

function initSignup() {
  const form = document.getElementById("signupForm");
  if (!form) {
    return;
  }

  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirm = document.getElementById("confirm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const okUser = setError(username, username.value.trim() ? "" : "Enter a username.");
    const okEmail = setError(
      email,
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()) ? "" : "Enter a valid email address."
    );
    const okPass = setError(
      password,
      password.value.length >= 8 ? "" : "Use at least 8 characters."
    );
    const okConfirm = setError(
      confirm,
      confirm.value && confirm.value === password.value ? "" : "Passwords do not match."
    );

    if (okUser && okEmail && okPass && okConfirm) {
      saveSession("user", username.value.trim());
      window.location.href = HOME_PAGE;
    }
  });
}

function initWip() {
  if (!wipModal) {
    return;
  }

  document.querySelectorAll("[data-wip]").forEach((element) => {
    element.addEventListener("click", openWip);
  });

  wipBack.addEventListener("click", closeWip);

  wipModal.addEventListener("click", (event) => {
    if (event.target === wipModal) {
      closeWip();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeWip();
    }
  });
}

initEyes();
initLogin();
initSignup();
initWip();