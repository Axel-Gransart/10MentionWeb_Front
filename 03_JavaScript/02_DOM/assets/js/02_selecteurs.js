// alert("ok");

// Afin de modifier notre page HTML selon les intéractions d'un utilisateur, nous allons modifier notre DOM grâce à JavaScript

/*
    ╔═════════════════════════════════════════════╗
    ║         SELECTIONNER NOS ELEMENTS           ║
    ╚═════════════════════════════════════════════╝ */

  
//    Sélection via tag (balise)

let title = document.getElementsByTagName("h1");  
console.log(title);

let lesP = document.getElementsByTagName('p'); // On cherche tout les tags 'p' de notre page
//    On récupère un array (tableau) d'éléments 
console.log(lesP);

//    Grâce à ma variable dans laquelle j'ai sélectionné tout les 'p', je peux viser un seul des éléments via son index.
//    Pour faire du CSS, j'utilise la propriété 'style' suivi des mêmes déclarations que j'utilise en CSS, avec du camelCase à la place du kebab-case.
//    La propriété 'style' permet d'acceder finement au style qui concerne un élément particulier

lesP[0].style.backgroundColor = 'red';
lesP[0].style.color = 'white';
lesP[0].style.fontWeight = 'bold';






//    Sélection via id (#identifiant)

let titre = document.getElementById("titre");
console.log(titre);

titre.style.color = "brown";
titre.style.backgroundColor = "pink";
titre.style.borderRadius = "10px";




//    Sélection via class (.classe)

let selectClass = document.getElementsByClassName("selectClass");
console.log(selectClass);

selectClass[1].style.color = "blue";

console.log(selectClass[1].innerHTML);
//    Lorsqu'on sélectionne plusieurs éléments en même temps avec getElementsByClassName, on crée un array en JavaScript qui affiche dans la console avec l'intitulé HTMLCollection. Comme un tableau, le premier élément aura l'index 0.

//    innerHTML est une propriété en JavaScript qui permet d'accéder ou de définir le contenu HTML d'un élément. Elle renvoie ou modifie le contenu HTML (c'est-à-dire les balises et le texte) à l'intérieur de l'élément spécifié.




//    Sélection via querySelector() (selectionne le premier élément trouvé)

// La méthode querySelector() retourne le 1er élément trouvé spécifié en paramètre.
// L'avantage de querySelector c'est qu'il utilise la syntaxe de sélection CSS -> #monId .maClass <balise> (sans les chevrons).

let div = document.querySelector('div');
div.style.border = '1px solid #000';


let span = document.querySelector('.bg-success p span'); //   querySelector permet d'utiliser les mêmes selecteurs que sur CSS
console.log(span.innerHTML);


//    Sélection via querySelectorAll() (selectionne tout les éléments trouvés)

// Sélectionne tout les sélecteurs en ensemble et retourne un array (pour les .class et les tag)

let query = document.querySelectorAll('.selectClass');

console.log(query); //  On a 3 paragraphe qui ont la classe selectClass

for ( let p of query ) {
  console.log(p.innerText);
};
//La propriété innerText est similaire à innerHTML, mais elle fonctionne avec le texte brut à l'intérieur d'un élément, plutôt qu'avec le HTML. Elle permet d'accéder au texte contenu dans un élément HTML et de le modifier si nécessaire.

let rajout = document.querySelector('.bg-success p');
// rajout.innerHTML = "<strong>Je suis là</strong>";
rajout.innerText = "Je suis là";




// CREATION D'UN NOUVEL ELEMENT

let section = document.querySelector('section');

let nouveauParaFin = document.createElement('p'); //    Pour créer un nouvel élément, nous utilisons la méthode createElement()

nouveauParaFin.innerHTML = "Coucou, je suis ton <strong>nouveau paragraphe</strong> à la <strong>fin</strong> de la section";
nouveauParaFin.style.color = "red";  //     Je le rempli grâce à innerHTML, change son style

section.append(nouveauParaFin); //     Puis nous l'intégrons dans le noeud souhaité

//      Append() -> insère du contenu à la fin de la section. Il accepte tout les éléments (balise ou string).


let nouveauParaDebut = document.createElement('p');

nouveauParaDebut.innerHTML = "Coucou, je suis ton <strong>nouveau paragraphe</strong> au <strong>début</strong> de la section";
nouveauParaDebut.style.color = "green";

section.prepend(nouveauParaDebut); 

// prepend() -> insère du contenu au début de la section. Il accepte tout les éléments (balise ou string).


// DEPLACER UN ELEMENT

//    Pour déplacer un élément, il faut 3 paramètres
/*      -> Le parent qui va accueillir l'élément
        -> L'élément à déplacer
        -> L'élément qui vient après
*/

let parent = document.querySelector("main");
let jeBouge = document.querySelector("h4");
let elementAprès = document.querySelector(".subtitle");

parent.insertBefore(jeBouge, elementAprès); //    insertBefore() -> 2 arguments (élément que l'on veut bouger, élément qui vient après)
//    Elément parent où il se trouve.insertBefore(élément que l'on veut bouger, élément qui vient après)

// SUPPRIMER UN ELEMENT

//    Pour supprimer un élément, il faut 2 paramètres :
/*      -> Le parent
        -> L'élément à supprimer
*/

let ul = document.querySelector("ul");
let li = document.querySelector("ul :nth-child(2)");
// let li = document.getElementsByTagName('li')[1]; //  Equivalent à la ligne du dessus

ul.removeChild(li); // Pour supprimer un élément, on utilise removeChild()
//    Elément parent où il se trouve.removeChild(élément à supprimer)


//  CREER UN ATTRIBUT ET SA VALEUR

//    setAttribute() : méthode pour ajouter un nouvel attribut ou changer la valeur d'un attribut existant pour un élément

let baliseA = document.querySelector("a");
baliseA.setAttribute("mon_attribut", "valeurAttribut"); //  rajoute un attribut à la balise a
//  Pour l'attribut, il prend en compte snake_case et kebab-case

baliseA.setAttribute("href", "01_introduction.html"); //   Change la valeur de l'attribut href









// MINI EXO 1 : modifier le contenu du h2 qui a la classe .subtitle : 'Je change le titre, youhou'

let subtitle = document.getElementsByClassName("subtitle");

subtitle[0].innerHTML = "<strong>Ceci est le titre modifié avec JavaScript</strong>";
subtitle[0].style.backgroundColor = "darkgrey";
subtitle[0].style.borderRadius = "10px";


//    MINI EXO 2 : Sélectionner tous les p dans la page et changer le texte en majuscules.

//    1ère façon de faire
// for (let i = 0; i < lesP.length; i++) {
//   lesP[i].style.textTransform = "uppercase";  
// };


//    2ème façon de faire
for ( let p of lesP ) {
  p.style.textTransform = "uppercase"; 
};

//    Boucle for of : je déclare une variable p qui représente chaque élément dans le tableau lesP, au niveau de l'instruction à exécuter j'appelle la variable p en lui attribuant le style souhaité avec la propriété style.




//    MINI EXO 3 : Grâce à votre script, créez une balise a dans la balise h1 avec le lien vers la documentation JS () qui s'affiche sur un nouvel onglet.
// Ce lien sera de couleur blanche et non souligné.

let baliseADocJS = document.querySelector("a");

baliseADocJS.innerText = 'Cours JavaScript';
titre.innerText = "";
baliseADocJS.style.color = "white";
baliseADocJS.style.textDecoration = "none";
baliseADocJS.setAttribute("href", "https://developer.mozilla.org/fr/docs/Web/JavaScript");
baliseADocJS.setAttribute("target", "_blank");
titre.append(baliseADocJS);





// 2ème façon de faire

let facon2 = document.querySelector("#facon2");

facon2.innerHTML = "<a> Cours JavaScript 2ème essai </a>";
let element2 = document.querySelector("#facon2 a");
element2.setAttribute("href", "https://developer.mozilla.org/fr/docs/Web/JavaScript");
element2.setAttribute("target", "_blank");
element2.style.color = "blue";
element2.style.textDecoration = "none";




// 3ème façon de faire

let facon3 = document.querySelector("#facon3");

facon3.innerHTML = `<a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" target="_blank"> Paragraphe 1 + lien doc JS </a>`
let element3 = document.querySelector("#facon3 a");
element3.style.color = "pink";
element3.style.textDecoration = "none";
