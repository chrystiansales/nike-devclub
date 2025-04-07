let body = document.querySelector("body");
let tenis = document.querySelector(".imagem-tenis");
let botao = document.querySelector(".botao-carrinho");

function mudarVisual(cor, imagem, carrinho) {
tenis.classList.add("troca-efeito");

body.style.backgroundColor = cor;

botao.style.background = cor;

setTimeout(() => {
    tenis.src = imagem;
    tenis.classList.remove("troca-efeito")
}, 500);




}