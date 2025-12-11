/* =====================================================================================
     DESTINOS
========================================================================================*/
//roda se for um carrossel
if (document.getElementById("carrossel")) {

    const carrossel = document.getElementById("carrossel"); /*procura um elemento pelo ID*/
    const slides = document.querySelectorAll(".slide"); /*pega todos os elementos com esse seletor */

    const prevBtn = document.getElementById("prevSlide");
    const nextBtn = document.getElementById("nextSlide");
    const fechar = document.getElementById("fecharCarrossel");

    const botoes = document.querySelectorAll(".item");

    let categoriaAtual = 0;
    let slideAtual = 0;
    /*addEventListener é usado para "ouvir" ações do usuário.
        click → quando clica
        mouseover → quando passa o mouse
        input → quando digita
        scroll → quando rola*/

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
            <div class='cardPerfil'>
            <img class="fotoPersonagem" src="assets/img/aventureiro.png">
            <div class="texto">
                <h3>O Aventureiro</h3>
                <p>
                    Gosta de explorar trilhas, cachoeiras, esportes radicais e tudo que envolva adrenalina. 
                    Prefere destinos naturais, montanhas e atividades ao ar livre que desafiem seus limites.
                </p>
            </div>
        `,
        perfil2: `
            <div class='cardPerfil'>
            <img class="fotoPersonagem" src="assets/img/relaxado.png">
            <div class="texto">
                <h3>O Relaxado</h3>
                <p>
                    Busca descanso, sombra e água fresca. Prefere praias tranquilas, redes, leitura, passeios leves e lugares 
                    silenciosos para descansar a mente durante as férias.
                </p>
            </div>
        `,
        perfil3: `
            <div class='cardPerfil'>
            <img class="fotoPersonagem" src="assets/img/cultural.png">
            <div class="texto">
                <h3>O Cultural</h3>
                <p>
                    Adora museus, centros históricos, monumentos e lugares cheios de história. 
                    Aproveita as férias para conhecer tradições, artes, culinárias regionais e aprender algo novo.
                </p>
            </div>
        `,
        perfil4: `
            <div class='cardPerfil'>
            <img class="fotoPersonagem" src="assets/img/urbano.png">
            <div class="texto">
                <h3>O Urbano</h3>
                <p>
                    Gosta de cidades movimentadas, shoppings, cinemas, cafés e parques urbanos. 
                    Prefere destino com muita estrutura e várias opções de lazer no mesmo lugar.
                </p>
            </div>
        `,
        perfil5: `
            <div class='cardPerfil'>
            <img class="fotoPersonagem" src="assets/img/familia.png">
            <div class="texto">
                <h3>O Família</h3>
                <p>
                    Procura atividades que agradem todas as idades. Prefere parques, 
                    zoológicos, praias tranquilas, museus interativos e passeios seguros para 
                    aproveitar com crianças e adultos.
                </p>
            </div>
        `,
        perfil6: `
            <div class='cardPerfil'>
            <img class="fotoPersonagem" src="assets/img/criativo.png">
            <div class="texto">
                <h3>O Criativo</h3>
                <p>
                    Adora artes, fotografia, música e projetos manuais. 
                    Prefere destinos tranquilos onde pode se inspirar, fazer oficinas, produzir 
                    arte ou participar de atividades culturais.
                </p>
            </div>
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
    cat1: [`
        <div class="cards">
            <p class="textoCard">
                Organizar uma programação para as férias ajuda a aproveitar melhor cada 
                dia e evita a sensação de tempo perdido. Criar um cronograma com atividades 
                variadas como passeios, descanso, esportes e momentos em família, permite 
                equilibrar diversão e descanso. Planeje os dias mais longos para atividades 
                externas e deixe opções mais leves para momentos de pausa ou dias de clima instável.
            </p>
            <img src="assets/img/organizacao.jpg" alt="">
        </div>
    `],
    cat2: [`
        <div class="cards">
            <p class="textoCard">
                Ter controle dos gastos é essencial para que as férias sejam divertidas 
                sem comprometer o orçamento. Estabeleça um valor máximo para alimentação, 
                transporte, ingressos e lembrancinhas. Prefira atrações gratuitas e pesquise 
                preços antes de sair. Comparar opções, montar uma lista de prioridades e evitar 
                compras por impulso ajudam a economizar e ainda garantem ótimas experiências.
            </p>
            <img src="assets/img/gastos.png" alt="">
        </div>
    `],
    cat3: [`
        <div class="cards">
            <p class="textoCard">
                O planejamento é fundamental para uma viagem segura e confortável. Verifique a 
                previsão do tempo, pesquise rotas, confirme reservas e organize a documentação 
                necessária. Escolha o destino com antecedência, avalie se o local é adequado para 
                crianças e procure informações sobre horários, transporte e alimentação na região. 
                Quanto mais preparado você estiver, mais tranquila e proveitosa será a viagem.
            </p>
            <img src="assets/img/organizacao2.jpg" alt="">
        </div>
    `],
    cat4: [`
        <div class="cards">
            <p class="textoCard">
                Levar os itens corretos facilita o dia a dia e evita imprevistos. Entre os itens 
                indispensáveis estão: protetor solar, garrafa de água, lanches leves, documentos, 
                roupas confortáveis, calçado adequado, dinheiro ou cartão, carregador portátil e 
                uma pequena farmacinha pessoal. Para passeios longos, inclua mapas, toalhas, 
                repelente e uma muda de roupa extra.
            </p>
            <img src="assets/img/documentos.jpg" alt="">
        </div>
    `],
    cat5: [`
        <div class="cards">
            <p class="textoCard">
                A segurança deve estar sempre em primeiro lugar. Ensine as crianças a manter contato 
                visual com os responsáveis, evite locais desconhecidos ou isolados e leve apenas o 
                necessário para cada passeio. Em viagens, mantenha documentos guardados, cuide dos 
                pertences e planeje rotas mais movimentadas. Em praias e parques, respeite as orientações 
                dos salva-vidas e siga sinalizações. Pequenos cuidados garantem férias tranquilas para todos.
            </p>
            <img src="assets/img/cuidado.jpg" alt="">
        </div>
    `]
};

let categoriaAtualOrg = null;
let slideAtualOrg = 0;

const modalOrg = document.getElementById("carrosselOrg");
const slidesOrg = document.getElementById("slidesOrg");
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
    slidesOrg.innerHTML = conteudoOrganizacao[categoriaAtualOrg][slideAtualOrg];
}

// Fechar modal
fecharCarrosselOrg.addEventListener("click", () => {
    modalOrg.classList.add("hidden");
});