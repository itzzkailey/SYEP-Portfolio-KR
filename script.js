const reviews = [
{
    id: 1,
    name: 'Susan Smith' ,
    img: '#' ,
    text: Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
},

  {
    id: 2,
    name: 'Ana Smith',
    img: '#',
    text: Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  },

    {
     id: 3,
    name: 'Peter Jones',
    img: '#',
    text: Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    },





const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentItem = 0;
window.addEventListener('DOMContentLoaded', function(){
   const item = reviews[currentItem];
   img.src= item.img;
   author.textContent = item.name;
   job.textContent = item.job;
   info.textContent = item.text;
});


function showPerson(person){
  const item = reviews[person];
  img.src= item.img;
   author.textContent = item.name;
   job.textContent = item.job;
   info.textContent = item.text;
}

nextBtn.addEventListener('click', function(){
    currentItem++;    
    if (currentItem >reviews.length -1){
        currentItem = 0;
    }
    showPerson(currentItem);
 });

 prevBtn.addEventListener('click',function (){
     currentItem--;
     if(currentItem <0){
        currentItem = reviews.length -1;
     }
     showPerson(currentItem);
 });
















// // console.("hello world")
// // console.log(chicken);
// // console.log(typeof chicken);

// // console.log(10+ "eggs");
// // console.log(10+8+ "eggs");
// // console.log("eggs"+ 10+8);

// console.log(7!=4);

// // console.log(7>3)&&(10.>8);

// //only one condition is true
//  console.log(10>3) || (5>10);

// //If the statement is logical or not
// console.log(!5>3)


// // const hour = new Date().getHours();
// // let greeting = "";

// // if (hours < 12){
// //     greeting ="Good morning";
// // }else if (hour < 18){
// //     greeting = "Good afternoon";
// // } else {
// //     greeting = "Good evening"
// // }

// // document.getElementById("greeting").innerText = greeting;