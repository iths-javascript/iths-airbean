import products from "./menu.json";

const db = [];

console.log(db);

function randomNumber() {
  return Math.ceil(Math.random() * 1000);
}

randomNumber();

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchProducts() {
  await timeout(randomNumber());
  return products.menu;
}

export async function registerUser(name, email) {
  console.log(name);
  console.log(email);
}

export async function makeOrder(userId, cardItems) {
  console.log(userId);
  console.log(cardItems);
}

export async function fetchOrderHistory(userId) {
  console.log(userId);
}
