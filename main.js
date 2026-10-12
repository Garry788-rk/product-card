document.addEventListener('DOMContentLoaded', () => {
  
  const products = document.querySelectorAll('.products__item');
  const changeColorAllBtn = document.querySelector('#change-color-all-cards');
  const changeColorFirstBtn = document.querySelector('#change-color-first-card');
  const toggleButton = document.getElementById('color-toggle-button');
  const openGoogleBtn = document.querySelector('#open-google');
  const outputConsoleLogBtn = document.querySelector('#output-console-log');

  
  const greenColorHash = '#4CAF50';
  const blueColorHash = '#2196F3';

  if (changeColorAllBtn) {
    changeColorAllBtn.addEventListener('click', () => {
      products.forEach((card) => {
        card.style.backgroundColor = greenColorHash;
      });
    });
  } else {
    console.error('Кнопка #change-color-all-cards не найдена');
  }

  const firstProduct = document.querySelector('.products__item');
  if (firstProduct && changeColorFirstBtn) {
    changeColorFirstBtn.addEventListener('click', () => {
      firstProduct.style.backgroundColor = blueColorHash;
    });

  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      toggleButton.classList.toggle('active');
    });
  } else {
    console.error('Кнопка с id="color-toggle-button" не найдена');
  }

  function openGoogle() {
    const answer = confirm('Вы хотите открыть страницу google.com?');
    if (answer) {
      window.open('https://www.google.com', '_blank'); // лучше явно указать _blank
    }
  }

  if (openGoogleBtn) {
    openGoogleBtn.addEventListener('click', openGoogle);
  } else {
    console.error('Кнопка #open-google не найдена');
  }

  function outputConsoleLog(message) {
    console.log(message);
  }

  if (outputConsoleLogBtn) {
    outputConsoleLogBtn.addEventListener('click', () => {
      outputConsoleLog('homework 6');
    });
  } else {
    console.error('Кнопка #output-console-log не найдена');
  }
});