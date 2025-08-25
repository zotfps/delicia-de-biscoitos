const botaoEnviar = document.getElementById("enviar");

function enviarMensagem(event) {
  event.preventDefault();
  alert("Mensagem enviada! Em breve entraremos em contato 🍪");
}
botaoEnviar.addEventListener("click", enviarMensagem);