// Intersection Observer for reveal animations
function initReveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1
    });
    
    reveals.forEach(reveal => observer.observe(reveal));
}

// Navbar scroll effect
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Mobile Menu Logic
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const drawer = document.querySelector('.mobile-drawer');
    const overlay = document.querySelector('.drawer-overlay');
    const closeBtn = document.querySelector('.drawer-close');
    
    if (!menuBtn || !drawer || !overlay) return;
    
    const toggleMenu = (isOpen) => {
        drawer.classList.toggle('open', isOpen);
        overlay.classList.toggle('active', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    };
    
    menuBtn.addEventListener('click', () => toggleMenu(true));
    closeBtn.addEventListener('click', () => toggleMenu(false));
    overlay.addEventListener('click', () => toggleMenu(false));
    
    // Close on link click
    drawer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => toggleMenu(false));
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initReveal();
    initNavbarScroll();
    initMobileMenu();
});
