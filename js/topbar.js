const mobileMenu = document.getElementById("mobile-menu");
const menuButton = document.getElementById("menu-btn");

menuButton.onclick = function () {
  if (mobileMenu.style.display !== "none") {
    mobileMenu.style.display = "none";
  } else {
    mobileMenu.style.display = "block";
  }
};