
/*
  ╔═════════════════════════════════════════════╗
  ║                  DARK MODE                  ║
  ╚═════════════════════════════════════════════╝ */

  let switchBox = document.querySelector('.switch');
  // Je stocke l'élément div.switch
  
  let container = document.querySelector('.container-fluid');
  // Je stocke l'élément div.container-fluid
  
  let nav = document.querySelector('.navbar-desktop');
  let navA = document.querySelectorAll('.navbar-desktop a');
  let h2 = document.querySelector('h2');
  let btnChange = document.querySelector('.switch .btn');
  let icon = document.querySelector('.switch i');
    
  switchBox.addEventListener('click', changeMode);
  // Je déclare l'écouteur d'évènement click sur la div.switch
  
  function changeMode() {
    container.classList.toggle("container-change");
    // La variable container change de couleur de fond
  
    nav.classList.toggle("nav-dark");
    // La variable nav change de couleur de fond
  
    h2.classList.toggle("white-font");
    // La variable h1 change de couleur
  
    for (let a of navA) {
      a.classList.toggle("white-font");
    } // Chaque a du tableau contenu dans la variable navA change de couleur
  
    btnChange.classList.toggle('btn-change');
    // Je déplace le bouton
  
    icon.classList.toggle('icon-change');
    // if (icon.classList.contains("bi-sun-fill")) {
    //   icon.classList.remove("bi-sun-fill")
    //   icon.classList.add("bi-moon-fill")
    // } else {
    //   icon.classList.remove("bi-moon-fill")
    //   icon.classList.add("bi-sun-fill")
    // }    
  };
  
  // /*
  //     ╔═════════════════════════════════════════════╗
  //     ║                   Cookies                   ║
  //     ╚═════════════════════════════════════════════╝ */
  
  // let bpCookies = document.querySelector(".btn-success");
  // let divCookies = document.querySelector(".cookies");
  
  // bpCookies.addEventListener('click', () => {
  //   divCookies.style.bottom = "auto";
  // })
  
  /*
      ╔═════════════════════════════════════════════╗
      ║               Partie loader                 ║
      ╚═════════════════════════════════════════════╝ */
  
  let loader = document.querySelector("#loader");
  
  window.addEventListener('load', () => {
    loader.classList.add("hide-loader");
  })
  

  /*
      ╔═════════════════════════════════════════════╗
      ║                  Bouton No                  ║
      ╚═════════════════════════════════════════════╝ */

  let btnNo = document.querySelector('#btnNo');

  btnNo.addEventListener('mouseover', ()=> {
    // let x = Math.floor(Math.random()* 80);
    // let y = Math.floor(Math.random()* 80);

    // btnNo.style.left = x + 'rem';
    // btnNo.style.top = y + 'rem';

    function random() {
      return Math.floor(Math.random()* 80);
    }

    btnNo.style.left = random() + 'rem';
    btnNo.style.top = random() + 'rem';
  })

