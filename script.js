// Exibe um alerta quando o script é carregado
alert("JavaScript conectado e rodando!");

// Muda o texto do parágrafo após 3 segundos
setTimeout(() => {
  const paragrafo = document.getElementById("mensagem");
  paragrafo.textContent = "O JavaScript também mudou este texto!";
  paragrafo.style.color = "darkgreen";
}, 3000);
