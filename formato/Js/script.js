// SLIDES por categoria (cada botão)
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

// CAPTURA OS BOTÕES (suas barras brancas)
const botoes = document.querySelectorAll(".item");

// AÇÃO DOS BOTÕES
botoes.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        categoriaAtual = index;
        slideAtual = 0;
        abrirCarrossel();
    });
});

// ABRE
function abrirCarrossel() {
    carrossel.classList.remove("hidden");
    mostrarSlide();
}

// FECHA
fechar.addEventListener("click", () => {
    carrossel.classList.add("hidden");
});

// MOSTRAR SLIDE
function mostrarSlide() {
    slidesArea.innerHTML = conteudoCategorias[categoriaAtual][slideAtual];
}

// NAVEGAÇÃO
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

/*========================================================================================
        PERSONALIDADE
========================================================================================*/
// Conteúdo de cada personalidade
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

// Pega elementos
const cards = document.querySelectorAll(".card");
const slide = document.getElementById("slide");
const info = document.getElementById("info");
const fchar = document.getElementById("fechar");

// Abre o modal ao clicar no card
cards.forEach(card => {
    card.addEventListener("click", () => {
        const tipo = card.getAttribute("data-personalidade");
        info.innerHTML = dados[tipo];   // Preenche o conteúdo
        slide.style.display = "flex";   // Mostra o modal
    });
});

// Fecha o modal
fechar.addEventListener("click", () => {
    slide.style.display = "none";
});

/*========================================================================================
        ORGANIZAÇÃO
========================================================================================*/
