// Mobile menu toggle

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {

    navLinks.classList.toggle('active');

    menuToggle.querySelector('i').classList.toggle('fa-bars');
    menuToggle.querySelector('i').classList.toggle('fa-xmark');

});


// Close menu on link click

document.querySelectorAll('.nav-links a').forEach(link => {

    link.addEventListener('click', () => {

        navLinks.classList.remove('active');

        menuToggle.querySelector('i').classList.add('fa-bars');
        menuToggle.querySelector('i').classList.remove('fa-xmark');

    });

});


// Navbar scroll effect

window.addEventListener('scroll', () => {

    const header = document.querySelector('header');

    header.classList.toggle(
        'scrolled',
        window.scrollY > 50
    );

});


// Animate on scroll

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add('animate-in');

        }

    });

}, {
    threshold: 0.1
});


document
    .querySelectorAll(
        '.skill-card, .project-card, .certificate-card, .contact-card, .about-text p, .info-row, .spec-course'
    )
    .forEach(el => {

        el.classList.add('animate-target');
        observer.observe(el);

    });