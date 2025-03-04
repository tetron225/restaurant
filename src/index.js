import "./styles.css";

import { homepage } from "./home.js";
import { menu } from "./menu.js";


homepage();
console.log('Hello');

let home = document.querySelector('#home');
let amenu = document.querySelector('#menu');
let contact = document.querySelector('#contactus');
let content = document.querySelector('#content');

home.addEventListener('click', () => {
    while(content.lastElementChild) {
        content.removeChild(content.lastElementChild);
    }
    homepage();
});

amenu.addEventListener('click', () => {
    while(content.lastElementChild) {
        content.removeChild(content.lastElementChild);
    }
    menu();
});

contact.addEventListener('click', () => {
    while(content.lastElementChild) {
        content.removeChild(content.lastElementChild);
    }
});