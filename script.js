function alternarResposta() {
    const container = event.currentTarget;
    const resposta = container.querySelector(".answer");

    resposta.classList.toggle("exibir-resposta");
}
