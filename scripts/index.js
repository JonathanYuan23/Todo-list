const DOMHandler = (function () {
    // load svgs
    feather.replace();

    // cache DOM
    const openMenu = document.querySelector('.feather-menu');
    const closeMenu = document.querySelector('.feather-x');
    const sidebar = document.querySelector('#sidebar');
    const project = document.querySelector('#project');

    // bind events
    openMenu.addEventListener('click', switchMenuToX);
    closeMenu.addEventListener('click', switchXToMenu);

    function switchMenuToX(e) {
        openMenu.classList.toggle('toggle-menu');
        closeMenu.classList.toggle('toggle-menu');
        toggleSidebar();
    }

    function switchXToMenu(e) {
        openMenu.classList.toggle('toggle-menu');
        closeMenu.classList.toggle('toggle-menu');
        toggleSidebar();
    }

    function toggleSidebar() {
        sidebar.classList.toggle('active');
        project.classList.toggle('active');
    }
})();
