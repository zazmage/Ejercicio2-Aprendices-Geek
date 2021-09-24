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
    let purchase = data.find((p) => p.id == findId); //Objeto
    let shoppingCart = []; //Array
    if (localStorage.getItem("Carrito")) {
      //Comprueba si hay productos añadidos al carrito, si hay objetos en el local storage
      shoppingCart = JSON.parse(localStorage.getItem("Carrito")); //Bajando
      shoppingCart.push(purchase); //Añadiendo contenido nuevo
      localStorage.setItem("Carrito", JSON.stringify(shoppingCart)); //Reescribiendo
    } else {
      //En caso de que no se haya comprado nada
      shoppingCart.push(purchase); //Añadir por primera vez contenido
      localStorage.setItem("Carrito", JSON.stringify(shoppingCart)); //Escribir
    }
  }
});
