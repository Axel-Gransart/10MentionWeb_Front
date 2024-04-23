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

      console.log(userValue);
      console.log(userValue.length);
      console.log(emailValue);
      console.log(passwordValue);

      if (userValue == "") { // Je vérifie si le champs username est vide
        message = "Le nom d'utilisateur ne peux pas être vide";
        // Si c'est le cas, je définis un message d'erreur approprié
      }

      setError(username, message)

      if (userValue != "" && emailValue != "" && passwordValue != "" && password2Value == passwordValue) {
        form.submit();
      }
      else {
        alert("Le formulaire n'est pas bien rempli");
      }
    }

    function setError(element, infos) {
      let formControl = element.parentElement; // Je stocke le parent de l'élément qui contient l'erreur (la div avec la classe form-control)

      let small = formControl.querySelector("small");
    }

  