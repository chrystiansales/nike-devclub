let body = document.querySelector("body");
let tenis = document.querySelector(".imagem-tenis");
let botao = document.querySelector(".botao-carrinho");

function mudarVisual(cor, imagem, carrinho) {
body.style.backgroundColor = cor;
tenis.src = imagem;
botao.style.background = cor;
}