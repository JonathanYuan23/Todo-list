feather.replace();

const toggleMenu = document.querySelector('.feather-menu');

toggleMenu.addEventListener('click', switchToX);

function switchToX(e) {
    const parent = e.currentTarget.parentNode;
    e.currentTarget.remove();
    e.currentTarget.removeEventListener('click', switchToX);

    const x = document.createElement('i');
    x.setAttribute('data-feather', 'x');

    parent.appendChild(x);
    feather.replace();

    const toggleX = document.querySelector('.feather-x');
    toggleX.addEventListener('click', switchToMenu);
}

function switchToMenu(e) {
    const parent = e.currentTarget.parentNode;
    e.currentTarget.remove();
    e.currentTarget.removeEventListener('click', switchToMenu);

    const x = document.createElement('i');
    x.setAttribute('data-feather', 'menu');

    parent.appendChild(x);
    feather.replace();

    const toggleMenu = document.querySelector('.feather-menu');
    toggleMenu.addEventListener('click', switchToX);
}