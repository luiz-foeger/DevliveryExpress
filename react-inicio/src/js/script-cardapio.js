// Função para criar o modal
function createModal(texto) {
    // Criação do elemento modal
    var modal = document.createElement('div');
    modal.classList.add('modal');

    // Criação do conteúdo do modal
    var modalContent = document.createElement('div');
    modalContent.textContent = "Ingredientes: " + texto;
    modalContent.classList.add('modal-content');

    // Adicionando o botão de fechar
    var closeButton = document.createElement('span');
    closeButton.classList.add('close');
    closeButton.innerHTML = '&times;'; // Caractere 'x' para fechar
    closeButton.onclick = function () {
        modal.style.display = 'none'; // Fecha o modal quando o botão é clicado
    };

    // Adicionando elementos ao modal
    modalContent.appendChild(closeButton);
    modal.appendChild(modalContent);

    // Adicionando o modal ao corpo do documento
    document.body.appendChild(modal);

    return modal;
}

// Adicionando um ouvinte de evento para os elementos com a classe 'open-modal'
document.addEventListener('DOMContentLoaded', function () {
    var openModalButtons = document.querySelectorAll('.open-modal');
    openModalButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            let texto = button.getAttribute('data-texto')
            console.log(texto)
            var modal = createModal(texto);
            modal.style.display = 'block'; // Exibe o modal
            // document.getElementById("prato1").innerHTML = "<img src='img/prato1.png'>";
        });
    });
});