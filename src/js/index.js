const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

  body.classList.toggle("modo-escuro");

  if (modoEscuroEstaAtivo)  {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
    imagemBotaoTrocaDeTema.setAttribute("alt", "imagem do Sol");
  }
  else {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    imagemBotaoTrocaDeTema.setAttribute("alt", "imagem da lua");
  }
});