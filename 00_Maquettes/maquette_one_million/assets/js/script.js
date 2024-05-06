
let teamMembers = document.querySelectorAll('.team h4');

console.log(teamMembers.textContent);

for (let member of teamMembers) {
  console.log(member.textContent);
  let memberDiv = member.parentElement;
  memberDiv.style.backgroundSize = 'cover';
  let post = memberDiv.querySelector('p');

  memberDiv.addEventListener('mouseover', ()=> {   
    post.style.color = 'white';
    
    if (member.textContent.includes('joanne')) {
      memberDiv.style.backgroundImage = "url('assets/images/joanne.jpg')";
    }
    else  if (member.textContent.includes('gaston')) {
      memberDiv.style.backgroundImage = "url('assets/images/gaston.jpg')";
    }
    else  if (member.textContent.includes('manuel')) {
      memberDiv.style.backgroundImage = "url('assets/images/manuel.jpg')";
    }
    else  if (member.textContent.includes('tracy')) {
      memberDiv.style.backgroundImage = "url('assets/images/tracy.jpg')";
    }
  })
  memberDiv.addEventListener('mouseout', ()=> {
    memberDiv.style.backgroundImage = "";
    post.style.color = 'black';
  })
}