let totalSliders = document.querySelectorAll('.slider-item').length;
let slideAtual = 0;

document.querySelector('.slider-area').style.width = `calc(100vw * ${totalSliders})`;

function movimentar() {
     slideAtual++;
     if(slideAtual > (totalSliders - 1)) {
          slideAtual = 0;
     }
     updateMargin();
}
setInterval(movimentar, 6000);

function updateMargin() {
     let itemSliderWidth = document.querySelector('.slider-item').clientWidth;
     let newMargin = (slideAtual * itemSliderWidth);
     document.querySelector('.slider-area').style.marginLeft = `-${newMargin}px`;
}


let totalSlidersGaleria = document.querySelectorAll('.galeria-slider-item').length;
let slideAtualGaleria = 0;

document.querySelector('.galeria-slider-width').style.width = `calc(100% * ${totalSlidersGaleria})`;
document.querySelector('.galeria-slider-controls').style.width = `${document.querySelector('.galeria-slider-right').clientWidth}px`;
document.querySelector('.galeria-slider-controls').style.height = "315px";

function goPrev() {
     slideAtualGaleria--;
     if(slideAtualGaleria < 0) {
          slideAtualGaleria = totalSlidersGaleria - 1;
     }
     newMarginGaleria();
}

function goNext() {
     slideAtualGaleria++;
     if(slideAtualGaleria > (totalSlidersGaleria - 1)) {
          slideAtualGaleria = 0;
     }
     newMarginGaleria();
}

function alterarImg(num) {
     if(num == 1) {
          slideAtualGaleria = 0;
     }
     else if(num == 2) {
          slideAtualGaleria = 1;
     }
     else if(num == 3) {
          slideAtualGaleria = 2;
     }
     else if(num == 4) {
          slideAtualGaleria = 3;
     }
     else if(num == 5) {
          slideAtualGaleria = 4;
     }
     else if(num == 6) {
          slideAtualGaleria = 5;
     }
     else if(num == 7) {
          slideAtualGaleria = 6;
     }
     else if(num == 8) {
          slideAtualGaleria = 7;
     }
     newMarginGaleria();
}

setInterval(goNext, 4000);

function newMarginGaleria() {
     let itemSliderGaleria = document.querySelector(".galeria-slider-item").clientWidth;
     let newMarginGaleria = (slideAtualGaleria * itemSliderGaleria);
     document.querySelector('.galeria-slider-width').style.marginLeft = `-${newMarginGaleria}px`;
}

let menuToggle = document.querySelector('#menu-toggle');
let styelMenu = document.querySelector('#menu');
let line1 = document.querySelector('#menu-toggle .line1');
let line2 = document.querySelector('#menu-toggle .line2');
let line3 = document.querySelector('#menu-toggle .line3');
menuToggle.addEventListener('click', () => {
     if(styelMenu.style.right == '-800px') {
          styelMenu.style.right = 0;
          line2.style.opacity = 0;
          line1.style.transform = 'rotateZ(135deg)';
          line3.style.transform = 'rotateZ(-135deg)'; 
          line3.style.top = '-7px'; 
          line1.style.top = '5px'; 
     }
     else {
          styelMenu.style.right = '-800px';
          line2.style.opacity = 1;
          line1.style.transform = 'rotateZ(0deg)';
          line3.style.transform = 'rotateZ(0deg)'; 
          line3.style.top = '';
          line1.style.top = ''; 
     }
});