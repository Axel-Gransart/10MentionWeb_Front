
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

// let bpCookies = document.querySelector(".btn-success");
// let divCookies = document.querySelector(".cookies");

// bpCookies.addEventListener('click', ()=> {
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
    ║                 Partie mdp                  ║
    ╚═════════════════════════════════════════════╝ */

let interrogation = document.querySelector(".fa-question");
let mdpText = document.querySelector(".mdp p");

// interrogation.addEventListener('click', ()=> {
//   mdpText.classList.toggle('hidden');
// })

document.addEventListener('click', (event) => {
  if (event.target === interrogation) {
    mdpText.classList.toggle('hidden');
  }
  else {
    mdpText.classList.add('hidden');
  }
})

let afficheMdp = document.querySelector(".fa-eye-slash");
let password = document.querySelector("#password");

afficheMdp.addEventListener('click', () => {
  switch (password.type) {
    case 'password':
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

let form = document.querySelector('#form');
let username = document.querySelector('#username');
let email = document.querySelector('#email');
let password2 = document.querySelector('#password2');
let message = "";
let myAlert = document.querySelector('#alert');
let allFormControl = document.querySelectorAll('.form-control');

function setError(element, infos) {
  let formControl = element.parentElement; // je stock le parent de l'élement qui contienr l'erreur (la div avec la classe form-control)
  let small = formControl.querySelector('small');
  //Ajout du message d'erreur
  small.innerText = infos;

  formControl.className = "form-control error";
  // formControl.classList.add('error');
  // formControl.classList.remove('success');
}

function setSuccess(element) {
  let formControl = element.parentElement;
  formControl.className = "form-control ok";
  // formControl.classList.add('success');
  // formControl.classList.remove('error');
}


form.addEventListener('submit', (event) => {
  
  event.preventDefault(); // Une méthode utilisée dans les événements JavaScript pour empêcher le comportement par défaut associé à un évenement de se produire.
  
  
  let usernameValue = username.value.trim();
  let emailValue = email.value.trim();
  let passwordValue = password.value.trim();
  let password2Value = password2.value.trim();

  let donnees = [usernameValue, emailValue, passwordValue, password2Value];


  // Username verify

  if (donnees.includes("")) {
    myAlert.innerHTML = '<p class="alert alert-danger" role="alert">Veuillez renseigner tout les champs</p>';

    for (let form of allFormControl) {
      form.className = "form-control error";
    }

  }
  else {
    myAlert.innerHTML = '';  
    
    if (!usernameValue.match(/^[a-zA-Z]+$/)) {
      message = 'Username ne\'est pas valide, username doit contenir que des lettres ';
      setValidation(username, message);
      
    }
    else {
      let lengthUsername = usernameValue.length;
      // console.log(lengthUsername);
      
      if (lengthUsername < 3) {
        message = "Username doit avoir au moins 3 caractéres";
        setValidation(username, message);
        
      }
      else {
        setValidation(username);
        
      }
    }
    
    // email verify
    
    let regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,6}$/;
    
    if (!regexEmail.test(emailValue)) {
      message = 'Email n\est pas valide';
      setValidation(email, message);
      
    }
    else {
      setValidation(email);
    }
    
    // password verify
    
    let regexPassWord = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/;
    
    if (!regexPassWord.test(passwordValue)) {
      message = 'Le mot de passe n\'est pas valide';
      setValidation(password, message);
    }
    else {
    setValidation(password);
    }
    // password2 verify
    if (password2Value != passwordValue) {
      message = 'La confirmation du mot de passe ne correspondent pas  ';
      setValidation(password2, message);
      
    }
    else {
      setValidation(password2);
      
    }
  }
});

function setValidation(elem, message) {
  let formControl = elem.parentElement;
  let small = formControl.querySelector('small');

  if (message != null) {
    small.innerText = message;
    formControl.className = "form-control error";
  }
  else {
    formControl.className = 'form-control ok';
  }
};
