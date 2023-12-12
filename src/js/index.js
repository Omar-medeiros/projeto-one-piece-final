const botoes = document.querySelectorAll('.botao')

const personagem = document.querySelectorAll(".personagem");


botoes.forEach((botoes, index) => {
    botoes.addEventListener("click", () => {
        
        desselecionarBotao();
        desselecionarPersonagem();

        botoes.classList.add('selecionado');
        personagem[index].classList.add('selecionado');
    })
});

const desselecionarBotao = () =>  {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

const desselecionarPersonagem = () => {
    const personagemSelecionado = document.querySelector(".selecionado");
    personagemSelecionado.classList.remove("selecionado");

}

