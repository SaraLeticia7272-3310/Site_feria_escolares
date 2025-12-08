/*=========================================================================================================
            PROCESSAMENTO DE DADOS
=========================================================================================================*/

if (location.pathname.endsWith("contato.html")) {

    const form = document.getElementById("formContato");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        location.href = "processa.html";
    });
}

if (location.pathname.endsWith("processa.html")) {

    window.addEventListener("DOMContentLoaded", () => {
        setTimeout(() => {
            alert("Dados enviados com sucesso!");
            window.location.href = "index.html";
        }, 2000); // 2 segundos para aparecer a animação
    });

}

