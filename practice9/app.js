let container = document.querySelector('.container');
let input = document.querySelector('input');

let temp = (parseFloat(getComputedStyle(container).width) - parseFloat(getComputedStyle(container).padding)*3) || 'auto';
if(temp !== 'auto') input.style.width = temp + "px";

const names = [
     "Charlie", "Anna", "Alex", "Diana", "Beatrice",
     "David", "Aiden", "Bella", "Catherine", "Daisy",
     "Benny", "Alicia"
 ];

function createAndInsertCard(src, name, container, pictureEle, card){
     pictureEle.style.src = src;
     let person= document.createElement('div');
     person.textContent = name;
     card.appendChild(pictureEle);
     card.appendChild(person);
     container.appendChild(card);
     console.log(container.chilren);
}

for( let i = 1; i <= 12; i++){
     let card = document.createElement('div');
     card.classList.add('card');
     let pictureEle = document.createElement('img');
     pictureEle.classList.add('photo');
     pictureEle.src = `./assets/model${i}.jpg`;
     createAndInsertCard(`./assets/model${i}`,names[i-1],container, pictureEle, card);
}

input.addEventListener('input', function(e) {
     let filterValue = e.target.value.toLowerCase();
     //console.log(filterValue);
     let cards = container.querySelectorAll('.card');
     cards.forEach(card => {
          if(card.children[1].textContent.toLowerCase().startsWith(filterValue)===false){
               card.style.display = 'none';
          }
          else{
               card.style.display = 'block';
          }
     });
});