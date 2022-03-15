let paragrafo = document.querySelector('.menu-pcl-a-2 .description');
let imagem = document.querySelector('.menu-pcl--area-right');
let button1 = document.querySelector('.menu-pcl--conteudo .box1');
let button2 = document.querySelector('.menu-pcl--conteudo .box2');
let button3 = document.querySelector('.menu-pcl--conteudo .box3');
let button4 = document.querySelector('.menu-pcl--conteudo .box4');


function trocar(n) {
     if(n == '1') {
          imagem.style.backgroundImage = 'url(assets/img/ilustracao-1.png)';
          if(button1.classList.contains('btn-selected') == false){
               clear();

               layout1 = '';
               layout1 += `<p>${info[0].p1}</p>`;
               layout1 += `<p>${info[0].p2}</p>`;
          
               button1.classList.add('btn-selected');
               paragrafo.innerHTML = layout1;
          }
     }
     else if(n == '2') {
          imagem.style.backgroundImage = 'url(assets/img/ilustracao-2.png)';
          if(button2.classList.contains('btn-selected') == false){
               clear();
               
               layout2 = '';
                    layout2 += `<p>${info[1].p1}</p>`;
                    layout2 += `<p>${info[1].p2}</p>`;
               
               button2.classList.add('btn-selected');
               paragrafo.innerHTML = layout2;
          }
     }
     else if(n == '3') {
          imagem.style.backgroundImage = 'url(assets/img/ilustracao-3.png)';
          if(button3.classList.contains('btn-selected') == false){
               clear();

               layout3 = '';
               layout3 += `<p>${info[2].p1}</p>`;
               layout3 += `<p>${info[2].p2}</p>`;
               layout3 += `<p>${info[2].p3}</p>`;
          
               button3.classList.add('btn-selected');
               paragrafo.innerHTML = layout3;
          }
     }
     else if(n == '4') {
          imagem.style.backgroundImage = 'url(assets/img/ilustracao-4.png)';
          if(button4.classList.contains('btn-selected') == false){
               clear();

               layout4 = '';
               layout4 += `<p>${info[3].p1}</p>`;
               layout4 += `<p>${info[3].p2}</p>`;
               layout4 += `<p>${info[3].p3}</p>`;

               button4.classList.add('btn-selected');
               paragrafo.innerHTML = layout4;
          }
     }
}

function clear() {
     button1.classList.remove('btn-selected');
     button2.classList.remove('btn-selected');
     button3.classList.remove('btn-selected');
     button4.classList.remove('btn-selected');
}

/*
let btn_hover = document.querySelector('.box-slider');
let img_hover = document.querySelector('.box-slider--top');
let box_hover = document.querySelector('.box-slider--bottom');
btn_hover.addEventListener('mouseover', () => {
     box_hover.style.background = '#5A458A';
     img_hover.style.transform = 'scale(1.3)';
     
});

btn_hover.addEventListener('mouseout', () => {
     box_hover.style.background = '#392e5c';  
     img_hover.style.transform = 'scale(1.1)';
});
*/

let totalSliders = document.querySelectorAll('.box-slider').length;
let slideAtual = 0;
let sliderWidth = document.querySelector('.slide-area--right').clientWidth;
document.querySelector('.slider--width').style.width = `${sliderWidth} * ${totalSliders}px`;
document.querySelector('.slider-controls').style.width = `${sliderWidth}px`;
document.querySelector('.slider-controls').style.width = `${document.querySelector('.slide-area--right').clientHeight}px`;

function goPrev() {
     slideAtual--;
     if(slideAtual < 0) {
          slideAtual = slideAtual - 1;
     }
     updateMargin();
}

function goNext() {
     slideAtual++;
     if(slideAtual > (totalSlide - 1)) {
          slideAtual = 0;
     }
     updateMargin();
}

function updateMargin() {
     let newMargin = (slideAtual * document.body.clientWidth);
     document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`;
}
