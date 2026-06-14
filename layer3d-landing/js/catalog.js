/* js/catalog.js */
const db = {
    'Santos Religiosos': [
        { name: 'São Francisco de Assis', desc: 'Resina de alta resolução com acabamento premium.' },
        { name: 'Nossa Senhora de Fátima', desc: 'Manto texturizado impresso em SLA.' },
        { name: 'Santo Antônio', desc: 'Modelo premium com base integrada.' },
        { name: 'São Jorge', desc: 'Escultura detalhada com pintura automotiva.' }
    ],
    'Decoração': [
        { name: 'Vasos Geométricos', desc: 'Design paramétrico para ambientes contemporâneos.' },
        { name: 'Porta-Retratos Modernos', desc: 'Molduras exclusivas impressas em PETG.' },
        { name: 'Luminária de Mesa', desc: 'Efeito de luz difusa através de camadas de PLA.' },
        { name: 'Enfeites de Parede', desc: 'Arte abstrata modular para sua casa.' }
    ],
    'Utilidades': [
        { name: 'Porta-Canetas Organizador', desc: 'Mantenha sua mesa em ordem com estilo mecânico.' },
        { name: 'Suporte para Celular', desc: 'Ergonômico e resistente para todos os modelos.' },
        { name: 'Divisórias Modulares', desc: 'Organização personalizada para gavetas industriais.' },
        { name: 'Ganchos Multiuso', desc: 'Praticidade e extrema resistência para o dia a dia.' }
    ],
    'Miniaturas': [
        { name: 'Carros em Escala', desc: 'Colecionáveis com alto nível de fidelidade.' },
        { name: 'Arquitetura em Miniatura', desc: 'Maquetes precisas de monumentos famosos.' },
        { name: 'Personagens Geek', desc: 'Seus heróis favoritos modelados em 3D.' },
        { name: 'Peças de Xadrez', desc: 'Sets temáticos exclusivos e customizados.' }
    ],
    'Peças Técnicas': [
        { name: 'Suportes e Brackets', desc: 'Peças funcionais em ABS para alta resistência.' },
        { name: 'Engrenagens Customizadas', desc: 'Reposição técnica com medidas cirúrgicas.' },
        { name: 'Protótipos Industriais', desc: 'Validação de design rápida e eficiente.' },
        { name: 'Adaptadores', desc: 'Soluções sob medida para conexões complexas.' }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const filterContainer = document.getElementById('catalog-filters');
    const gridContainer = document.getElementById('catalog-grid');
    if (!filterContainer || !gridContainer) return;

    const categories = Object.keys(db);

    function renderProducts(category) {
        gridContainer.innerHTML = '';
        const items = db[category] || [];

        items.forEach((item, index) => {
            const card = document.createElement('div');
            // Adding io-reveal to hook into main.js observer
            card.className = `glass-panel product-card io-reveal delay-${((index % 4) + 1) * 100}`;
            
            card.innerHTML = `
                <div class="product-img-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                </div>
                <h4 class="product-title font-display">${item.name}</h4>
                <p class="product-desc">${item.desc}</p>
                <a href="https://wa.me/5500000000000" class="btn btn-ghost shimmer-btn" style="width:100%; padding: 10px;">Orçamento</a>
            `;
            gridContainer.appendChild(card);
        });

        if (window.observeNewElements) {
            setTimeout(window.observeNewElements, 50);
        }
    }

    // Build Filters
    categories.forEach((cat, index) => {
        const btn = document.createElement('button');
        btn.className = `pill ${index === 0 ? 'active' : ''}`;
        btn.textContent = cat;
        
        btn.addEventListener('click', () => {
            document.querySelectorAll('.catalog-filters .pill').forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            renderProducts(cat);
        });
        
        filterContainer.appendChild(btn);
    });

    renderProducts(categories[0]);
});
