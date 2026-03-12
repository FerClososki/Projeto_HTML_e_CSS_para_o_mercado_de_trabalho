let index = 0;

function avancar() {
    const container = document.getElementById("container");
    const total = container.children.length;

    index++;

    if (index >= total) {
        index = 0;
    }

    container.style.transform = `translateX(-${index * 600}px)`;
}

function voltar() {
    const container = document.getElementById("container");
    const total = container.children.length;

    index--;

    if (index < 0) {
        index = total - 1;
    }

    container.style.transform = `translateX(-${index * 600}px)`;
}

function abrirMenu() {
    document.getElementById("menu-lateral").classList.add("ativo");
    document.getElementById("overlay").classList.add("ativo");
}

function fecharMenu() {
    document.getElementById("menu-lateral").classList.remove("ativo");
    document.getElementById("overlay").classList.remove("ativo");
}

function mostrarAvaliacoes() {
    var avaliacoes = document.getElementById("maisAvaliacoes");
    var botao = document.querySelector(".vermais");

    if (avaliacoes.style.display === "none") {
        avaliacoes.style.display = "block";
        botao.textContent = "Ver Menos";
    } else {
        avaliacoes.style.display = "none";
        botao.textContent = "Ver Mais";
    }
}