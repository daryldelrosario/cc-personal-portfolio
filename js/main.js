const menuLinks = document.querySelectorAll("#hamburger-nav .menu-links a");
const hamburgerIcon = document.querySelector(".hamburger-icon");

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