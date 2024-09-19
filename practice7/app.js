let home = document.querySelector('#home');
let about = document.querySelector('#about');
let contact = document.querySelector('#contact');
let about_text = document.querySelector('#about-text');
let contact_text = document.querySelector('#contact-text');
let home_text = document.querySelector('#home-text');

home_text.style.display = 'block';  //By default show the content of home tab

home.addEventListener('click', function(){
     //There may be 10s or more items and we don't want to set style manually for each item thus we will do like this
     document.querySelectorAll('h3').forEach((item) => {
          item.style.display = 'none';
     });
     home_text.style.display = 'block';
});

about.addEventListener('click', function(){
     document.querySelectorAll('h3').forEach((item) => {
          item.style.display = 'none';
     });
     about_text.style.display = 'block';
});

contact.addEventListener('click', function(){
     document.querySelectorAll('h3').forEach((item) => {
          item.style.display = 'none';
     });
     contact_text.style.display = 'block';
});