import products from "./menu.json";
import { v4 as uuidv4 } from "uuid";

function randomNumber() {
  return Math.ceil(Math.random() * 2000);
}

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchProducts() {
  await timeout(randomNumber());
  return products.menu;
}

export async function registerUser(name, email) {
  if (!email.includes("@")) {
    throw new Error("Not a valid email");
  }

  await timeout(randomNumber());

  let db = [];

  if (localStorage.userDb) {
    db = JSON.parse(localStorage.userDb);
  }
  const userExist = db.find((user) => user.email === email);
  if (userExist) {
    throw new Error("User already exists");
  }
  const user = { name, email, id: uuidv4() };
  console.log(user);
  db.push(user);
  localStorage.userDb = JSON.stringify(db);

  return user;
}

export async function makeOrder(userId, cardItems) {
  console.log(userId);
  console.log(cardItems);
}

export async function fetchOrderHistory(userId) {
  console.log(userId);
}
