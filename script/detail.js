let h1 = document.querySelector("h1");
let img = document.querySelector("img");
let btn = document.querySelector(".btn-dark");
let descriptionDOM = document.querySelector("p");

const getLocalStorage = () => {
  let detalle = JSON.parse(localStorage.getItem("product"));
  const { name, image, description } = detalle;
  h1.textContent = name;
  img.setAttribute("src", image);
  descriptionDOM.textContent = description;
};

document.addEventListener("DOMContentLoaded", getLocalStorage());

btn.addEventListener("click", () => {
  window.location.href = "index.html";
});
