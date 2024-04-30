
//------------------  Loader ------------- //

let loader = document.querySelector('#loader');
window.addEventListener('load', () => {
       loader.classList.add('hideLoader');
})


// Click et affiche les information sur le mot de passe

// let iconeQuestion = document.querySelector('.fa-question');
// let pMotDePasse = document.querySelector('p');

// iconeQuestion.addEventListener('click', ()=>{

//        pMotDePasse.classList.toggle('show');

// })


let question = document.querySelector('.fa-question');
let pe = document.querySelector('p');


document.addEventListener('click', moovator);

function moovator(event){
    if (event.target === question) {
        pe.classList.toggle('apparition');

    }else{
        pe.classList.remove('apparition')
    }

}
       

// Affichage du mot de passe 
let afficheMdp = document.querySelector('.fa-eye-slash');
let password = document.querySelector('#password');
// console.log(password);
// console.log(password.getAttribute('type'));

 
afficheMdp.addEventListener('click', ()=>{
       switch (password.type) {
              case "password":
                     //  password.setAttribute('type', 'text');
                     password.type = "text";
                     afficheMdp.classList.replace('fa-eye-slash', 'fa-eye');

              break;

              default:
                     // password.setAttribute('type', 'password');
                     password.type = "password";
                     afficheMdp.classList.replace('fa-eye', 'fa-eye-slash');
              
              break;
       
       }

 })

 // Validation du formulaire 

let form = document.querySelector('#form');
let username = document.querySelector('#username');
let email = document.querySelector('#email');
let password2 = document.querySelector('#password2');
let message = "";

function setError(element, infos){

       let formControl = element.parentElement; // je stock le parent de l'élement qui contienr l'erreur (la div avec la classe form-control)
       let small = formControl.querySelector('small');
       //Ajout du message d'erreur
       small.innerText = infos;

       formControl.className = "form-control error";
       // formControl.classList.add('error');
       // formControl.classList.remove('success');
 
}

function setSuccess(element){

       let formControl = element.parentElement;
        formControl.className = "form-control success";
       // formControl.classList.add('success');
       // formControl.classList.remove('error');

}


form.addEventListener('submit', (event)=> {

       event.preventDefault(); // Une méthode utilisée dans les événements JavaScript pour empêcher le comportement par défaut associé à un évenement de se produire.
       formVerif();
      
})

function formVerif(){

       // trim() en JS est utilisée pour supprimer les espaces blanc au début et à la fin d'une chaîne de caractéres
       let usernameValue = username.value.trim();
       let emailValue = email.value.trim();
       let passwordValue = password.value.trim();
       let password2Value = password2.value.trim();

       // Username verify

       if (usernameValue == "") { // je vérifie si le champ username est vide
              // si c'est le cas je définie un message d'erreur approprié
              message = 'Username ne peut pas être vide';  
              setError(username, message) ;

       }else if(!usernameValue.match(/^[a-zA-Z]+$/)){
            
              /* 
                     La méthode `match()` en JavaScript est utilisée pour faire correspondre une chaîne à une expression régulière. Lorsqu'il est appelé sur une chaîne, il renvoie un tableau contenant les correspondances, ou « null » si aucune correspondance n'est trouvée.
                     
                     ^ : C'est un ancrage qui indique le début de la chaîne. La correspondance doit commencer au début de la chaîne.
                     [a-zA-Z] : C'est une classe de caractères qui correspond à n'importe quelle lettre de l'alphabet anglais, qu'elle soit en minuscule (a-z) ou en majuscule (A-Z).
                     + : C'est un quantificateur qui signifie "une ou plusieurs fois". Il indique que la classe de caractères [a-zA-Z] doit apparaître une ou plusieurs fois dans la chaîne.
                     $ : C'est un ancrage qui indique la fin de la chaîne. La correspondance doit se terminer à la fin de la chaîne.
              */

              message = 'Username ne\'est pas valide, username doit contenir que des lettres ';  

              setError(username, message) ;

       }else{

              let lengthUsername = usernameValue.length;
              // console.log(lengthUsername);
              if (lengthUsername < 3) {

                     message = "Username doit avoir au moins 3 caractéres";
                     setError(username,message);
                     
              } else {
                     setSuccess(username);

                     
              }
       }

       // email verify

       let regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,6}$/;
       /**
       ^: Indique le début de la chaîne.
        [a-z0-9._-]+: Correspond à une ou plusieurs occurrences de caractères minuscules de l'alphabet (a-z), chiffres (0-9), ou des caractères spéciaux (._-). Ce groupe représente la partie locale de l'adresse e-mail (avant le '@').
        @: Représente le caractère '@', qui sépare la partie locale du nom de domaine.
        [a-z0-9._-]{2,}: Correspond à une séquence d'au moins deux caractères parmi les caractères minuscules de l'alphabet, les chiffres, ou les caractères spéciaux (._-). Ceci représente le nom de domaine de niveau supérieur (TLD).
        \.: Représente le caractère point (".") qui sépare le nom de domaine de niveau supérieur du nom de domaine de premier niveau.
        [a-z]{2,4}: Correspond à une séquence de 2 à 4 caractères minuscules de l'alphabet, représentant l'extension du nom de domaine de premier niveau (par exemple, "com", "net", "org", etc.).
        $: Indique la fin de la chaîne.
     */

       if (emailValue == "") { // je vérifie si le champ username est vide
              // si c'est le cas je définie un message d'erreur approprié
              message = 'Email ne peut pas être vide';  
              setError(email, message) ;

       }else if (!regexEmail.test(emailValue)) {

              message = 'Email n\est pas valide';  
              setError(email, message) ;

              
       }else {
              setSuccess(email);
       }

       // password verify

       let regexPassWord = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/;

         
    /**
        Cette expression régulière est utilisée pour valider les mots de passe selon certains critères de complexité. Décortiquons-la morceau par morceau :
    
        - ^: Indique le début de la chaîne.
        - (?=.*[0-9]): Utilisation d'une "recherche positive anticipée" pour  vérifier la présence d'au moins un chiffre ([0-9]).
        - (?=.*[!@#$%^&*]): Recherche positive anticipée pour vérifier la présence d'au moins un caractère spécial parmi ceux spécifiés (!@#$%^&*).
        - [a-zA-Z0-9!@#$%^&*]: Correspond à tous les caractères autorisés dans le mot de passe. Cela inclut les lettres minuscules et majuscules de l'alphabet, les chiffres, ainsi que les caractères spéciaux !@#$%^&*.
        - {8,12}: Indique que la longueur du mot de passe doit être comprise entre 8 et 12 caractères inclusivement.
        - $: Indique la fin de la chaîne. 
    */


       if (passwordValue == "") { // je vérifie si le champ username est vide
              // si c'est le cas je définie un message d'erreur approprié
              message = 'Le mot de passe ne peut pas être vide ';  
              setError(password, message) ;

       }
       else if(!regexPassWord.test(passwordValue)) {

              message = 'Le mot de passe n\'est pas valide';  
              setError(password, message) ;

       } else {

              setSuccess(password);
       }
       // password2 verify
       if (password2Value == "") { // je vérifie si le champ username est vide
              // si c'est le cas je définie un message d'erreur approprié
              message = 'La confirmation du mot de passe ne peut pas être vide ';  
              setError(password2, message) ;

       }else if(password2Value != passwordValue){

              message = 'La confirmation du mot de passe ne correspondent pas  ';  
              setError(password2, message) ;

       }else {

              setSuccess(password2);

       }
      
}






