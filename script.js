const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section[id]");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 20);

    let current = "home";

    sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;
        if (top <= 140) {
            current = section.id;
        }
    });

    navLinks.forEach((link) => {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${current}`
        );
    });
});
