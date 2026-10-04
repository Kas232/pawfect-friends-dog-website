/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});


/* Close mobile menu after clicking a link */

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});


/* =========================
   HEADER SCROLL EFFECT
========================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        header.style.background = "rgba(41,39,34,.96)";
        header.style.padding = "15px 0";
    } else {
        header.style.background = "transparent";
        header.style.padding = "25px 0";
    }

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    ".intro-content, .intro-image, .feature, .puppy-card, .about-content, .about-images, .process-card, .contact-grid"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(element => {
    element.classList.add("reveal");
    observer.observe(element);
});


/* =========================
   PUPPY CARD BUTTONS
========================= */

const puppyLinks = document.querySelectorAll(".puppy-bottom a");

puppyLinks.forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();

        const card = link.closest(".puppy-card");
        const puppyName = card.querySelector("h3").textContent;

        alert(
            `Thanks for your interest in ${puppyName}! Please contact us for more information.`
        );

    });

});


/* =========================
   BUTTON RIPPLE EFFECT
========================= */

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", function () {

        this.style.transform = "scale(.97)";

        setTimeout(() => {
            this.style.transform = "";
        }, 120);

    });

});