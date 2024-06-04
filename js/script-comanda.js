document.addEventListener("DOMContentLoaded", function () {
  const inptComanda = document.getElementById("inptComanda");
  const btnComanda = document.getElementById("btnComanda");
  const listaComanda = document.getElementById("listaComanda");

  // Função para adicionar uma nova comanda:
  function adicionarComanda() {
    const ComandaTexto = inptComanda.value.trim(); // O método trim() remove espaços em branco de ambos os lados de uma string

    if (ComandaTexto !== "") { // Criando uma nova comanda
      const novaComanda = document.createElement("li");
      novaComanda.innerText = ComandaTexto;

      const button = document.createElement("button"); // Criando botão excluir
      button.classList.add('delete')
      button.textContent = "Excluir"
      button.onclick = () => {
        novaComanda.remove();
      }
      const deleteIcon = document.createElement("span");
      deleteIcon.classList.add("iconify");
      deleteIcon.setAttribute("data-icon", "mdi:delete");
      deleteIcon.classList.add("delete-icon");

      deleteIcon.onclick = function () {
        //listaComanda.removeChild(novaTarefa);
        novaComanda.remove();
      }

      novaComanda.onclick = function () {
        novaComanda.classList.toggle("completed");
      }

      button.appendChild(deleteIcon);
      novaComanda.appendChild(button);
      listaComanda.appendChild(novaComanda);
      inptComanda.value = "";
    } else {
      alert("Por favor, digite uma comanda válida!");
    }
  }

  btnComanda.addEventListener("click", adicionarComanda); // Adicionar tarefa quando o botão for clicado

  inptComanda.addEventListener("keypress", function (event) {  // Adicionar tarefa quando a tecla "Enter" for pressionada no campo de entrada
    if (event.key === "Enter") {
      adicionarComanda();
    }
  });
});
