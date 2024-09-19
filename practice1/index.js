let addBtnEle = document.querySelectorAll('button')[0];
let removeBtnEle = document.querySelectorAll('button')[1];
let headingEle1 = document.querySelector('h1');
let headingEle2 = document.querySelector('.heading2');
let headingEle3 = document.querySelector('#heading3');
let containerEle = document.querySelector('.container');


function* newCard(){
     for(let i = 1; i <= 12; i++){
          yield `./assets/model${i}.jpg`;
     }
}

let src = newCard();


addBtnEle.addEventListener('click', ()=>{
     headingEle1.innerHTML = `
          <div>
               <h1>Welcome, Amar</h1>
               <p>This is a my web page</p>
          </div>
     `
     headingEle1.style.backgroundColor = 'yellow';
     headingEle1.style.fontFamily = 'Suse';
     headingEle1.style.width = "50%";

     headingEle2.classList.add('styleIt'); //Add a style to headingEle2 we defined in style.css which is appying style to class named 'styleIt'

     let newEle = document.createElement('img'); //We only have created the div element, it hasn't yet added to the webpage yet. You can access this element on browser console by typing newEle but it is not present in webpage flow yet.
     newEle.classList.add('newCard');
     newEle.style.boarderRadius = '20px';
     newEle.style.backgroundSize = 'cover';
     newEle.style.backgroundPosition = 'top center';
     newEle.style.backgroundRepeat = 'no-repeat';

     let val = src.next(); 
     if(val.done==true){
          src = newCard();
          val = src.next();
     }
     newEle.src = val.value; //Assigning the image source to the newly created element.
     containerEle.appendChild(newEle); //At this point we have inserted/appended the newly created element into the webpage as the child of document <body> element.
});

removeBtnEle.addEventListener('click', ()=>{
     containerEle.removeChild(containerEle.lastElementChild); // Removes the last image element child from the .container div
     document.body.removeChild(headingEle2); // Remove the headingEle2 which is child of document <body> element
});

let cursor = document.querySelector('#cursor');

cursor.style.width = '20px';
cursor.style.height = '20px';
cursor.style.border = '2px solid black';
cursor.style.borderRadius = '50%';
cursor.style.transform = 'translate(-50%, -50%)'; /* Center the cursor w.r.t. mouse arrow*/
cursor.style.zIndex = '9999'; /* Ensure it's above other elements */
cursor.style.pointerEvents = 'none'; /* Ensures the cursor does not block interactions */
cursor.style.position = 'absolute';
cursor.style.backgroundColor = 'gold';
// cursor.style.opacity = '0.5';

//When we move the mouse cursor on document <body> element then the cursor should move
document.body.addEventListener('mousemove', function(event){
     // cursor.style.top = event.clientY + 'px';
     // cursor.style.left = event.clientX + 'px';
     cursor.style.top = (event.clientY + window.scrollY) + 'px';
     cursor.style.left = (event.clientX + window.scrollX) + 'px';
     cursor.style.transform = 'translate(-50%, -50%)'; /* Center the cursor */
})

