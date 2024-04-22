/*
╔═════════════════════════════════════════════╗
║               Partie loader                 ║
╚═════════════════════════════════════════════╝ */

let loader = document.querySelector("#loader");

window.addEventListener('load', ()=>{
  loader.classList.add("hide-loader");
})

/*
╔═════════════════════════════════════════════╗
║                   Cookies                   ║
╚═════════════════════════════════════════════╝ */


let bpCookies = document.querySelector(".btn-success");
let divCookies = document.querySelector(".cookies");

bpCookies.addEventListener('click', ()=> {
  divCookies.style.bottom = "auto";
})

/*
    ╔═════════════════════════════════════════════╗
    ║                  DARK MODE                  ║
    ╚═════════════════════════════════════════════╝ */

let switchBox = document.querySelector('.switch');
// Je stocke l'élément div.switch

let container = document.querySelector('.container-fluid');
// Je stocke l'élément div.container-fluid

let nav = document.querySelector('.navbar-desktop');
let navA  = document.querySelectorAll('.navbar-desktop a');
let h1 = document.querySelector('h1');
let btnChange = document.querySelector('.btn');
let icon = document.querySelector('.switch i');
let emoji = document.querySelector('.bloc-btn i');


switchBox.addEventListener('click', changeMode);
// Je déclare l'écouteur d'évènement click sur la div.switch

function changeMode() {
  container.classList.toggle("container-change");
  // La variable container change de couleur de fond

  nav.classList.toggle("nav-dark");
  // La variable nav change de couleur de fond

  h1.classList.toggle("white-font");
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

  emoji.classList.toggle('white-font');
};

/*
    ╔═════════════════════════════════════════════╗
    ║                   KEYBOARD                  ║
    ╚═════════════════════════════════════════════╝ */

  let mario = document.getElementById('mario');

  document.addEventListener('keydown', clavier);

  function clavier(event) {
    console.log(event);
    
    /* L'objet event en JavaScript est un objet qui représente un événement déclenché dans le navigateur :
    - Lorsqu'une action se produit sur une page web (comme un clic de souris, un appui sur une touche du clavier, etc.), un objet event est créé pour encapsuler toutes les informations liées à cet événement. 
    - Cet objet event contient diverses propriétés et méthodes qui fournissent des détails sur l'événement qui s'est produit. Voici quelques-unes des propriétés les plus couramment utilisées :    
    - type: Indique le type d'événement déclenché (par exemple, "click", "keydown", "mousemove", etc.).
    - target: Référence à l'élément DOM sur lequel l'événement s'est produit.
    - keyCode (ou key): Code de la touche du clavier qui a été pressée lors d'un événement keydown.
    - clientX et clientY: Coordonnées horizontales et verticales du pointeur de la souris par rapport à la fenêtre du navigateur.
    - pageX et pageY: Coordonnées horizontales et verticales du pointeur de la souris par rapport à la page web. 
    */
   
  
    console.log(mario.offsetTop);
    // La propriété offsetTop renvoie la position du haut (en pixels) par rapport au haut de l'élément offsetParent. L' élément offsetParent est l'ancêtre le plus proche qui a une position autre que statique

    
    console.log(mario.offsetLeft);
  //  La propriété offsetLeft renvoie la position gauche (en pixels) par rapport au côté gauche de l'élément offsetParent

  /*
  if (event.key == "ArrowUp") {
    mario.style.top = mario.offsetTop - 10 +'px';
    mario.style.rotate = '270deg'; 
    mario.style.transform = 'scaleX(1)';
  }
  else if (event.key == "ArrowDown") {
    mario.style.top = mario.offsetTop + 10 +'px';
    mario.style.rotate = '90deg';
    mario.style.transform = 'scaleX(1)';  
  }
  else if (event.key == "ArrowLeft") {
    mario.style.left = mario.offsetLeft - 10 +'px';
    mario.style.rotate = '0deg';
    mario.style.transform = 'scaleX(-1)';
  }
  else if (event.key == "ArrowRight") {
    mario.style.left = mario.offsetLeft + 10 +'px';
    mario.style.rotate = '0deg';
    mario.style.transform = 'scaleX(1)';
  }
  else if (event.key == "z") {
    mario.style.top = mario.offsetTop - 10 +'px';
    mario.style.left = mario.offsetLeft - 10 +'px';
    mario.style.rotate = '40deg';
    mario.style.transform = 'scaleX(-1)';
  }
  else if (event.key == "s") {
    mario.style.top = mario.offsetTop - 10 +'px';
    mario.style.left = mario.offsetLeft + 10 +'px';
    mario.style.rotate = '-40deg';
    mario.style.transform = 'scaleX(1)';
  }
  else if (event.key == "q") {
    mario.style.top = mario.offsetTop + 10 +'px';
    mario.style.left = mario.offsetLeft - 10 +'px';
    mario.style.rotate = '320deg';
    mario.style.transform = 'scaleX(-1)';
  }
  else if (event.key == "d") {
    mario.style.top = mario.offsetTop + 10 +'px';
    mario.style.left = mario.offsetLeft + 10 +'px';
    mario.style.rotate = '-320deg';
    mario.style.transform = 'scaleX(1)';
  }  */

  /*
  switch(event.code){

    case 'ArrowUp' :
        mario.style.top =  (mario.offsetTop - 10) + "px";

    break;

    case 'ArrowRight' :
        mario.style.left = (mario.offsetLeft + 10 ) + "px";
        mario.style.transform = "scaleX(1)";
    break;

    case 'ArrowDown' :
        mario.style.top = (mario.offsetTop + 10 ) + "px";
    break;

    case 'ArrowLeft' :
        mario.style.left = (mario.offsetLeft - 10 ) + "px";
        mario.style.transform = "scaleX(-1)";

    break;
    case "KeyW" :
          mario.style.left = mario.offsetLeft - 10 + "px";
          mario.style.top = mario.offsetTop - 10 + "px";
          mario.style.rotate= "40deg";
          mario.style.transform = "scaleX(-1)";

   break;
   case "KeyS" :
          mario.style.top = mario.offsetTop - 10 + "px";
          mario.style.left = mario.offsetLeft + 10 + "px";
          mario.style.rotate= "-40deg";
          mario.style.transform = "scaleX(1)";

   break;
   case "KeyA" :
     
          mario.style.top = mario.offsetTop + 10 + "px";
          mario.style.left = mario.offsetLeft - 10 + "px";
          mario.style.rotate= "-40deg";
          mario.style.transform = "scaleX(-1)";

   break;
   case "KeyD" :
          mario.style.left = mario.offsetLeft + 10 + "px";
          mario.style.top = mario.offsetTop + 10 + "px";
          mario.style.rotate= "40deg";
          mario.style.transform = "scaleX(1)";

   break;
}    */

//------------------ if avec keyCode-----------------------------
/*
if(event.keyCode == 38){

    mario.style.top = mario.offsetTop - 10 + 'px';


}else if(event.keyCode == 39){

    mario.style.left = mario.offsetLeft + 10 + 'px';

}else if(event.keyCode == 40){

    mario.style.top = mario.offsetTop + 10 + 'px';

}else if(event.keyCode == 37){

    mario.style.left = mario.offsetLeft - 10 + 'px';

} */


  switch (event.key) {
    case "ArrowUp":
      mario.style.top = mario.offsetTop - 10 +'px';
      mario.style.rotate = '270deg'; 
      mario.style.transform = 'scaleX(1)';
      break;
    case "ArrowDown":
      mario.style.top = mario.offsetTop + 10 +'px';
      mario.style.rotate = '90deg';
      mario.style.transform = 'scaleX(1)';
      break;
    case "ArrowLeft":
      mario.style.left = mario.offsetLeft - 10 +'px';
      mario.style.rotate = '0deg';
      mario.style.transform = 'scaleX(-1)';
      break;
    case "ArrowRight":
      mario.style.left = mario.offsetLeft + 10 +'px';
      mario.style.rotate = '0deg';
      mario.style.transform = 'scaleX(1)';
      break;
    case "z":
      mario.style.top = mario.offsetTop - 10 +'px';
      mario.style.left = mario.offsetLeft - 10 +'px';
      mario.style.rotate = '40deg';
      mario.style.transform = 'scaleX(-1)';
      break;
    case "s":
      mario.style.top = mario.offsetTop - 10 +'px';
      mario.style.left = mario.offsetLeft + 10 +'px';
      mario.style.rotate = '-40deg';
      mario.style.transform = 'scaleX(1)';
      break;
      case "q":
      mario.style.top = mario.offsetTop + 10 +'px';
      mario.style.left = mario.offsetLeft - 10 +'px';
      mario.style.rotate = '320deg';
      mario.style.transform = 'scaleX(-1)';
      break;
    case "d":
      mario.style.top = mario.offsetTop + 10 +'px';
      mario.style.left = mario.offsetLeft + 10 +'px';
      mario.style.rotate = '-320deg';
      mario.style.transform = 'scaleX(1)';
    default:
      break;
  }
 
}
