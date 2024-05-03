
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


  if (donnees.includes("")) {
    myAlert.innerHTML = '<p class="red mt-3">Veuillez renseigner tout les champs</p>';
  }
  else {
    myAlert.innerHTML = '';

    
    if (regexEmail.test(emailValue)) {
      success(mail);
    }
    else {
      if (emailValue != "") {
        message = "Vous devez renseigner votre adresse mail";
        error(mail, message) 
      }
      else {
      message = "Votre adresse mail n'est pas conforme";
      error(mail, message)      
      }
    }
    
    if (regexSubject.test(subjectValue)) {
      success(subject);
    }
    else {
      if (subjectValue == "") {
        message = "Veuillez renseigner le sujet de votre message";
        error(subject, message) 
      }
      else {
        message = "Votre sujet n'est pas pris en compte";
        error(subject, message)      
      }
    }
    
    if (regexMessage.test(messageValue)) {
      success(messageText);
    }
    else {
      if (messageValue = "") {
        message = "Si vous voulez nous laisser un message, FAITES LE !!!! ";
        error(messageText, message) 
      }
      else {
        message = "Votre message n'est pas compréhensible";
        error(messageText, message)      
      }
    }
  }
  if (myAlert.innerHTML == "") {    
    myAlert.innerHTML = '<p class="green mt-3">Votre compte à bien été crée <a href="#"> Connectez vous ici </a></p>';    
  }
});

function success(element) {
  let formControl = element.parentElement;
  formControl.className = "form-control ok";
  let span = formControl.querySelector('span');
  span.innerText = "Le champs est bien pris en compte";
  
}

function error(element, infos) {
  let formControl = element.parentElement; 
  let span = formControl.querySelector('span');
  span.innerText = infos;

  formControl.className = "form-control error";
}

form.addEventListener('reset', (event) => {
  myAlert.innerHTML = "";

  for (let span of allSpan) {
    span.innerText = "";
  }
});

let nav = document.querySelector('nav');
let link = nav.querySelectorAll('a');



 

 