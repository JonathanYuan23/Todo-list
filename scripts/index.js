const DOMHandler = (function() {

    // load svgs
    feather.replace();

    // cache DOM
    const toggleMenu = document.querySelector('.feather-menu');

    // bind events
    toggleMenu.addEventListener('click', switchMenuToX);
    toggleMenu.addEventListener('click', toggleSidebar);

    function switchMenuToX(e) {
        const parent = e.currentTarget.parentNode;
        e.currentTarget.remove();
        // e.currentTarget.removeEventListener('click', switchMenuToX);
        // toggleMenu.removeEventListener('click', toggleSidebar);

        const x = document.createElement('i');
        x.setAttribute('data-feather', 'x');

        parent.appendChild(x);
        feather.replace();

        const toggleX = document.querySelector('.feather-x');
        toggleX.addEventListener('click', switchXToMenu);
    }

    function switchXToMenu(e) {
        const parent = e.currentTarget.parentNode;
        e.currentTarget.remove();
        // e.currentTarget.removeEventListener('click', switchXToMenu);

        const menu = document.createElement('i');
        menu.setAttribute('data-feather', 'menu');

        parent.appendChild(menu);
        feather.replace();

        const toggleMenu = document.querySelector('.feather-menu');
        toggleMenu.addEventListener('click', switchMenuToX);
        toggleMenu.addEventListener('click', toggleSidebar);
    }

    function toggleSidebar() {

    }

})();
