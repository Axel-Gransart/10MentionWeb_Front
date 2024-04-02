
// alert("La feuille de script est bien liée");


// DARK MODE

let switchBox = document.querySelector('.switch');
// Je stocke l'élément div.switch

let container = document.querySelector('.container-fluid');
// Je stocke l'élément div.container-fluid

let nav = document.querySelector('.navbar-desktop');
let navA  = document.querySelectorAll('.navbar-desktop a');
let h1 = document.querySelector('h1');
let btnChange = document.querySelector('.btn');
let icon = document.querySelector('.switch i');


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

};

let emoji = document.querySelector('.bloc-btn i');

emoji.addEventListener('click', modifEmoji);

function modifEmoji() {
  if (emoji.classList.contains("bi-emoji-neutral")) {
      emoji.classList.remove("bi-emoji-neutral")
      emoji.classList.toggle("btn-click")
      emoji.classList.add("bi-emoji-heart-eyes")
    } else {
      emoji.classList.remove("bi-emoji-heart-eyes")
      emoji.classList.toggle("btn-click")
      emoji.classList.add("bi-emoji-neutral")
    }
}

let bpAbo = document.querySelector('.btn-abonner');

bpAbo.addEventListener('click', function() {
  bpAbo.textContent = "Abonné !!!!";
})



