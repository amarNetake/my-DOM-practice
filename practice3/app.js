let image1 = document.querySelector('.image1');
let image2 = document.querySelector('.image2');

image1.classList.add('card');
image2.classList.add('card');

let btn = document.querySelector('button');

btn.addEventListener('click', function(){
     let temp = image1.getAttribute('src');
     image1.setAttribute('src', image2.getAttribute('src'));
     image2.setAttribute('src', temp);
     // OR
     // image1.src = image2.src;
     // image2.src = temp;
});