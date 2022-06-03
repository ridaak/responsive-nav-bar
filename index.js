const navigationToggle = document.querySelector(".navigation__toggle");
const mobileMenu = document.querySelector(".mobile__navigation");
const mobileNavigationToggle = document.querySelector(
  ".mobile__navigation__toggle"
);

navigationToggle.addEventListener("click", () => {
  if (navigationToggle.classList.contains("active")) {
    navigationToggle.classList.remove("active");
    mobileMenu.classList.remove("mobile__active");
  } else {
    navigationToggle.classList.add("active");
    mobileMenu.classList.add("mobile__active");
  }
});

mobileNavigationToggle.addEventListener("click", () => {
  navigationToggle.classList.remove("active");
  mobileMenu.classList.remove("mobile__active");
});
