
let textarea = document.querySelector('textarea');
let counter = document.querySelector('h3');

textarea.style.fontWeight = '700';
textarea.style.lineHeight = '20px';
textarea.style.letterSpacing = '0.6px';
textarea.style.wordSpacing = '2px';

textarea.style.resize = 'none';  //Now we have freezed textarea width and height. Now textarea element will not be able to resize

textarea.placeholder = "Enter your comments";
textarea.style.padding = '5px';

let maxLen = 20; //Accept only 20 characters at max

textarea.addEventListener('input', function(e) {
     if(e.target.value.length > 20 ){
          e.target.value = e.target.value.substring(0, maxLen);
          counter.innerHTML = `Character count: ${e.target.value.length}(Max Limit reached)`;
          counter.style.color = 'red';
     }
     else{
          e.target.value = e.target.value.toLowerCase(); //My wish is to put/allow only uppercase text
          counter.innerHTML = `Character count: ${e.target.value.length}`;
          counter.style.color = 'black';
     }
});

