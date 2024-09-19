formEle = document.querySelector('#myForm');
input1 = document.querySelector('#input1');
input2 = document.querySelector('#input2');
errorEle = document.querySelector('.errorMessage');

errorEle.classList.add('hideElement');


function checkEmptyOrBlank(input){
     if(input.trim().length === 0) return true;
     return false;
}

formEle.addEventListener('submit', (event) => {
     event.preventDefault(); // prevent form from default behaviour thus preventing form submission and page reload on submit event
     console.log(input1.value);
     console.log(input2.value);
     if(checkEmptyOrBlank(input1.value) || checkEmptyOrBlank(input2.value)){
          console.error("Input is empty or blank!!!");
          errorEle.classList.remove('hideElement');
          errorEle.classList.add('showElement');
          console.log(errorEle.classList);
     }
     else{
          console.log("Both inputs are valid");
          errorEle.classList.remove('showElement');
          errorEle.classList.add('hideElement');
     }
});