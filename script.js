// ================= LOADER =================
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (!loader) return;

  loader.classList.add("fade-out");
  setTimeout(() => {
    loader.style.display = "none";
  }, 500);
});

// ================= DOM READY =================
document.addEventListener("DOMContentLoaded", () => {

  // ---------- CONTACT FORM ----------
  const contactForm = document.getElementById("contactForm");
  const formMsg = document.getElementById("formMsg");

  if (contactForm && formMsg) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name")?.value.trim();
      const email = document.getElementById("email")?.value.trim();
      const message = document.getElementById("message")?.value.trim();

      if (!name || !email || !message) {
        formMsg.textContent = "All fields are required.";
        formMsg.style.color = "red";
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        formMsg.textContent = "Please enter a valid email address.";
        formMsg.style.color = "red";
        return;
      }

      formMsg.textContent = "Message sent successfully! (Demo mode)";
      formMsg.style.color = "green";
      contactForm.reset();
    });
  }

  // ---------- THEME TOGGLE ----------
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.textContent = document.body.classList.contains("dark") ? "🌞" : "🌙";

    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      themeToggle.textContent = document.body.classList.contains("dark") ? "🌞" : "🌙";
    });
  }

  // ---------- MOBILE NAV ----------
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.querySelector(".nav");

  if (navToggle && navMenu) {

    document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("nav-toggle").checked = false;
  });
});

  }

});
