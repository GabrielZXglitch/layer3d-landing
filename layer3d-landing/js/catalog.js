const catalogData = {
    'Santos Religiosos': [
        { name: 'São Francisco de Assis', desc: 'Resina de alta resolução com acabamento detalhado.' },
        { name: 'Nossa Senhora de Fátima', desc: 'Manto texturizado impresso em SLA.' },
        { name: 'Santo Antônio', desc: 'Modelo premium com base integrada.' },
        { name: 'São Jorge', desc: 'Escultura detalhada com acabamento premium.' }
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
    if (!grid) return;
    
    grid.innerHTML = '';
    const products = catalogData[category] || [];
    
    products.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'glass-panel product-card reveal flex flex-col group';
        card.style.transitionDelay = `${index * 100}ms`;
        
        card.innerHTML = `
            <div class="product-image">
                <span class="material-symbols-outlined text-surface-variant text-6xl" style="font-size: 64px; color: var(--surface-variant);">image</span>
                <div class="product-badge">${category.split(' ')[0]}</div>
            </div>
            <div class="product-content">
                <div>
                    <h3 class="font-space text-xl font-semibold mb-2" style="font-size: 24px; color: var(--on-surface); margin-bottom: 8px;">${product.name}</h3>
                    <p class="font-inter text-sm" style="font-size: 14px; color: var(--on-surface-variant); margin-bottom: 24px;">${product.desc}</p>
                </div>
                <button class="w-full py-3 rounded-lg border border-white/10 text-on-surface font-body-sm text-body-sm hover:border-primary hover:text-primary transition-colors group-hover:bg-primary/5" style="padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); color: var(--on-surface); cursor: pointer; transition: all 0.3s ease;">Orçamento</button>
            </div>
        `;
        grid.appendChild(card);
    });

    // Re-trigger reveal animation for new elements
    setTimeout(() => {
        const reveals = grid.querySelectorAll('.reveal');
        reveals.forEach(r => r.classList.add('active'));
    }, 100);
}

document.addEventListener('DOMContentLoaded', () => {
    const filterContainer = document.getElementById('catalog-filters');
    if (!filterContainer) return;
    
    const categories = Object.keys(catalogData);
    
    categories.forEach((cat, index) => {
        const btn = document.createElement('button');
        btn.className = `pill ${index === 0 ? 'pill-active' : 'pill-inactive'}`;
        btn.textContent = cat;
        btn.onclick = () => {
            document.querySelectorAll('.catalog-filters .pill').forEach(p => {
                p.classList.remove('pill-active');
                p.classList.add('pill-inactive');
            });
            btn.classList.remove('pill-inactive');
            btn.classList.add('pill-active');
            renderCatalog(cat);
        };
        filterContainer.appendChild(btn);
    });
    
    // Initial render
    renderCatalog(categories[0]);
});
