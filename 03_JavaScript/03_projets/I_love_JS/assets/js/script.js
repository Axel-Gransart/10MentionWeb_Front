
// alert("La feuille de script est bien liée");


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
    ║                Partie vidéo                 ║
    ╚═════════════════════════════════════════════╝ */

  

emoji.addEventListener('click',()=> {
  // if (emoji.classList.contains("bi-emoji-neutral")) {
  //     emoji.classList.remove("bi-emoji-neutral")
  //     emoji.classList.toggle("btn-click")
  //     emoji.classList.add("bi-emoji-heart-eyes")
  // }
  // else {
  //     emoji.classList.remove("bi-emoji-heart-eyes")
  //     emoji.classList.toggle("btn-click")
  //     emoji.classList.add("bi-emoji-neutral")
  // }
  emoji.classList.toggle("bi-emoji-wink-fill");
});

let bpAbo = document.querySelector('.btn-abonner');

bpAbo.addEventListener('click', function() {
  if (bpAbo.innerText === "Abonnez-vous") {
    bpAbo.innerHTML = 'Abonné !!!! <i class="bi bi-check"></i>';    
  }
  else {
    bpAbo.innerText = "Abonnez-vous";
  }
});

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
    ║              Partie carousel                ║
    ╚═════════════════════════════════════════════╝ */

let left = document.querySelector(".left");
let automatic = document.querySelector(".automatic");
let right = document.querySelector(".right");
let img = document.querySelector("img");
let automaticIcon = document.querySelector(".automatic i");

let i = 1;

right.addEventListener('click', carousel)

function carousel() {
  i++;  // on incrémente puis on affecte : la valeur de la variable sera donc 1 / puis 2 /puis 3/ etc.
  img.setAttribute('src', `assets/img/${i}.jpg`);
  img.setAttribute('alt', `Image ${i}`);  // j'appelle de façon automatique les images par leur nom
  if (i==7) {
    i = 1;
    img.setAttribute('src', `assets/img/${i}.jpg`);
    img.setAttribute('alt', `Image ${i}`);
  }   
}

left.addEventListener('click', ()=>{
  i--;  
  img.setAttribute('src', `assets/img/${i}.jpg`);
  img.setAttribute('alt', `Image ${i}`);
  if (i==0) {
    i = 6;
    img.setAttribute('src', `assets/img/${i}.jpg`);
    img.setAttribute('alt', `Image ${i}`);
  }   
});

let statut = null; // Initialisation d'une variable pour stocker l'état du slider (lecture ou pause)

automatic.addEventListener('click', ()=>{
   // Inversion de la classe 'bi-pause-fill' sur l'élément automaticIcon à chaque clic
  automaticIcon.classList.toggle("bi-pause-fill");
  // Vérification de l'état actuel du slider
  if (statut == null) {
    // Si le slider est en pause
      // Activation du mode lecture : exécution de la fonction carrousel toutes les 1500 millisecondes (1.5 secondes)

   statut = window.setInterval(carousel,1500); // setInterval est utilisé pour exécuter une fonction à intervalles réguliers
  }
  else {
    // Si le slider est en lecture
      // Désactivation du mode lecture : arrêt de l'exécution de la fonction carrousel à intervalles réguliers

    window.clearInterval(statut); // clearInterval est utilisé pour arrêter l'exécution de cette fonction à intervalles réguliers en utilisant l'identifiant de l'intervalle retourné par setInterval.

    statut = null // Réinitialisation de la variable statut à null pour indiquer que le slider est en pause
  }
})

/*
    ╔═════════════════════════════════════════════╗
    ║               Partie loader                 ║
    ╚═════════════════════════════════════════════╝ */

let loader = document.querySelector("#loader");

window.addEventListener('load', ()=>{
  loader.classList.add("hide-loader");
})
