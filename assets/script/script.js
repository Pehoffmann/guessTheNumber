"use strict";

/*document.querySelector(".message").textContent = "🎉Número Certo!";*/

document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;
  console.log(guess);
  if (!guess) {
    document.querySelector(".message").textContent =
      "⛔ Nenhum número selecionado!";
  }
});
