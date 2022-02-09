function menuToggle() {
    let areaMenu = document.getElementById('navegation');
    if (areaMenu.classList.contains('menu-toggle-open') == true) {
        areaMenu.classList.remove('menu-toggle-open');
    }
    else {
        areaMenu.classList.add('menu-toggle-open');
    }
}