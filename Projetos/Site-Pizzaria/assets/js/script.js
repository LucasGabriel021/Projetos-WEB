// As funções abaixo servirão como forma de auxilio, pois a primeira irá retornar
// um elemento e a de baixo vários elementos, sendo assim não precisa ficar toda
// hora utilizando uma querySelector() diferente, basta utilizar a função criada.
const c = el => document.querySelector(el);
const cs = el => document.querySelectorAll(el);

pizzaJson.map((value, index) => {  // map(value, indice, array), esse metodo cria uma nova array sem alterar a principal, executando um código em cada item.
     
     let pizzaItem = c('.models .pizza-item').cloneNode(true);   // A função cloneNode() irá clonar algo, no caso aqui será a estrutura.
  
     c('.pizza-area').append(pizzaItem);     // A função append() irá adicionar algo na tela, pois o innerHTML apenas substitui um conteudo na tela.

     // Alterando as informações das pizzas
     pizzaItem.setAttribute('data-key', index);
     pizzaItem.querySelector('.pizza-item--img img').src = value.img;
     pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$: ${value.price.toFixed(2)}`;
     pizzaItem.querySelector('.pizza-item--name').innerHTML = value.name;
     pizzaItem.querySelector('.pizza-item--desc').innerHTML = value.description;

     pizzaItem.querySelector('a').addEventListener('click', (e) => {  //Adicione um evento de clique a um elemento
          e.preventDefault();  // Cancela o evento se for cancelável, significando que a ação padrão que pertence ao evento não ocorrerá. 
             
          let key = e.target.closest('.pizza-item').getAttribute('data-key');   // A propriedade de evento de target retorna o elemento que acionou o evento.
          // método closest() pesquisa na árvore DOM por elementos que correspondam a um seletor CSS especificado.

          c('.pizzaBig img').src = pizzaJson[key].img;
          c('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
          c('.pizzaInfo .pizzaInfo--desc').innerHTML = pizzaJson[key].description;

          c('.pizzaWindowArea').style.opacity = 0;
          c('.pizzaWindowArea').style.display = 'flex';
          setTimeout(() => {
               c('.pizzaWindowArea').style.opacity = 1;
          }, 400);
     });
});


