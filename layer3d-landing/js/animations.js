function animateHeroHeadline() {
    const title = document.querySelector('.hero-title');
    if (!title) return;
    
    // Check if it's already animated or currently animating
    if (title.getAttribute('data-animated')) return;
    
    const text = title.innerText;
    // Use regex to split by whitespace but keep spaces if needed (though we'll reconstruct)
    const words = text.split(/\s+/);
    title.innerHTML = '';
    
    words.forEach((word, index) => {
        const wordSpan = document.createElement('span');
        wordSpan.style.display = 'inline-block';
        wordSpan.style.opacity = '0';
        wordSpan.style.transform = 'translateY(20px)';
        wordSpan.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        wordSpan.style.transitionDelay = `${index * 60}ms`;
        wordSpan.style.marginRight = '0.25em'; // Ensure space between words
        
        // Preserve gradient text for specific words
        if (word.toLowerCase().includes('realidade') || word.toLowerCase().includes('tridimensional')) {
             wordSpan.innerHTML = `<span class="gradient-text">${word}</span>`;
        } else {
            wordSpan.textContent = word;
        }
        
        title.appendChild(wordSpan);
        
        // Trigger animation in next frame
        requestAnimationFrame(() => {
            setTimeout(() => {
                wordSpan.style.opacity = '1';
                wordSpan.style.transform = 'translateY(0)';
            }, 100);
        });
    });
    
    title.setAttribute('data-animated', 'true');
}

document.addEventListener('DOMContentLoaded', () => {
    // Initial delay for smooth appearance after assets load
    setTimeout(animateHeroHeadline, 500);
});
