const botaoBiscoitoCho = document.getElementById("adicionar-biscoito-chocolate");
const botaoBiscoitoBau = document.getElementById("adicionar-biscoito-baunilha");

const carrinho = {};

function atualizarCarrinho() {
  let sidebar = document.getElementById("sidebarCarrinho");

  if (!sidebar) {
    sidebar = document.createElement("div");
    sidebar.id = "sidebarCarrinho";
    sidebar.style.position = "fixed";
    sidebar.style.top = "0";
    sidebar.style.right = "0";
    sidebar.style.width = "250px";
    sidebar.style.height = "100%";
    sidebar.style.backgroundColor = "white";
    sidebar.style.boxShadow = "-2px 0 8px rgba(0,0,0,0.3)";
    sidebar.style.padding = "20px";
    sidebar.style.zIndex = "1000";

    const titulo = document.createElement("h2");
    titulo.textContent = "Carrinho";
    sidebar.appendChild(titulo);

    const lista = document.createElement("ul");
    lista.id = "listaCarrinho";
    sidebar.appendChild(lista);

    const fechar = document.createElement("button");
  fechar.textContent = "Fechar";
  fechar.style.marginTop = "10px";
  fechar.addEventListener("click", () => {
    sidebar.style.right = "-300px";
  });
  const comprar = document.createElement("button");
  comprar.textContent = "Comprar";
  comprar.style.margin = "10px";
  comprar.addEventListener("click", () => {
    window.open("/menu/compra.html", "_blank");
  });
  sidebar.appendChild(fechar);
  sidebar.appendChild(comprar);

  document.body.appendChild(sidebar);

  }

  const lista = document.getElementById("listaCarrinho");
  lista.innerHTML = "";

  for (const item in carrinho) {
    const li = document.createElement("li");
    li.textContent = `${item} x${carrinho[item]}`;
    lista.appendChild(li);
  }
}

function adicionarProduto(produto) {
  if (carrinho[produto]) {
    carrinho[produto]++;
  } else {
    carrinho[produto] = 1;
  }
  atualizarCarrinho();
}

botaoBiscoitoCho.addEventListener("click", () => {
  adicionarProduto("Biscoito de Chocolate");
});

botaoBiscoitoBau.addEventListener("click", () => {
  adicionarProduto("Biscoito de Baunilha");
});
