


/* Les évènement vont me permettre de déclencher une fonction c'est à dire une série d'instruction, suite à une action de mon utilisateur..

//  OBJECTIF : Étre en mesure de capturer ces évènements afin d'exécuter une fonction

  Les Évènement MOUSE (Souris):

    ->  click : au click sur un élément
    ->  mouseover : la souris passe au dessus de le zone d'un élément
    ->  mouseout : la souris sort de la zone d'un élément*

    
  Les Évènements KEYBOARD (Clavier):

    ->  Keydown : une touche du clavier est enfoncée
    ->  Keyup : une touche du clavier a été relachée


  Les Évènements WINDOW (Fenêtre)

    ->  scroll : défilement de la fenêtre 
    ->  resize : redimensionnement de la fenêtre


  Les Évènements FORM (formulaire)

    ->  Change : pour les éléments <input>, <select> et <textearea>
    ->  submit : à l'envoi du formulaire 
    ->  input : pour capter la saisie  d'un utilisateur sur un champ <input>


  ------------------ Les écouteurs d'évènements -------------------

  Pour attacher un évènementà un élèment, ou autrement dit, pour déclencher un écouteur d'évènement qui se chargera de déclencher une fonction, je vais utliser la syntaxe suivante :
      selecteur.addEventListener('évènement', fonction);

        Etape 1 -> selectionner les elements
        Etape 2 -> Créer les fonctions qui seront executé par l'evenement
        Etape 3 -> Poser l'écouteur d'evenement pour l'intéraction
*/

//    CLICK


let divRouge = document.querySelector('#rouge'); 
//   Je sélectionne ma div grâce à son id ensuite je lui ajoute un écouteur d'évènement

let appelDiv = document.querySelector('#appelDiv'); 

divRouge.addEventListener("click", fDivRouge)
//   L'écouteur d'évènement se décompose en 2 arguments
//    1 -> l'action (ici le 'click')
//    2 -> le nom de la fonction (ici fDivRouge) 

function fDivRouge() {
  if (appelDiv.textContent == "#rouge") {
    divRouge.style.backgroundColor = "gold";
    divRouge.style.borderRadius = "50%";
    divRouge.textContent = "#gold";
    appelDiv.innerText = "#gold";    
  }
  else {
    divRouge.style.backgroundColor = "red";
    divRouge.style.borderRadius = "0%";
    divRouge.textContent = "#rouge";
    appelDiv.innerText = "#rouge";    
  }
};

function fP1() {
  alert("Le paragraphe est cliqué");
}

//    DBLCLICK

let divOrange = document.querySelector('#orange'); 

let appelDiv2 = document.querySelector('#appelDiv2');

divOrange.addEventListener("dblclick",function() {
  if (appelDiv2.textContent == "#orange") {
    divOrange.style.backgroundColor = "lightblue";
    divOrange.style.borderRadius = "50%";
    divOrange.textContent = "#lightblue";
    appelDiv2.innerText = "#lightblue";    
  }
  else {
    divOrange.style.backgroundColor = "orange";
    divOrange.style.borderRadius = "0%";
    divOrange.textContent = "#orange";
    appelDiv2.innerText = "#orange";    
  }
});

function dbl() {
  alert("Suite à un double click, j'affiche cette alerte")
}


//    MOUSEOVER

let divBleue = document.querySelector('#bleue'); 

let appelDiv3 = document.querySelector('#appelDiv3');


divBleue.addEventListener("mouseover",function() {
  if (appelDiv3.textContent == "#bleue") {
    divBleue.style.backgroundColor = "lightgreen";
    divBleue.style.borderRadius = "50%";
    divBleue.textContent = "#green";
    appelDiv3.innerText = "#lightgreen";    
  }
  else {
    divBleue.style.backgroundColor = "rgb(77, 181, 205)";
    divBleue.style.borderRadius = "0%";
    divBleue.textContent = "#bleue";
    appelDiv3.innerText = "#bleue";    
  }
});

let h2Hover = document.querySelector("#h2Hover");

function hover() {
  h2Hover.textContent = "Je suis survolé !!!!!"
}

function out() {
  h2Hover.textContent = "Autre exemple, avec mouseover"
}



//    MOUSEOUT

let divPrimary = document.querySelector('#primary'); 

let appelDiv4 = document.querySelector('#appelDiv4');

divPrimary.addEventListener('mouseout', ()=> {
  if (appelDiv4.textContent == "#primary") {
    divPrimary.style.backgroundColor = "limegreen";
    divPrimary.style.borderRadius = "50%";
    divPrimary.textContent = "#limegreen";
    appelDiv4.innerText = "#limegreen";    
  }
  else {
    divPrimary.style.backgroundColor = "#333";
    divPrimary.style.borderRadius = "0%";
    divPrimary.textContent = "#primary";
    appelDiv4.innerText = "#primary";    
  }
});

let h2Out = document.querySelector("#h2Out");

function out2() {
  h2Out.textContent = "J'ai été survolé !!! wouuuhhhaaaaaa"
}




//    CLICK (if else)

let divChangeCouleur = document.getElementById('success');

let appelDiv5 = document.querySelector('#appelDiv5');

divChangeCouleur.addEventListener('click', ()=> {
  if (divChangeCouleur.classList.contains("vert")) {  //  Je vérifie si mon élément contient la classe 'vert'
    divChangeCouleur.classList.remove("vert");
    divChangeCouleur.classList.add("brown");
    divChangeCouleur.style.borderRadius = "50%";
    divChangeCouleur.textContent = "#brown";
    appelDiv5.textContent = "#brown";
  }
  else {
    // divChangeCouleur.style.backgroundColor = "rgb(25, 135, 84)";
    divChangeCouleur.style.borderRadius = "0%";
    divChangeCouleur.textContent = "#vert";
    appelDiv5.textContent = "#vert";
    divChangeCouleur.classList.add("vert");
    divChangeCouleur.classList.remove("brown");
  }
})


//    CACHE-CACHE

let imgChat = document.querySelector('img');

imgChat.style.width = '300px';

let cacheCache = document.querySelectorAll('#cacheCache p');
console.log(cacheCache);

// boucle for of

// for (let p of cacheCache) {
//   p.style.textDecoration = 'underline';
//   p.style.fontWeight = 'bold';
//   p.style.color = '#ff3366';
// }


// boucle for

// for (let i = 0; i < cacheCache.length; i++) {
//   cacheCache[i].style.textDecoration = 'underline';
//   cacheCache[i].style.fontWeight = 'bold';
//   cacheCache[i].style.color = '#ff3366';
// }



// boucle while

let i = 0;

while (i < cacheCache.length) {
  cacheCache[i].style.textDecoration = 'underline';
  cacheCache[i].style.fontWeight = 'bold';
  cacheCache[i].style.color = '#ff3366';
  i++
}


cacheCache[0].addEventListener('click', ()=> {
  imgChat.classList.add('hide');
})

cacheCache[1].addEventListener('click', ()=> {
  imgChat.classList.remove('hide');
})

cacheCache[2].addEventListener('click', ()=> {
  imgChat.classList.toggle('hide');
})