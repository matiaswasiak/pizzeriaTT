const navToggle = document.querySelector(".toggle");
const navMenu = document.querySelector(".navigation");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav_hidden");
});
