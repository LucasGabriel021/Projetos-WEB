const c = el => document.querySelector(el);       //Váriavel para selcionar um elemento.
const cs = el => document.querySelectorAll(el);   //Váriavel para selcionar vários elemento.

let modalQt = 1;    // Variável para setar uma valor padrão a quantidade de pizzas.
let cart = [];      // Variável do carrinho de compras. 
let modalKey = 0;   // Variável de identificação da pizza.

//Preenchimento da tela com as pizzas e do modal de compra
pizzaJson.map((value, index) => {  
     
     //Clonando a estrutura e add ao HTML
     let pizzaItem = c('.models .pizza-item').cloneNode(true);   
     c('.pizza-area').append(pizzaItem);     

     // Alterando as informações das pizzas
     pizzaItem.setAttribute('data-key', index);
     pizzaItem.querySelector('.pizza-item--img img').src = value.img;
     pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$: ${value.price.toFixed(2)}`;
     pizzaItem.querySelector('.pizza-item--name').innerHTML = value.name;
     pizzaItem.querySelector('.pizza-item--desc').innerHTML = value.description;

     pizzaItem.querySelector('a').addEventListener('click', (e) => {  
          e.preventDefault();  
             
          let key = e.target.closest('.pizza-item').getAttribute('data-key');   // Variável armazenamento do identificador da pizza  
          
          modalQt = 1; 
          modalKey = key;

          c('.pizzaBig img').src = pizzaJson[key].img;
          c('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
          c('.pizzaInfo .pizzaInfo--desc').innerHTML = pizzaJson[key].description;
          c('.pizzaInfo .pizzaInfo--actualPrice').innerHTML = `R$: ${pizzaJson[key].price.toFixed(2)}`;
          
          c('.pizzaInfo--size.selected').classList.remove('selected');
          cs('.pizzaInfo--size').forEach((sizeValue, sizeIndex) => {  
               if(sizeIndex == 2) {
                    sizeValue.classList.add('selected');
               }
               sizeValue.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
          });

          c('.pizzaInfo--qt').innerHTML = modalQt;

          c('.pizzaWindowArea').style.opacity = 0;
          c('.pizzaWindowArea').style.display = 'flex';
          setTimeout(() => {
               c('.pizzaWindowArea').style.opacity = 1;
          }, 150);
     });
});

//Evento de fechar o modal
function closeModal() {
     c('.pizzaWindowArea').style.opacity = 0;
     setTimeout(() => {
          c('.pizzaWindowArea').style.display = 'none';
     }, 500);
}
cs('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item) => {
     item.addEventListener('click', closeModal);
});

//Evento de incrementar e decrementar quantidades de pizzas
c('.pizzaInfo--qtmenos').addEventListener('click', () => {
     if(modalQt > 1) {
          modalQt--;
     c('.pizzaInfo--qt').innerHTML = modalQt;
     }
});
c('.pizzaInfo--qtmais').addEventListener('click', () => {
     modalQt++;
     c('.pizzaInfo--qt').innerHTML = modalQt;
});

//Evento de clique de selecionar tamanhos.
cs('.pizzaInfo--size').forEach((sizeValue, sizeIndex) => {  
     sizeValue.addEventListener('click', () => {
          c('.pizzaInfo--size.selected').classList.remove('selected');
          sizeValue.classList.add('selected');
     });
});

//Evento de adicionar os itens ao carrinho. 
c('.pizzaInfo--addButton').addEventListener('click', () => {
     let tamanhoPizza = parseInt(c('.pizzaInfo--size.selected').getAttribute('data-key'));
     cart.push({
          id:pizzaJson[modalKey].id,
          tamanhoPizza,
          qt: modalQt
     });

     closeModal();
});