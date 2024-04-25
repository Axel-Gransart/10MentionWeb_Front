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
    let h2 = document.querySelector('h2');
    let btnChange = document.querySelector('.btn');
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
    ║               Partie loader                 ║
    ╚═════════════════════════════════════════════╝ */
    
    let loader = document.querySelector("#loader");
    
    window.addEventListener('load', ()=>{
      loader.classList.add("hide-loader");
    })

/*
    ╔═════════════════════════════════════════════╗
    ║                 Partie mdp                  ║
    ╚═════════════════════════════════════════════╝ */

    let interrogation = document.querySelector(".fa-question");
    let mdpText = document.querySelector(".mdp p");

    // interrogation.addEventListener('click', ()=> {
    //   mdpText.classList.toggle('hidden');
    // })

    document.addEventListener('click', (event)=> {
      if (event.target === interrogation) {
        mdpText.classList.toggle('hidden');
      } else {
        mdpText.classList.add('hidden');
      }
    })    

    let afficheMdp = document.querySelector(".fa-eye-slash");
    let password = document.querySelector("#password");

    afficheMdp.addEventListener('click', ()=> {
      switch (password.type) {
        case 'password' :
          password.type = 'text';
          afficheMdp.classList.replace("fa-eye-slash", "fa-eye");        
          break;    
        default:
          password.type = 'password';
          afficheMdp.classList.replace("fa-eye", "fa-eye-slash"); 
          break;
      }
    })    

/*
    ╔═════════════════════════════════════════════╗
    ║           Validation du formulaire          ║
    ╚═════════════════════════════════════════════╝ */  

    let form = document.querySelector("form");
    let username = document.querySelector("#username");
    let email = document.querySelector("#email");
    let password2 = document.querySelector("#password2");
    let message = "";

    let filtreMail = /.+@.+\..+/;

    form.addEventListener('submit', (e)=> {
      e.preventDefault(); // Une méthode utilisée dans les évènements JS pour empêcher le comportement par défaut associé à un évènement de se produire.
      formVerif();
    })

    function formVerif() {

      let userValue = username.value.trim();
      let emailValue = email.value.trim();
      let passwordValue = password.value.trim();
      let password2Value = password2.value.trim();
      // trim() en js est utilisé pour supprimer les espaces blanc au début et à la fin d'une chaîne de caractères. 

      // console.log(userValue);
      // console.log(userValue.length);
      // console.log(emailValue);
      // console.log(passwordValue);

      if (userValue == "") { // Je vérifie si le champs username est vide
        message = "Le nom d'utilisateur ne peux pas être vide";
        // Si c'est le cas, je définis un message d'erreur approprié
        setError(username, message);
      }
      else if (!userValue.match(/^[a-zA-Z]+$/)) {
      /* La méthode `match()` en JavaScript est utilisée pour faire
        correspondre une chaîne à une expression régulière.
        Lorsqu'il est appelé sur une chaîne, il renvoie un tableau contenant les correspondances, ou « null » si aucune correspondance n'est trouvée. */

      /* La méthode `match( /^[a-zA-Z]+$/)` est utilisée pour vérifier si une chaîne contient uniquement des caractères alphabétiques (lettres) et aucun autre caractère. */

      /* La méthode `match()` en JavaScript est utilisée pour faire correspondre une chaîne à une expression régulière. Lorsqu'il est appelé sur une chaîne, il renvoie un tableau contenant les correspondances, ou « null » si aucune correspondance n'est trouvée.

      La méthode `match( /^[a-zA-Z]+$/)` est utilisée pour vérifier si une chaîne contient uniquement des caractères alphabétiques (lettres) et aucun autre caractère.  
        ^ : C'est un ancrage qui indique le début de la chaîne. La correspondance doit commencer au début de la chaîne.
        [a-zA-Z] : C'est une classe de caractères qui correspond à n'importe quelle lettre de l'alphabet anglais, qu'elle soit en minuscule (a-z) ou en majuscule (A-Z).
        + : C'est un quantificateur qui signifie "une ou plusieurs fois". Il indique que la classe de caractères [a-zA-Z] doit apparaître une ou plusieurs fois dans la chaîne.
        $ : C'est un ancrage qui indique la fin de la chaîne. La correspondance doit se terminer à la fin de la chaîne. */

        message = "Le nom d'utilisateur n'est pas valide, il doit contenir uniquement des lettres";
        setError(username, message);
      }      
      else {
        let lengthUser = userValue.length;
        if (lengthUser < 3 ) {
          message = "Le nom d'utilisateur doit contenir au moins 3 caractères";
          setError(username, message);
        }
        else {
          message = "Le nom d'utilisateur est valide";
          setOk(username, message);
        }
      }


      let regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,6}$/;
      /*
      - ^: Indique le début de la chaîne.
      - [a-z0-9._-]+: Correspond à une ou plusieurs occurrences de caractères minuscules de l'alphabet (a-z), chiffres (0-9), ou des caractères spéciaux (._-). Ce groupe représente la partie locale de l'adresse e-mail (avant le '@').
      - @: Représente le caractère '@', qui sépare la partie locale du nom de domaine.
      - [a-z0-9._-]{2,}: Correspond à une séquence d'au moins deux caractères parmi les caractères minuscules de l'alphabet, les chiffres, ou les caractères spéciaux (._-). Ceci représente le nom de domaine de niveau supérieur (TLD).
      - \.: Représente le caractère point (".") qui sépare le nom de domaine de niveau supérieur du nom de domaine de premier niveau.
      - [a-z]{2,4}: Correspond à une séquence de 2 à 4 caractères minuscules de l'alphabet, représentant l'extension du nom de domaine de premier niveau (par exemple, "com", "net", "org", etc.).
      - $: Indique la fin de la chaîne.
     */


      if (emailValue == "") {
        message = "Votre adresse email doit être renseignée";
        setError(email, message);
      }
      else if (!regexEmail.test(emailValue)) {
        message = "Votre adresse mail n'est pas correct !! tu te souviens pas de ton adresse mail ? C'est abusé !!!!";
        setError(email, message);
      }
      else if (regexEmail.test(emailValue)) {
        message = "Votre adresse mail est correct !! Vous êtes doué !!";
        setOk(email, message);
      }

      if (passwordValue == "") {
        message = "Vous n'avez pas entré votre mot de passe";
        setError(password, message);
      }
      else if (!passwordValue.match(/^(?=.*[A-Z])(?=.*[!@.#_$&*-])(?=.*[0-9])(?=.*[a-z]).{8,12}$/)) {
        message = "Votre mot de passe n'est pas bon, vous devez fournir vos 35 dernières fiches de payes, une prise de sang de moins de 2 jours, un test PCR négatif de moins de 14h, du crin de licorne véritable et une photo de lutin irlandais";
        setError(password, message);
      }
      else {
        message = "Votre mot de passe est correct !! Vous êtes doué !!";
        setOk(password, message);
      }

      if (password2Value == "") {
        message = "Vous devez renseigner la confirmation du mot de passe";
        setError(password2, message);
      }
      else if (password2Value != passwordValue) {
        message = "Tu sais pas recopier un mot de passe que tu viens de taper ? Appuies sur l'oeil et retape le comme il faut, j'ai pas de temps à perdre";
        setError(password2, message);
      }
      else {
        message = "Votre confirmation de mot de passe est correct !! Vous pouvez enfin vous inscrire !!";
        setOk(password2, message);
      }
      


      // if (userValue != "" && emailValue != "" && passwordValue != "" && password2Value == passwordValue) {
      //   form.submit();
      // }
      // else {
      //   alert("Le formulaire n'est pas bien rempli");
      // }
    }

    function setError(element, infos) {
      let formControl = element.parentElement; // Je stocke le parent de l'élément qui contient l'erreur (la div avec la classe form-control)
      formControl.classList.add('error');
      formControl.classList.remove('ok');
      let small = formControl.querySelector("small");
      //  Ajout du message d'erreur
      small.innerText = infos;      
    }

    function setOk(element, infos) {
      let formControl = element.parentElement; // Je stocke le parent de l'élément qui contient l'erreur (la div avec la classe form-control)
      formControl.classList.add('ok');
      formControl.classList.remove('error');
      let small = formControl.querySelector("small");
      //  Ajout du message d'erreur
      small.innerText = infos;      
    }

