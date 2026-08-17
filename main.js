const products = document.querySelectorAll('.products__item');
const changeColorAllBtn = document.querySelector('#change-Color-all-cards');
const greenColorHash = '#4CAF50';
const blueColorHash = '#2196F3';


changeColorAllBtn.addEventListener('click', () => {
    products.forEach((card) => card.style.backgroundColor = greenColorHash)
      
    });

const firstProducts = document.querySelector('.products__item');
const changeColorFirstBtn = document.querySelector('#change-Color-first-card');

  changeColorFirstBtn.addEventListener('click', () => {
    firstProducts.style.backgroundColor = blueColorHash;
    });

const openGoogleBtn = document.querySelector('#open-google');
    openGoogleBtn.addEventListener('click',openGoogle)
        window.open('https://www.google.com')

function openGoogle() 
{const answer = confirm('Вы хотите открыть страницу google.com?');
    if (answer==true) {
        window.open('https://www.google.com');
    } else {return;}
    }

const outputConsoleLogBtn = document.querySelector('#output-console-log');
outputConsoleLogBtn.addEventListener('click', () => (outputСonsolelog('homework 6')));
  function outputСonsolelog(message) {  
    alert(message); 
    console.log(message);
}

