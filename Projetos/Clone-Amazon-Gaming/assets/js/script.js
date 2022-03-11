let butaoIdioma = document.querySelector('.btn-idioma');
butaoIdioma.addEventListener('click', () => {
     let imgIcone = document.querySelector('.btn-idioma img.btn-idioma--seta');
     let menuIdioma = document.querySelector('.btn-idioma--menu ul');
     if(menuIdioma.style.display == 'none') {
          menuIdioma.style.display = 'block'; 
          imgIcone.style.transform = 'rotateZ(0deg)';
     }
     else{
          menuIdioma.style.display = 'none'; 
          imgIcone.style.transform = 'rotateZ(180deg)';
     }
});

let butaoLogin = document.querySelector('.btn-login');
butaoLogin.addEventListener('click', () => {
     let imgIcone = document.querySelector('.btn-login img.btn-login--seta');
     let menuLogin = document.querySelector('.btn-login--menu ul');
     if(menuLogin.style.display == 'none') {
          menuLogin.style.display = 'flex'; 
          imgIcone.style.transform = 'rotateZ(0deg)';
     }
     else{
          menuLogin.style.display = 'none'; 
          imgIcone.style.transform = 'rotateZ(180deg)';
     }
     
});