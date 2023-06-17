const menuLinks = document.querySelectorAll("#hamburger-nav .menu-links a");
const hamburgerIcon = document.querySelector(".hamburger-icon");

const thisYear = new Date().getFullYear();
const yearSpan = document.querySelector("#year-now");

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

menuLinks.forEach(function(link) {
    link.addEventListener("click", toggleMenu);
});

hamburgerIcon.addEventListener("click", toggleMenu);

yearSpan.textContent = thisYear;

