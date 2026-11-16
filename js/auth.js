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

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const okUser = setError(username, username.value.trim() ? "" : "Enter your username or email.");
    const okPass = setError(password, password.value ? "" : "Enter your password.");

    if (okUser && okPass) {
      window.location.href = HOME_PAGE;
    }
  });

  document.getElementById("guestLogin").addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = HOME_PAGE;
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