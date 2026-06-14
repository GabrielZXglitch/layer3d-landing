/* js/main.js */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Intersection Observer for Scroll Reveals
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Initial query for elements
    document.querySelectorAll('.io-reveal').forEach(el => {
        revealObserver.observe(el);
    });
    
    // Expose globally so catalog.js can use it
    window.observeNewElements = () => {
        document.querySelectorAll('.io-reveal:not(.is-visible)').forEach(el => {
            revealObserver.observe(el);
        });
    };

    // 2. Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Trigger on load
    }
});
