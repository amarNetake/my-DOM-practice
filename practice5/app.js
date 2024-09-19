let addBtn = document.querySelector('#addItem');
let removeBtn = document.querySelector('#removeItem');

let input = document.querySelector('input');

let list = document.createElement('ul');

document.body.appendChild(list);

addBtn.addEventListener('click', function(){
     if(input.value.trim().length === 0) return;
     let item = document.createElement('li');
     item.textContent = input.value;
     list.appendChild(item);
     console.log(list);
     input.value = ''; // reset input value to blank
     input.focus();  //To bring back focus to input element
})

removeBtn.addEventListener('click', function(){
     if(list.children.length > 0){
          list.removeChild(list.children[list.children.length - 1]);
     }
});