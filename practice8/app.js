let progress = document.querySelector('.progress');
let startDownloadBtn = document.querySelector('button');
let downloadMessage = document.querySelector('#downloadMessage');

progress.style.transitionProperty='all';
progress.style.transitionDuration = '3s';
progress.style.transitionTimingFunction = 'ease-in-out';


let id;
function startDownload(){
     console.log('Entered');
     id = setInterval(function(){
          let newWidth = parseInt(getComputedStyle(progress).width) + 10;
          progress.style.width = newWidth + '%';
          if(newWidth>=100){
               stopDownload();
          }
     }, 2000);
}


function stopDownload(){
     clearInterval(id);
     progress.style.width = '100%';
     setTimeout(function(){
          downloadMessage.innerHTML = 'Download Complete!';
     },3000);
}

startDownloadBtn.addEventListener('click', startDownload);