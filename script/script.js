import { data } from "../data/data.js";
const templateCard = document.getElementById("template-card").content;
const div = document.getElementById("items");
const fragment = document.createDocumentFragment();
const cargarData = (data) => {
  data.forEach((personaje) => {
    const { id, name, image, price } = personaje;
    templateCard.querySelector("h5").textContent = name;
    templateCard.querySelector("img").setAttribute("src", image);
    templateCard.querySelector(".img-thumbnail").dataset.id = id;
    templateCard.querySelector(".btn-dark").dataset.id = id;
    templateCard.querySelector("p").textContent = price;
    const clone = templateCard.cloneNode(true);
    fragment.appendChild(clone);
  });
  div.appendChild(fragment);
};

document.addEventListener("DOMContentLoaded", cargarData(data));

div.addEventListener("click", (e) => {
  if (e.target.classList.contains("img-thumbnail")) {
    console.log(e.target.dataset.id);
    const findId = e.target.dataset.id;
    let product = data.find((p) => p.id == findId);
    localStorage.setItem("product", JSON.stringify(product));
    window.location.href = "detail.html";
  }
});

div.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-dark")) {
    const findId = e.target.dataset.id;
    let purchase = data.find((p) => p.id == findId);
    let shoppingCart = [];
    if (localStorage.getItem("Carrito")) {
      shoppingCart = JSON.parse(localStorage.getItem("Carrito"));
      shoppingCart.push(purchase);
      localStorage.setItem("Carrito", JSON.stringify(shoppingCart));
    } else {
      shoppingCart.push(purchase);
      localStorage.setItem("Carrito", JSON.stringify(shoppingCart));
    }
  }
});
