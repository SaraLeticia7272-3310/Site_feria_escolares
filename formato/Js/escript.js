/* =====================================================================================
     DESTINOS
========================================================================================*/

// Só roda se existir o carrossel
if (document.getElementById("carrossel")) {

    const conteudoCategorias = [
        ["Slide 1 - Categoria 1", "Slide 2 - Categoria 1", "Slide 3 - Categoria 1"],
        ["Slide 1 - Categoria 2", "Slide 2 - Categoria 2"],
        ["Slide 1 - Categoria 3", "Slide 2 - Categoria 3", "Slide 3 - Categoria 3"],
    ];

    let categoriaAtual = 0;
    let slideAtual = 0;

    const carrossel = document.getElementById("carrossel");
    const slidesArea = document.getElementById("slides");
    const prevBtn = document.getElementById("prevSlide");
    const nextBtn = document.getElementById("nextSlide");
    const fechar = document.getElementById("fecharCarrossel");

    const botoes = document.querySelectorAll(".item");

    botoes.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            categoriaAtual = index;
            slideAtual = 0;
            abrirCarrossel();
        });
    });

    function abrirCarrossel() {
        carrossel.classList.remove("hidden");
        mostrarSlide();
    }

    fechar.addEventListener("click", () => {
        carrossel.classList.add("hidden");
    });

    function mostrarSlide() {
        slidesArea.innerHTML = conteudoCategorias[categoriaAtual][slideAtual];
    }

    nextBtn.addEventListener("click", () => {
        slideAtual++;
        if (slideAtual >= conteudoCategorias[categoriaAtual].length) slideAtual = 0;
        mostrarSlide();
    });

    prevBtn.addEventListener("click", () => {
        slideAtual--;
        if (slideAtual < 0) slideAtual = conteudoCategorias[categoriaAtual].length - 1;
        mostrarSlide();
    });

}

/*========================================================================================
        PERSONALIDADES
========================================================================================*/

// Só roda se existir o slide de personalidades
if (document.getElementById("slide")) {

    const dados = {
        guerreiro: `
            <h2>Guerreiro</h2>
            <p>Força elevada, defesa alta, especialista em combate corpo a corpo.</p>
        `,
        mago: `
            <h2>Mago</h2>
            <p>Alta inteligência, usa magias poderosas e controle elemental.</p>
        `,
        arqueiro: `
            <h2>Arqueiro</h2>
            <p>Alta precisão, ataques à distância e grande agilidade.</p>
        `
    };

    const cards = document.querySelectorAll(".card");
    const slide = document.getElementById("slide");
    const info = document.getElementById("info");
    const fecharModal = document.getElementById("fechar");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            const tipo = card.getAttribute("data-personalidade");
            info.innerHTML = dados[tipo];
            slide.style.display = "flex";
        });
    });

    fecharModal.addEventListener("click", () => {
        slide.style.display = "none";
    });

}

/* =======================================================================================
        ORGANIZAÇÃO 
======================================================================================= */

const conteudoOrganizacao = {
    cat1: [
        "Slide 1 - Categoria 1",
        "Slide 2 - Categoria 1",
        "Slide 3 - Categoria 1"
    ],
    cat2: [
        "Slide 1 - Categoria 2",
        "Slide 2 - Categoria 2"
    ],
    cat3: [
        "Slide 1 - Categoria 3",
        "Slide 2 - Categoria 3",
        "Slide 3 - Categoria 3"
    ],
    cat4: [
        "Slide Único - Categoria 4"
    ],
    cat5: [
        "Slide 1 - Categoria 5",
        "Slide 2 - Categoria 5"
    ]
};

let categoriaAtualOrg = null;
let slideAtualOrg = 0;

const modalOrg = document.getElementById("carrosselOrg");
const slidesOrg = document.getElementById("slidesOrg");
const prevOrg = document.getElementById("prevOrg");
const nextOrg = document.getElementById("nextOrg");
const fecharCarrosselOrg = document.getElementById("fecharCarrosselOrg");

// Abre o modal quando clica num botão
function mostrarSlide(cat) {
    categoriaAtualOrg = cat;
    slideAtualOrg = 0;

    atualizarSlideOrg();
    modalOrg.classList.remove("hidden");
}

// Atualiza conteúdo do slide
function atualizarSlideOrg() {
    slidesOrg.textContent = conteudoOrganizacao[categoriaAtualOrg][slideAtualOrg];
}

// Navegação
prevOrg.addEventListener("click", () => {
    slideAtualOrg--;
    if (slideAtualOrg < 0) slideAtualOrg = conteudoOrganizacao[categoriaAtualOrg].length - 1;
    atualizarSlideOrg();
});

nextOrg.addEventListener("click", () => {
    slideAtualOrg++;
    if (slideAtualOrg >= conteudoOrganizacao[categoriaAtualOrg].length) slideAtualOrg = 0;
    atualizarSlideOrg();
});

// Fechar modal
fecharCarrosselOrg.addEventListener("click", () => {
    modalOrg.classList.add("hidden");
});