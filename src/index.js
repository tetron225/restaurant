import "./styles.css";

import { homepage } from "./home.js";
import { menu } from "./menu.js";
import { contact } from "./contact.js";


homepage();
console.log('Hello');

let home = document.querySelector('#home');
let amenu = document.querySelector('#menu');
let acontact = document.querySelector('#contactus');
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

acontact.addEventListener('click', () => {
    while(content.lastElementChild) {
        content.removeChild(content.lastElementChild);
    }
    contact();
});