const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");
const themeButton = document.getElementById("themeButton");
const searchButton = document.getElementById("searchButton");
const siteSearch = document.getElementById("siteSearch");
const searchInput = document.getElementById("searchInput");
const searchClose = document.getElementById("searchClose");
const searchMessage = document.getElementById("searchMessage");
const navLinks = document.querySelectorAll(".main-nav a");
const sections = document.querySelectorAll("main section[id]");
const currentYear = document.getElementById("currentYear");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

menuButton.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-theme");
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  const theme = document.body.classList.contains("dark-theme") ? "dark" : "light";
  localStorage.setItem("theme", theme);
});

function openSearch() {
  siteSearch.classList.add("open");
  searchButton.setAttribute("aria-expanded", "true");
  window.setTimeout(() => searchInput.focus(), 50);
}

function closeSearch() {
  siteSearch.classList.remove("open");
  searchButton.setAttribute("aria-expanded", "false");
  searchMessage.textContent = "";
}

searchButton.addEventListener("click", () => {
  if (siteSearch.classList.contains("open")) {
    closeSearch();
  } else {
    openSearch();
  }
});

searchClose.addEventListener("click", closeSearch);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeSearch();
});

siteSearch.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = searchInput.value.trim().toLowerCase();

  if (!query) {
    searchMessage.textContent = "Enter a word to search.";
    return;
  }

  const searchableElements = Array.from(
    document.querySelectorAll("main section, main article, main h2, main h3, main p, main li")
  );

  const match = searchableElements.find((element) =>
    element.textContent.toLowerCase().includes(query)
  );

  if (!match) {
    searchMessage.textContent = `No result found for “${searchInput.value.trim()}”.`;
    return;
  }

  const target = match.closest("article, section") || match;
  target.scrollIntoView({ behavior: "smooth", block: "center" });
  target.classList.remove("search-hit");
  void target.offsetWidth;
  target.classList.add("search-hit");
  searchMessage.textContent = `Showing the first result for “${searchInput.value.trim()}”.`;
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${entry.target.id}`
        );
      });
    });
  },
  {
    rootMargin: "-35% 0px -55% 0px",
    threshold: 0
  }
);

sections.forEach((section) => observer.observe(section));
