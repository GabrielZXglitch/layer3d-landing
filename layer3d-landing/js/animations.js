/* js/animations.js */

function animateHeadline() {
    const title = document.querySelector('.hero-title');
    if (!title) return;
    
    const text = title.textContent.trim();
    const words = text.split(' ');
    title.innerHTML = '';

    words.forEach((word, index) => {
        const span = document.createElement('span');
        span.textContent = word + ' ';
        span.style.animation = `wordUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards`;
        span.style.animationDelay = `${index * 80}ms`;
        title.appendChild(span);
    });
}

function animateCounters() {
    const counters = document.querySelectorAll('.badge-value[data-target]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = +entry.target.getAttribute('data-target');
                const duration = 2000; // 2 seconds
                const step = target / (duration / 16);
                let current = 0;

                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        entry.target.textContent = target + (entry.target.getAttribute('data-suffix') || '');
                        clearInterval(timer);
                    } else {
                        entry.target.textContent = Math.floor(current) + (entry.target.getAttribute('data-suffix') || '');
                    }
                }, 16);
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

document.addEventListener('DOMContentLoaded', () => {
    animateHeadline();
    animateCounters();
});
