///////////////------------------------- méthode Kaïss--------------------------///////////////
// let team1 =document.getElementById('team1');
// let team2 =document.getElementById('team2');
// let team3 =document.getElementById('team3');
// let team4 =document.getElementById('team4');

// team1.addEventListener("mouseover" , ()=>{
//     team1.classList.add('team1');
// })
// team1.addEventListener("mouseout", ()=>{
//     team1.classList.remove('team1');
// })

// team2.addEventListener("mouseover" , ()=>{
//     team2.classList.add('team2');
// })
// team2.addEventListener("mouseout", ()=>{
//     team2.classList.remove('team2');
// })

// team3.addEventListener("mouseover" , ()=>{
//     team3.classList.add('team3');
// })
// team3.addEventListener("mouseout", ()=>{
//     team3.classList.remove('team3');
// })

// team4.addEventListener("mouseover" , ()=>{
//     team4.classList.add('team4');
// })
// team4.addEventListener("mouseout", ()=>{
//     team4.classList.remove('team4');
// })


///////////////------------------------- méthode Spartack--------------------------///////////////
// let classPerson = document.querySelectorAll('.team');
// let donnee = ['personGaston','personJoanne','personManuel','personTracy'];
// for(i=0; i<classPerson.length; i++)
//     {
//         let classPersonNew = classPerson[i];
//         let image = donnee[i];

//         function changeBackgraound(element,classLi) {
//             element.classList.toggle(classLi);
            
            
//         }
//          classPersonNew.addEventListener('mouseover',()=>{
//             changeBackgraound(classPersonNew,image);
//          })
//          classPersonNew.addEventListener('mouseleave', ()=>{
//             changeBackgraound(classPersonNew,image);
//          })
//     }

///////////////------------------------- méthode Maureene--------------------------///////////////

// let persons = document.querySelectorAll(".team");
// console.log(persons);

// persons[0].addEventListener('mouseover',function team1(){
//     persons[0].style.backgroundImage = 'url(assets/img/team1.jpg)';
// });

// // persons[0].addEventListener('mouseover',()=>{
// //     persons[0].style.backgroundImage = 'url(assets/img/team1.jpg)';
// // })
// persons[1].addEventListener('mouseover',()=>{
//     persons[1].style.backgroundImage = 'url(assets/img/team2.jpg)';
// })
// persons[2].addEventListener('mouseover',()=>{
//     persons[2].style.backgroundImage = 'url(assets/img/team3.jpg)';
// })
// persons[3].addEventListener('mouseover',()=>{
//     persons[3].style.backgroundImage = 'url(assets/img/team4.jpg)';
// })

// for (let element of persons) {
//     element.addEventListener('mouseout',()=>{
//         element.style.backgroundImage = "";
//     })

    
// }


///////////////------------------------- méthode Sahar--------------------------///////////////

let bg = document.querySelectorAll('.team');

for (let i = 0; i < bg.length; i++) {

    bg[i].addEventListener('mouseover', function (){
        bg[i].setAttribute("id", `team${i+1}` )
    })
    bg[i].addEventListener('mouseout', function (){
        bg[i].setAttribute("id", `` )
    })
}

