const botaoBiscoitoCho = document.getElementById("adicionar-biscoito-chocolate");
const botaoBiscoitoBau = document.getElementById("adicionar-biscoito-baunilha");
const carrinho = [];

botaoBiscoitoCho.addEventListener("click", function() {
  carrinho.push("Biscoito de Chocolate");
  mostrarCarrinho("Biscoito de Chocolate adicionado!");
});

botaoBiscoitoBau.addEventListener("click", function() {
  carrinho.push("Biscoito de Baunilha");
  mostrarCarrinho("Biscoito de Baunilha adicionado!");
});

function mostrarCarrinho(mensagem) {
  const novaJanela = window.open("", "Carrinho", "width=300,height=300");
  
  novaJanela.document.write("<h3>" + mensagem + "</h3>");
  novaJanela.document.write("<ul>");
  carrinho.forEach(item => {
    novaJanela.document.write("<li>" + item + "</li>");
  });
  novaJanela.document.write("</ul>");
  novaJanela.document.write("<button onclick='window.close()'>Fechar</button>");
}
