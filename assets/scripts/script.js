document.getElementById("y").textContent = new Date().getFullYear();

// Theme Toggle
const themeToggleBtn = document.getElementById("theme-toggle");
const htmlElement = document.documentElement;

// Check for saved user preference, if any, on load of the website
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  htmlElement.classList.add("dark");
} else {
  htmlElement.classList.remove("dark");
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    htmlElement.classList.toggle("dark");

    if (htmlElement.classList.contains("dark")) {
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
    }
  });
}

// Scroll Reveal Animation
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    root: null,
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  }
);

revealElements.forEach((el) => revealObserver.observe(el));

// Spotlight Effect
const cardsContainer = document.getElementById("cards-container");
const cards = document.querySelectorAll(".spotlight-card");

if (cardsContainer) {
  cardsContainer.onmousemove = (e) => {
    for (const card of cards) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };
}

// Parallax Effect
document.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth - e.pageX * 2) / 100;
  const y = (window.innerHeight - e.pageY * 2) / 100;

  const grid = document.querySelector(".bg-grid-pattern");
  if (grid) {
    grid.style.transform = `translate(${x}px, ${y}px)`;
  }
});

// Text Scramble Effect
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelectorAll("[data-value]").forEach((element) => {
  element.onmouseover = (event) => {
    let iteration = 0;

    clearInterval(event.target.interval);

    event.target.interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(event.target.interval);
      }

      iteration += 1 / 3;
    }, 30);
  };
});
