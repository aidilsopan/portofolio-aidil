/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* =========================
   CLOSE MENU AFTER CLICK
========================= */

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 80) {

            element.classList.add("active");

        }

    });

};


window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);


/* =========================
   NAVBAR SHADOW
========================= */

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.35)";

    } else {

        header.style.boxShadow = "none";

    }

});