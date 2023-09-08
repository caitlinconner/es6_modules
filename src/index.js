import Wishlist from "./wishlist.js";


let form = document.querySelector("#submitForm");
let makeInput = document.querySelector("#makeInput");
let modelInput = document.querySelector("#modelInput");
let yearInput = document.querySelector("#yearInput");
let paraMake = document.querySelector("#car-make");
let paraModel = document.querySelector("#car-model");
let paraYear = document.querySelector("#car-year");
let remButton = document.querySelector("#removeBtn");
let wishlistUl = document.querySelector("#wishListContainer > ul");

let wishlist = new Wishlist();

form.addEventListener("submit", addCar);

remButton.addEventListener("click", removeCar);

function showCarDetails(car) {
    paraMake = car.make;
    paraModel = car.model;
    paraYear = car.year;
    remButton.disabled = false;
    remButton.setAttribute("data-carId", car.id);
}

function updateDOMList() {
    wishlistUl.innerHTML = "";
    wishlist.list.forEach((car) => {
        const li = document.createElement("li");
        li.textContent = `${car.make} ${car.model}`;
        li.addEventListener("click", () => showCarDetails(car));
        wishlistUl.appendChild(li);
    }) 
}

function addCar(event) {
    event.preventDefault();

    let make = makeInput.value;
    let model = modelInput.value;
    let year = yearInput.value;

    wishlist.add(make, model, year);

    updateDOMList();
}

function removeCar() {
    let carId = Number(remButton.getAttribute("data-carId"));
    wishlist.remove(carId);

    updateDOMList();

    paraMake.textContent = "";
    paraModel.textContent = "";
    paraYear.textContent = "";
    remButton.disabled = true;
}