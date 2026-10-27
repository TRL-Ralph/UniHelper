/* Login — front-end validation + demo session (no real authentication yet) */
"use strict";

(function (UH) {
  const form = document.getElementById("loginForm");
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const usernameError = document.getElementById("usernameError");
  const passwordError = document.getElementById("passwordError");
  const message = document.getElementById("formMessage");
  const toggle = document.getElementById("togglePassword");
  const guest = document.getElementById("guestLogin");

  function setError(input, el, text) {
    el.textContent = text;
    input.closest(".field-wrap").classList.toggle("has-error", Boolean(text));
    input.setAttribute("aria-invalid", text ? "true" : "false");
  }

  function say(text, kind) {
    message.textContent = text;
    message.className = "form-message" + (kind ? " " + kind : "");
  }

  function validateUsername() {
    const value = username.value.trim();
    let text = "";
    if (!value) text = "Enter your username or email.";
    else if (value.includes("@") && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) text = "Enter a valid email address, or use your username.";
    setError(username, usernameError, text);
    return !text;
  }

  function validatePassword() {
    const text = password.value ? "" : "Enter your password.";
    setError(password, passwordError, text);
    return !text;
  }

  function displayName(value) {
    const base = value.split("@")[0].replace(/[._-]+/g, " ").trim();
    return base ? base.replace(/\b\w/g, (c) => c.toUpperCase()) : "Student";
  }

  function enter(session) {
    UH.session.set(session);
    say(session.type === "guest" ? "Continuing as guest…" : "Welcome back! Taking you home…", "success");
    setTimeout(() => { window.location.href = "home.html"; }, 600);
  }

  toggle.addEventListener("click", () => {
    const show = password.type === "password";
    password.type = show ? "text" : "password";
    toggle.setAttribute("aria-pressed", String(show));
    toggle.setAttribute("aria-label", show ? "Hide password" : "Show password");
  });

  username.addEventListener("input", () => { if (username.getAttribute("aria-invalid") === "true") validateUsername(); say(""); });
  password.addEventListener("input", () => { if (password.getAttribute("aria-invalid") === "true") validatePassword(); say(""); });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    say("");
    const okUser = validateUsername();
    const okPass = validatePassword();
    if (!okUser) { username.focus(); return; }
    if (!okPass) { password.focus(); return; }
    enter({ type: "user", name: displayName(username.value.trim()) });
  });

  guest.addEventListener("click", () => enter({ type: "guest", name: "Guest" }));

  // already signed in? offer a shortcut instead of a blank form
  const existing = UH.session.get();
  if (existing) {
    say(`You’re signed in as ${existing.name}. `, "success");
    const link = document.createElement("a");
    link.href = "home.html";
    link.textContent = "Continue to Home";
    message.appendChild(link);
  }
})(window.UH);
