// Navbar scrolled effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Intersection Observer for Scroll Animations
const observeElements = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once animated
                // observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    const hiddenElements = document.querySelectorAll('.fade-in, .slide-up');
    hiddenElements.forEach((el) => observer.observe(el));
};

// Initialize after DOM loads
document.addEventListener('DOMContentLoaded', () => {
    observeElements();

    // Trigger hero animations immediately
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.hero .fade-in, .hero .slide-up');
        heroElements.forEach(el => el.classList.add('visible'));
    }, 100);
});
