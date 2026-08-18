document.addEventListener('DOMContentLoaded', () => {   
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

    const button = document.getElementById('color-toggle-button');

        if (button) {
        button.addEventListener('click', () => {
            button.classList.toggle('active');
        });
        } else {
        console.error('Кнопка с id="color-toggle-button" не найдена');
        }



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
    outputConsoleLogBtn.addEventListener('click', () => outputConsoleLog('homework 6'));
    function outputConsoleLog(message) {  
        alert(message); 
        console.Log(message);
    }

    const title = document.querySelector('.title.catalog-title');
    title.addEventListener('mouseover', (event) => { 
        console.log (event.currentTarget.textContent);
    })
})
