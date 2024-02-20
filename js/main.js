import { frasesBiscoitoDaSorte, getRandomNumber } from "./utils.js";

const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const message = screen2.querySelector("h3")

const btnCookie = document.querySelector("#btnCookie");
const btnNewCookie = document.querySelector("#btnNewCookie");

btnCookie.addEventListener("click", toggleScreen);
btnNewCookie.addEventListener("click", toggleScreen);

function toggleScreen(){

    message.innerText = frasesBiscoitoDaSorte[getRandomNumber(frasesBiscoitoDaSorte.length)]
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
   
}
