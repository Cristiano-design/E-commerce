document.addEventListener("DOMContentLoaded", () => {
    const openMenuBtn = document.getElementById("open-menu-btn");
    const closeMenuBtn = document.getElementById("close-menu-btn");
    const sideMenu = document.getElementById("side-menu");

    if (openMenuBtn && closeMenuBtn && sideMenu) {
        openMenuBtn.addEventListener("click", () => {
            sideMenu.classList.add("open");
            document.body.classList.add("menu-open"); // Bloqueia rolagem horizontal
        });

        closeMenuBtn.addEventListener("click", () => {
            sideMenu.classList.remove("open");
            document.body.classList.remove("menu-open"); // Libera a rolagem
        });
    }
});
