const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");
const header = document.getElementById("header");
const navLinks = document.querySelectorAll(".nav-link");

// Toggle mobile menu
menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// Close menu when clicking link
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});

// Scroll effect (background change)
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Active link highlight
window.addEventListener("scroll", () => {

    let fromTop = window.scrollY;

    navLinks.forEach(link => {
        let section = document.querySelector(link.hash);

        if (
            section &&
            section.offsetTop <= fromTop + 100 &&
            section.offsetTop + section.offsetHeight > fromTop + 100
        ) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

});






const skills = document.querySelectorAll(".progress");

window.addEventListener("scroll", () => {

    const trigger = window.innerHeight * 0.85;

    skills.forEach(skill => {

        const top = skill.getBoundingClientRect().top;

        if (top < trigger) {
            skill.style.animationPlayState = "running";
        }

    });

});





const filters = document.querySelectorAll(".filter");
const items = document.querySelectorAll(".portfolio-item");

filters.forEach(btn => {

    btn.addEventListener("click", () => {

        // active button
        filters.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;

        items.forEach(item => {

            if (filter === "all") {
                item.style.display = "block";
            }
            else {
                if (item.classList.contains(filter)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            }

        });

    });

});




document.querySelector(".contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message sent successfully!");
});


ScrollReveal({
    distance: "60px",
    duration: 1000,
    delay: 200,
    reset: false
});

ScrollReveal().reveal('.hero-text', { origin: 'left' });
ScrollReveal().reveal('.hero-image', { origin: 'right' });

ScrollReveal().reveal('.featured-card', { interval: 200 });
ScrollReveal().reveal('.about-image', { origin: 'left' });
ScrollReveal().reveal('.about-text', { origin: 'right' });
ScrollReveal().reveal('.skill', { interval: 150 });
ScrollReveal().reveal('.portfolio-item', { interval: 100 });
ScrollReveal().reveal('.contact-container', { origin: 'bottom' });




const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "flex";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});