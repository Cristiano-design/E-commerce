// Seleciona o botão de dropdown
var dropdownButton = document.getElementById('dropdownCategorias1');

// Adiciona o evento de clique no botão
dropdownButton.addEventListener('click', function(event) {
    var dropdownMenu = this.nextElementSibling;

    // Se o menu estiver visível, fecha
    if (dropdownMenu.classList.contains('show')) {
        dropdownMenu.classList.remove('show');
    } else {
        // Caso contrário, abre
        dropdownMenu.classList.add('show');
    }

    // Impede que o clique propague para o outro handler do Bootstrap
    event.stopPropagation();
});

// Fecha o dropdown ao clicar fora do menu
document.addEventListener('click', function(event) {
    var dropdownMenu = document.querySelector('.dropdown-menu.show');
    if (dropdownMenu && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove('show');
    }
});