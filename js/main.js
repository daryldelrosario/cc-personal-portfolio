// FIREBASE CONNECTION
const firebaseConfig = {
    apiKey: "AIzaSyDtQaS74vVjO5rjdlEvzyOaVBoS7Dg_oA4",
    authDomain: "fir-frontend-2f73b.firebaseapp.com",
    databaseURL: "https://fir-frontend-2f73b-default-rtdb.firebaseio.com",
    projectId: "fir-frontend-2f73b",
    storageBucket: "fir-frontend-2f73b.appspot.com",
    messagingSenderId: "78300276106",
    appId: "1:78300276106:web:5c5ec43f2614cb2a181473"
  };

// initialise firebase
firebase.initializeApp(firebaseConfig);

// reference your database
let contactFormDB = firebase.database().ref('contact-form-html-firebase');

document.getElementById('contact-form').addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    let name = getElementVal("name");
    let email = getElementVal("email");
    let message = getElementVal("msg-content");

    console.log(name, email, message);
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}

// REGULAR

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
