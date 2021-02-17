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
  await timeout(randomNumber());
  let order = "";
  if (userId) {
    let db = [];
    if (localStorage.userDb) {
      db = JSON.parse(localStorage.userDb);
    }
    const userExist = db.find((user) => user.id === userId);
    if (userExist) {
      order = {
        ...cardItems,
        userId,
        id: uuidv4(),
        date: new Date().toLocaleDateString(),
      };
      let orders = [];
      if (localStorage.ordersDb) {
        orders = JSON.parse(localStorage.orderDb);
        orders.push(order);
        localStorage.orderDb = JSON.stringify(orders);
      }
    } else {
      throw new Error("No user with that id");
    }
  } else {
    order = {
      ...cardItems,
      id: uuidv4(),
      date: new Date().toLocaleDateString(),
    };
  }
  localStorage.orderDb = JSON.stringify(order);
  return order;
}

export async function fetchOrderHistory(userId) {
  await timeout(randomNumber());
  let orderDb = [];
  let userDb = [];

  if (localStorage.userDb) {
    userDb = JSON.parse(localStorage.userDb);
  } else {
    throw new Error("No users exist in db");
  }
  const userExist = userDb.some((user) => user.id === userId);
  if (!userExist) {
    throw new Error("No user by that id found");
  }

  if (localStorage.orderDb) {
    orderDb = JSON.parse(localStorage.userDb);
  }

  const orderHistory = orderDb.filter((user) => user.id === userId);

  return orderHistory;
}
