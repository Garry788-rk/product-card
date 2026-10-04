import { products } from "./products.js";

function getCardCount() {
  let count;
  do {
    count = parseInt(
      prompt("Какое количество товаров отобразить (от 1 до 5)?"),
      10,
    );
  } while (isNaN(count) || count < 1 || count > 5);
  return count;
}

function renderProducts(productArray, count) {
  const template = document.getElementById("product-card-template");
  const list = document.getElementById("products-list");

  if (!template) {
    console.error("Не найден шаблон #product-card-template в HTML");
    return;
  }
  if (!list) {
    console.error("Не найден список #products-list в HTML");
    return;
  }

  list.innerHTML = "";

  const limitedProducts = productArray.slice(
    0,
    Math.min(count, productArray.length),
  );

  limitedProducts.forEach((product) => {
    const card = template.content.cloneNode(true);

    const imgEl = card.querySelector(".card__image");
    if (imgEl) {
      imgEl.src = product.image || "";
      imgEl.alt = product.name || "Товар";
    }

    const categoryEl = card.querySelector(".card__category");
    if (categoryEl) categoryEl.textContent = product.category || "";

    const nameEl = card.querySelector(".card__name");
    if (nameEl) nameEl.textContent = product.name || "";

    const descEl = card.querySelector(".card__description");
    if (descEl) descEl.textContent = product.description || "";

    const compoundList = card.querySelector(".compound__list");
    if (compoundList && Array.isArray(product.compound)) {
      compoundList.innerHTML = "";
      product.compound.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        compoundList.appendChild(li);
      });
    }

    const priceEl = card.querySelector(".price-value");
    if (priceEl) priceEl.textContent = `${product.price} ₽`;

    list.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const count = getCardCount();
  renderProducts(products, count);
});
