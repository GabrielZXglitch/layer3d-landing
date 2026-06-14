function animateHeroHeadline() {
    const title = document.querySelector('.hero-title');
    if (!title) return;
    
    // Check if it's already animated
    if (title.getAttribute('data-animated')) return;
    
    const text = title.innerText;
    const words = text.split(' ');
    title.innerHTML = '';
    
    words.forEach((word, index) => {
        const span = document.createElement('span');
        // Handle nested spans for gradient text if needed
        if (word.includes('Realidade') || word.includes('Tridimensional')) {
             span.innerHTML = `<span class="gradient-text">${word}</span> `;
        } else {
            span.textContent = word + ' ';
        }
        
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        span.style.transform = 'translateY(20px)';
        span.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        span.style.transitionDelay = `${index * 60}ms`;
        
        title.appendChild(span);
        
        // Trigger animation
        setTimeout(() => {
            span.style.opacity = '1';
            span.style.transform = 'translateY(0)';
        }, 100);
    });
    
    title.setAttribute('data-animated', 'true');
}

document.addEventListener('DOMContentLoaded', () => {
    // Initial delay for smooth appearance
    setTimeout(animateHeroHeadline, 300);
});
