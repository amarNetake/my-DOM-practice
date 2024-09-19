
const btnEle = document.querySelector('button');
const paraEle = document.querySelector('p');

btnEle.addEventListener('click', () => {
     paraEle.textContent = 'Button Clicked!'; // Changing the text content of paragraph element to 'Button Clicked!'
});