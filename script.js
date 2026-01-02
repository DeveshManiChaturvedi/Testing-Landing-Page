document.addEventListener("DOMContentLoaded", () => {
  // =======================
  // 1. PAGE LOADER
  // =======================
  const loader = document.getElementById("loader");
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = "0";
      setTimeout(() => (loader.style.display = "none"), 500);
    }, 800);
  }

  // =======================
  // 2. DARK/LIGHT THEME TOGGLE
  // =======================
  const themeToggle = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.classList.toggle("dark", savedTheme === "dark");
  if (themeToggle) themeToggle.textContent = savedTheme === "dark" ? "🌞" : "🌙";

  themeToggle?.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark");
    if (themeToggle) themeToggle.textContent = isDark ? "🌞" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  // =======================
  // 3. 3D TILT EFFECT
  // =======================
  const tiltElements = document.querySelectorAll("[data-tilt]");
  const isTouch = "ontouchstart" in window;

  if (!isTouch) {
    tiltElements.forEach((el) => {
      const resetTransform = () => {
        el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
        el.style.transition = "transform 0.5s ease";
      };

      el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -10;
        const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 10;
        el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      });

      el.addEventListener("mouseenter", () => (el.style.transition = "transform 0.1s ease"));
      el.addEventListener("mouseleave", resetTransform);
    });
  }

  // =======================
  // 4. SCROLL REVEAL
  // =======================
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".section").forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease-out";
    observer.observe(section);
  });

  // =======================
  // 5. CLOSE MOBILE MENU ON LINK CLICK
  // =======================
  const navLinks = document.querySelectorAll(".nav a");
  const navCheckbox = document.getElementById("nav-toggle");

  navLinks.forEach((link) =>
    link.addEventListener("click", () => {
      if (navCheckbox) navCheckbox.checked = false;
    })
  );

  // =======================
  // 6. CONTACT FORM MESSAGE
  // =======================
  const contactForm = document.getElementById("contactForm");
  const formMsg = document.getElementById("formMsg");

  if (contactForm && formMsg) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Example: success message
      formMsg.textContent = "Message sent successfully! ✉️";
      formMsg.classList.remove("error");
      formMsg.classList.add("success");

      // Clear after 5s
      setTimeout(() => {
        formMsg.textContent = "";
        formMsg.classList.remove("success");
      }, 5000);

      // Add real AJAX/email logic here if needed
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  // =======================
  // 1. PAGE LOADER
  // =======================
  const loader = document.getElementById("loader");
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = "0";
      setTimeout(() => (loader.style.display = "none"), 500);
    }, 800);
  }

  // =======================
  // 2. DARK/LIGHT THEME TOGGLE
  // =======================
  const themeToggle = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.classList.toggle("dark", savedTheme === "dark");
  if (themeToggle) themeToggle.textContent = savedTheme === "dark" ? "🌞" : "🌙";

  themeToggle?.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark");
    if (themeToggle) themeToggle.textContent = isDark ? "🌞" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  // =======================
  // 3. 3D TILT EFFECT
  // =======================
  const tiltElements = document.querySelectorAll("[data-tilt]");
  const isTouch = "ontouchstart" in window;

  if (!isTouch) {
    tiltElements.forEach((el) => {
      const resetTransform = () => {
        el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
        el.style.transition = "transform 0.5s ease";
      };

      el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -10;
        const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 10;
        el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      });

      el.addEventListener("mouseenter", () => (el.style.transition = "transform 0.1s ease"));
      el.addEventListener("mouseleave", resetTransform);
    });
  }

  // =======================
  // 4. SCROLL REVEAL
  // =======================
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".section").forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease-out";
    observer.observe(section);
  });

  // =======================
  // 5. CLOSE MOBILE MENU ON LINK CLICK
  // =======================
  const navLinks = document.querySelectorAll(".nav a");
  const navCheckbox = document.getElementById("nav-toggle");

  navLinks.forEach((link) =>
    link.addEventListener("click", () => {
      if (navCheckbox) navCheckbox.checked = false;
    })
  );

  // =======================
  // 6. CONTACT FORM MESSAGE
  // =======================
  const contactForm = document.getElementById("contactForm");
  const formMsg = document.getElementById("formMsg");

  if (contactForm && formMsg) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Example: success message
      formMsg.textContent = "Message sent successfully! ✉️";
      formMsg.classList.remove("error");
      formMsg.classList.add("success");

      // Clear after 5s
      setTimeout(() => {
        formMsg.textContent = "";
        formMsg.classList.remove("success");
      }, 5000);

      // Add real AJAX/email logic here if needed
    });
  }
});

// ===== THEME TOGGLE =====
const themeToggle = document.getElementById("themeToggle");

// Check local storage for previous theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeToggle.textContent = "☀️"; // sun icon for dark mode
} else {
  document.body.classList.remove("dark");
  themeToggle.textContent = "🌙"; // moon icon for light mode
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeToggle.textContent = "☀️"; // sun for dark mode
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.textContent = "🌙"; // moon for light/day mode
    localStorage.setItem("theme", "light");
  }
});