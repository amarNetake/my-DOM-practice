let button = document.querySelector('button');
let counter = document.querySelector('h3');

document.body.fontFamily = 'Suse';
button.style.padding = '10px';
button.style.fontSize = '20px';
counter.style.fontSize = '30px';
let id;

function startTimer(){
     id = setInterval(() =>{counter.textContent = parseInt(counter.textContent) + 1},1000);
     return id;
}

button.addEventListener('click', function() {
     if(id){
          clearInterval(id);
          counter.textContent = 0;
     }
     else{
          startTimer();
     }
});