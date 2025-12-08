/* =====================================================================================
     DESTINOS
========================================================================================*/
//roda se for um carrossel
if (document.getElementById("carrossel")) {

    const carrossel = document.getElementById("carrossel");
    const slides = document.querySelectorAll(".slide");

    const prevBtn = document.getElementById("prevSlide");
    const nextBtn = document.getElementById("nextSlide");
    const fechar = document.getElementById("fecharCarrossel");

    const botoes = document.querySelectorAll(".item");

    let categoriaAtual = 0;
    let slideAtual = 0;

    botoes.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            categoriaAtual = index;
            slideAtual = 0;

            abrirCarrossel();
            mostrarSlide();
        });
    });

    function abrirCarrossel() {
        carrossel.classList.remove("hidden");
    }

    fechar.addEventListener("click", () => {
        carrossel.classList.add("hidden");
    });

    function mostrarSlide() {
        slides.forEach(s => s.style.display = "none");

        const slidesDaCategoria = [...slides].filter(
            s => s.dataset.cat == categoriaAtual
        );

        slidesDaCategoria[slideAtual].style.display = "block";
    }

    nextBtn.addEventListener("click", () => {
        const lista = [...slides].filter(s => s.dataset.cat == categoriaAtual);

        slideAtual++;
        if (slideAtual >= lista.length) slideAtual = 0;

        mostrarSlide();
    });

    prevBtn.addEventListener("click", () => {
        const lista = [...slides].filter(s => s.dataset.cat == categoriaAtual);

        slideAtual--;
        if (slideAtual < 0) slideAtual = lista.length - 1;

        mostrarSlide();
    });
}


/*========================================================================================
        PERSONALIDADES
========================================================================================*/

// Só roda se existir o slide de personalidades
if (document.getElementById("slide")) {

    const dados = {
        perfil1: `
            <p>Gosta de explorar trilhas, cachoeiras, esportes radicais e tudo que envolva adrenalina. 
            Prefere destinos naturais, montanhas e atividades ao ar livre que desafiem seus limites.</p>
        `,
        perfil2: `
            <p>Busca descanso, sombra e água fresca. Prefere praias tranquilas, redes, leitura, passeios leves e lugares 
            silenciosos para descansar a mente durante as férias.</p>
        `,
        perfil3: `
            <p>Adora museus, centros históricos, monumentos e lugares cheios de história. 
            Aproveita as férias para conhecer tradições, artes, culinárias regionais e aprender algo novo.</p>
        `,
        perfil4: `
            <p>Gosta de cidades movimentadas, shoppings, cinemas, cafés e parques urbanos. 
            Prefere destino com muita estrutura e várias opções de lazer no mesmo lugar.</p>
        `,
        perfil5: `
            <p>Procura atividades que agradem todas as idades. Prefere parques, 
            zoológicos, praias tranquilas, museus interativos e passeios seguros para 
            aproveitar com crianças e adultos.</p>
        `,
        perfil6: `
            <p>Adora artes, fotografia, música e projetos manuais. 
            Prefere destinos tranquilos onde pode se inspirar, fazer oficinas, produzir 
            arte ou participar de atividades culturais.</p>
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