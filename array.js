import { alegriaArray, tristeArray, enojonArray, miedoArray } from './main.js'; 

const botonAlegria = document.querySelector("#alegria-button");
const botonTristeza = document.querySelector("#tristeza-button");
const botonMiedo = document.querySelector("#miedo-button");
const botonEnojo = document.querySelector("#enojo-button");

const displayContainer = document.querySelector("#container");

function displayQuote(quote) {
   
    displayContainer.innerHTML = '';

    const quoteElement = document.createElement("div");
    quoteElement.classList.add("quote");

    const quoteContent = document.createElement("p");
    quoteContent.textContent = quote.contenido;

    const quoteImage = document.createElement("img");
    quoteImage.src = quote.Img;
    quoteImage.alt = quote.name;

    quoteElement.appendChild(quoteContent);
    quoteElement.appendChild(quoteImage);

    displayContainer.appendChild(quoteElement);
}

botonAlegria.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * alegriaArray.length);
    displayQuote(alegriaArray[randomIndex]);
});

botonTristeza.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * tristeArray.length);
    displayQuote(tristeArray[randomIndex]);
});

botonMiedo.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * miedoArray.length);
    displayQuote(miedoArray[randomIndex]);
});

botonEnojo.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * enojonArray.length);
    displayQuote(enojonArray[randomIndex]);
});
