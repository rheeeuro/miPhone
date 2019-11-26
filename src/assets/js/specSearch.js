import axios from "axios";

const displaySize = document.getElementById("jsDisplaySize");
const displaySizeValue = document.getElementById("jsDisplaySizeValue");
const price = document.getElementById("jsPrice");
const priceValue = document.getElementById("jsPriceValue");
const form = document.getElementById("specSearch__form");

function handleSubmit() {
  if (window.location.href.includes("displaySize")) {
    const disValue = window.location.href.split("=")[1];
    // eslint-disable-next-line prefer-destructuring
    displaySize.value = parseFloat(disValue.split("&")[0]);
    // eslint-disable-next-line prefer-destructuring
    price.value = parseInt(window.location.href.split("price=")[1], 10);
  } else {
    displaySize.value = 0;
    price.value = 0;
  }
}

function handleSizeDrag() {
  displaySizeValue.innerHTML = ` ${displaySize.value} `;
}

function handlePriceDrag() {
  priceValue.innerHTML = price.value;
}

function init() {
  handleSubmit();
  displaySizeValue.innerHTML = ` ${displaySize.value} `;
  priceValue.innerHTML = price.value;
  displaySize.addEventListener("input", handleSizeDrag);
  price.addEventListener("input", handlePriceDrag);
}

if (form) {
  init();
}
