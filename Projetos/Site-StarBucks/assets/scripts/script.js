function botaoVoltar() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

function decidirBotao() {
    if(window.scrollY == 0) {
        document.getElementById('botao-reverse').style.display = 'none';
    }
    else {
        document.getElementById('botao-reverse').style.display = 'inline-block';
    }
}

window.addEventListener('scroll', decidirBotao);