const openMenuBtn = document.getElementById('open-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const sideMenu = document.getElementById('side-menu');

// Abrir o menu lateral
openMenuBtn.addEventListener('click', () => {
    sideMenu.classList.add('open');
});

// Fechar o menu lateral
closeMenuBtn.addEventListener('click', () => {
    sideMenu.classList.remove('open');
});


