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
        openMenu.style.display = 'none';
        closeMenu.style.display = 'block';
        toggleSidebar();
    }

    function switchXToMenu(e) {
        openMenu.style.display = 'block';
        closeMenu.style.display = 'none';
        toggleSidebar();
    }

    function toggleSidebar() {
        sidebar.classList.toggle('active');
        project.classList.toggle('active');
    }
})();
