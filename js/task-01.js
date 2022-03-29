//Получаем ссылку на список
const categoriesEll = document.querySelector('#categories');

//Получаем длину всех элементов списка - тоесть его предков li
const ellLength = categoriesEll.children.length;

//и выводим в консоль через шаблонною строку
console.log(`Number of categories: ${ellLength}`);

//Получаем ссылки на елементы
const titlesEl = document.querySelectorAll('.item h2');
const itemlEl = document.querySelectorAll('.item ul');

//Перебираем через итерацию и на каждой итерации выводим в консоль
for (let i = 0; i < ellLength; i += 1) {
    console.log(`Category: ${titlesEl[i].textContent}`);
    console.log(`Category: ${itemlEl[i].children.length}`);
}
