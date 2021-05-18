const navToggle = document.querySelector(".toggle");
const navMenu = document.querySelector(".navigation");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav_hidden");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});