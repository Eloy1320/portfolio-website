const collapseTriggers = document.querySelectorAll(
  ".navbar-nav .nav-link:not(.dropdown-toggle), .navbar-nav .dropdown-item[data-change-language]",
);
const menuToggle = document.getElementById("navbarNav");
const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });

collapseTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    if (window.getComputedStyle(menuToggle).display !== "none") {
      bsCollapse.hide();
    }
  });
});
