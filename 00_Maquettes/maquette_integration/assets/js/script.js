
let form = document.querySelector('form');
let mail = document.querySelector('#email');
let subject = document.querySelector('#subject');
let messageText = document.querySelector('#message');
let myAlert = document.querySelector('#alert');
let allSpan = form.querySelectorAll('span');

form.addEventListener('submit', (event) => {

  let emailValue = mail.value.trim();
  let subjectValue = subject.value.trim();
  let messageValue = messageText.value.trim();
  
  let donnees = [emailValue, subjectValue, messageValue];
  
  event.preventDefault(); 
  
  let regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,6}$/;
  let regexSubject = /\D+/;  
  let regexMessage = /^(?=.*[a-zA-Z0-9]).{20,200}$/;
  
  console.log(emailValue);
  console.log(regexEmail.test(emailValue));
  console.log(subjectValue);
  console.log(regexSubject.test(subjectValue));
  console.log(messageValue);
  console.log(regexMessage.test(messageValue));

  for (let span of allSpan) {
    span.innerText = "";
  }


  if (donnees.includes("")) {
    myAlert.innerHTML = '<p class="red py-3">Veuillez renseigner tout les champs</p>';
    if (emailValue == "") {
      message = "Vous devez renseigner votre adresse mail";
      error(mail, message) 
    }
    if (subjectValue == "") {
      message = "Veuillez renseigner le sujet de votre message";
      error(subject, message) 
    }
    if (messageValue == "") {
      message = "Si vous voulez nous laisser un message, FAITES LE !!!! ";
      error(messageText, message) 
    }
  }
  else {
    myAlert.innerHTML = '';

    
    if (!regexEmail.test(emailValue)) {
      message = "Votre adresse mail n'est pas conforme";
      error(mail, message)      
    }
    else {
      success(mail);
    }
  
    
    if (!regexSubject.test(subjectValue)) {
      message = "Votre sujet n'est pas pris en compte";
      error(subject, message)      
    }    
    else {
      success(subject);
    }    
    
    if (!regexMessage.test(messageValue)) {
      message = "Votre message n'est pas compréhensible";
      error(messageText, message)      
    }
    else {
      success(messageText);
    }
  }
  if (regexEmail.test(emailValue) && regexSubject.test(subjectValue) && regexMessage.test(messageValue)) {

    myAlert.innerHTML = '<p class="green mt-3">Votre compte à bien été crée <a href="#"> Connectez vous ici </a></p>';    
  }
});

function success(element) {
  let formControl = element.parentElement;
  formControl.classList.add('ok');
  formControl.classList.remove('error');

  let span = formControl.querySelector('span');

  span.innerText = "Le champs est bien pris en compte";
  span.classList.add('green');
  span.classList.remove('red');  
}

function error(element, infos) {
  let formControl = element.parentElement; 
  let span = formControl.querySelector('span');
  span.innerText = infos;
  span.classList.add('red');  
  span.classList.remove('green');  

  formControl.classList.add('error');
  formControl.classList.remove('ok');
}

form.addEventListener('reset', (event) => {
  myAlert.innerHTML = "";

  for (let span of allSpan) {
    span.innerText = "";
  }
});

 