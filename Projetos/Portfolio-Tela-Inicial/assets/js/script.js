function toggle() {
    let menuArea = document.getElementById('menu');
    if (menuArea.classList.contains('open') == true) {
        menuArea.classList.remove('open');
    }
    else {
        menuArea.classList.add('open');
    }
}