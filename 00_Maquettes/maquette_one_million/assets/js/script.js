
let teamMembers = document.querySelectorAll('.team h4');


// console.log(teamMembers.textContent);

// for (let member of teamMembers) {
//   console.log(member.textContent);
//   let memberDiv = member.parentElement;
//   let post = memberDiv.querySelector('p');

//   memberDiv.addEventListener('mouseover', ()=> {   
//     post.style.color = 'white';
    
//     if (member.textContent.includes('joanne')) {
//       memberDiv.style.backgroundImage = "url('assets/images/joanne.jpg')";
//     }
//     else  if (member.textContent.includes('gaston')) {
//       memberDiv.style.backgroundImage = "url('assets/images/gaston.jpg')";
//     }
//     else  if (member.textContent.includes('manuel')) {
//       memberDiv.style.backgroundImage = "url('assets/images/manuel.jpg')";
//     }
//     else  if (member.textContent.includes('tracy')) {
//       memberDiv.style.backgroundImage = "url('assets/images/tracy.jpg')";
//     }
//   })
//   memberDiv.addEventListener('mouseleave', ()=> {
//     memberDiv.style.backgroundImage = "";
//     post.style.color = 'black';
//   })
// }


for (let member of teamMembers) {
  let memberDiv = member.parentElement;
  let post = memberDiv.querySelector('p');
  
  function background(members) {
    if (member.textContent.includes(members)) {
      memberDiv.style.backgroundImage = `url('assets/images/${members}.jpg')`;
    }
  }

  memberDiv.addEventListener('mouseenter', ()=> {
    post.style.color = 'white';
    background('joanne');
    background('gaston');
    background('manuel');
    background('tracy');
  })

  memberDiv.addEventListener('mouseleave', ()=> {
    memberDiv.style.backgroundImage = "";
    post.style.color = 'black';
  })
}

