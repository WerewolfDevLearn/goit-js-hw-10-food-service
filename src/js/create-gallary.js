import itemTamplate from '../templates/gallery-items.hbs';
import mealMenu from '../jsons/menu.json';

const menuRef = document.querySelector('ul.js-menu');
const markup = itemTamplate(mealMenu);

menuRef.insertAdjacentHTML('beforeend', markup);
