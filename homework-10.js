import { products } from "./products.js";

function getCardCount() {
  let count;
  do {
    count = parseInt(prompt("Какое количество отобразить (от 1 до 5):"), 10);
  } while (isNaN(count) || count < 1 || count > 5);
  return count;
}

const count = getCardCount();

function renderCard(productArray, count) {
  const container = document.getElementById("catalog-container");
  if (!container) {
    console.error("Container element not found");
    retur;
  }

  container.innerHTML = '';

  const limitedProducts = productArray.slice(0, Math.min(count, productArray.length));

  limitedProducts.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>Цена: ${product.price} руб.</p>
      <img src="${product.image}" alt="${product.name}" style="max-width: 100%;">
    `;
    container.appendChild(card);
  });
}


renderCard(products, count); 

const productDescriptions = products.reduce((acc, product) => {
  acc[product.name] = product.description;
  return acc;
}, {});

console.log("Описания по названиям:", productDescriptions);