/* js/catalog.js */

const catalogData = {
    'Santos Religiosos': [
        { name: 'São Francisco de Assis', desc: 'Escultura detalhada com acabamento premium.' },
        { name: 'Nossa Senhora de Fátima', desc: 'Representação sacra com alta precisão nos mantos.' },
        { name: 'Santo Antônio', desc: 'Peça religiosa ideal para altares e decoração.' },
        { name: 'São Jorge', desc: 'Dinâmica e detalhada, capturando a essência do santo.' }
    ],
    'Decoração': [
        { name: 'Vasos Geométricos', desc: 'Design moderno para ambientes contemporâneos.' },
        { name: 'Porta-Retratos Modernos', desc: 'Molduras exclusivas impressas em 3D.' },
        { name: 'Luminária de Mesa', desc: 'Efeito de luz difusa através de camadas de PLA.' },
        { name: 'Enfeites de Parede', desc: 'Arte abstrata modular para sua casa.' }
    ],
    'Utilidades': [
        { name: 'Porta-Canetas Organizador', desc: 'Mantenha sua mesa em ordem com estilo.' },
        { name: 'Suporte para Celular', desc: 'Ergonômico e resistente para todos os modelos.' },
        { name: 'Divisórias Modulares', desc: 'Organização personalizada para gavetas.' },
        { name: 'Ganchos Multiuso', desc: 'Praticidade e resistência para o dia a dia.' }
    ],
    'Miniaturas': [
        { name: 'Carros em Escala', desc: 'Colecionáveis com alto nível de fidelidade.' },
        { name: 'Arquitetura em Miniatura', desc: 'Maquetes precisas de monumentos famosos.' },
        { name: 'Personagens Geek', desc: 'Seus heróis e vilões favoritos em 3D.' },
        { name: 'Peças de Xadrez', desc: 'Sets temáticos exclusivos e personalizados.' }
    ],
    'Peças Técnicas': [
        { name: 'Suportes e Brackets', desc: 'Peças funcionais em PETG para alta resistência.' },
        { name: 'Engrenagens Customizadas', desc: 'Reposição técnica com medidas exatas.' },
        { name: 'Protótipos Industriais', desc: 'Validação de design rápida e eficiente.' },
        { name: 'Adaptadores', desc: 'Soluções sob medida para conexões técnicas.' }
    ]
};

function renderCatalog(category) {
    const grid = document.getElementById('catalog-grid');
    grid.innerHTML = '';

    const products = catalogData[category] || [];
    
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card glass-card reveal';
        card.innerHTML = `
            <div class="product-img-placeholder">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
            </div>
            <div class="product-category text-accent uppercase bold">${category}</div>
            <h4 class="product-name font-space">${product.name}</h4>
            <p class="product-desc">${product.desc}</p>
            <a href="https://wa.me/5500000000000" class="btn btn-glass" style="width: 100%">Solicitar Orçamento</a>
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
        pill.className = `pill ${index === 0 ? 'pill-active' : 'pill-glass'}`;
        pill.textContent = cat;
        pill.onclick = (e) => {
            document.querySelectorAll('.catalog-filters .pill').forEach(p => {
                p.classList.remove('pill-active');
                p.classList.add('pill-glass');
            });
            pill.classList.remove('pill-glass');
            pill.classList.add('pill-active');
            renderCatalog(cat);
        };
        filterContainer.appendChild(pill);
    });

    // Render first category by default
    renderCatalog(categories[0]);
});
