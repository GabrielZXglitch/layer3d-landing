/* js/catalog.js */

const catalogData = {
    'RELIGIOUS': [
        { name: 'Francis of Assisi', desc: 'Detailed liturgical sculpture with premium texturing.' },
        { name: 'Lady of Fatima', desc: 'Sacred representation with high mantle precision.' },
        { name: 'St. Anthony', desc: 'Votive piece optimized for altar display.' },
        { name: 'St. George', desc: 'Dynamic composition capturing anatomical detail.' }
    ],
    'DECOR': [
        { name: 'Geometric Vessels', desc: 'Parametric design for contemporary spaces.' },
        { name: 'Architectural Frames', desc: 'Structural frames with unique 3D infill patterns.' },
        { name: 'Table Luminaire', desc: 'Light diffusion through layered PLA geometry.' },
        { name: 'Modular Wall Art', desc: 'Abstract generative art for home interiors.' }
    ],
    'UTILITIES': [
        { name: 'Tech Organizer', desc: 'Minimalist desktop organization system.' },
        { name: 'Ergonomic Stand', desc: 'Universal device support with reinforced joints.' },
        { name: 'Modular Dividers', desc: 'Custom organization for industrial storage.' },
        { name: 'Precision Hooks', desc: 'Mechanical-grade load-bearing accessories.' }
    ],
    'TECHNICAL': [
        { name: 'Functional Brackets', desc: 'High-strength PETG load-bearing supports.' },
        { name: 'Custom Gearing', desc: 'Technical replacement parts with tight tolerances.' },
        { name: 'Industrial Prototyping', desc: 'Design validation with rapid iteration.' },
        { name: 'Interface Adapters', desc: 'Bespoke solutions for technical connections.' }
    ]
};

function renderCatalog(category) {
    const grid = document.getElementById('catalog-grid');
    grid.innerHTML = '';

    const products = catalogData[category] || [];
    
    products.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = `product-card reveal-card stagger-${(index % 4) + 1}`;
        card.innerHTML = `
            <div class="product-visual">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
            </div>
            <h4 class="font-display" style="font-size: 1.1rem; margin-bottom: 8px;">${product.name}</h4>
            <p class="text-secondary" style="font-size: 0.85rem; margin-bottom: 24px; min-height: 40px;">${product.desc}</p>
            <a href="https://wa.me/5500000000000" class="btn btn-ghost" style="width: 100%; font-size: 0.75rem;">INQUIRE SPECS</a>
        `;
        grid.appendChild(card);
    });

    // Re-initialize intersection observer for new items
    if (window.initReveal) window.initReveal();
}

document.addEventListener('DOMContentLoaded', () => {
    const filterContainer = document.getElementById('catalog-filters');
    const categories = Object.keys(catalogData);

    categories.forEach((cat, index) => {
        const pill = document.createElement('button');
        pill.className = `filter-pill ${index === 0 ? 'active' : ''}`;
        pill.textContent = cat;
        pill.onclick = (e) => {
            document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            renderCatalog(cat);
        };
        filterContainer.appendChild(pill);
    });

    // Render first category by default
    renderCatalog(categories[0]);
});
