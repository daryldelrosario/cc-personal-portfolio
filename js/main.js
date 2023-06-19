const menuLinks = document.querySelectorAll("#hamburger-nav .menu-links a");
const hamburgerIcon = document.querySelector(".hamburger-icon");

const thisYear = new Date().getFullYear();
const yearSpan = document.querySelector("#year-now");

// JAVASCRIPT INTERACTIVITY TASK DOM ELEMENTS
const frontFace = document.getElementById("front-face");
const sideFace = document.getElementById("side-face");

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

frontFace.addEventListener("mouseover", function() {
    fadeImage(frontFace, "./assets/img/daryl_front-profile.png");
});

frontFace.addEventListener("mouseout", function() {
    fadeImage(frontFace, "./assets/img/profile-pic.png");
});

sideFace.addEventListener("mouseover", function() {
    fadeImage(sideFace, "./assets/img/daryl_side-profile.png");
});

sideFace.addEventListener("mouseout", function() {
    fadeImage(sideFace, "./assets/img/about-pic.png");
})

function fadeImage(imageElement, newSrc) {
    let opacity = 1;

    const fadeOutEffect = setInterval(function() {
        if (opacity > 0) {
            opacity -= 0.1;
            imageElement.style.opacity = opacity;
        } else {
            clearInterval(fadeOutEffect);
            imageElement.src = newSrc;
            opacity = 1;
            fadeIn();
        }
    }, 15);

    function fadeIn() {
        opacity = 0;
        imageElement.style.opacity = opacity;
        const fadeInEffect = setInterval(function() {
            if(opacity < 1) {
                opacity += 0.1;
                imageElement.style.opacity = opacity;
            } else {
                clearInterval(fadeInEffect);
            }
        }, 15);
    }
}

