// Импортируем данные для таблицы из data.js

import { data } from "./data.js";

// Пишем лупер для того, чтобы они отобразились в таблице с уже готовой шапкой

let yourChoice; //переменная, в которую мы потом запишем id выбранной строчки

for (let i = 0; i < data.length; i++) {
  let tr = document.createElement("tr"); // создаем строку
  tr.id = i + 1; //присваиваем id для дальнейшей выборки
  //создаем массив с нужными нам значениями из data.js, именем, фамилией, описанием и цветом глаз
  let array = [
    data[i].name.firstName,
    data[i].name.lastName,
    data[i].about,
    data[i].eyeColor,
  ];
  // создаем еще один лупер, для присваивания значений в каждую ячейку таблицы
  for (let j = 0; j < array.length; j++) {
    let td = document.createElement("td"); // создаем ячейку
    if (j === 2) {
      td.classList.add("about"); // присваиваем класс ячейке с описанием, чтобы в дальнейшем ее урезать
    }
    td.innerHTML = array[j]; // присваиваем значение ячейке из массива, который создали ранее
    tr.appendChild(td); // добавляем ячейку в элемент строки
  }
  document.getElementById("dest").appendChild(tr); //добавляем строку к элементу tbody
  // создаем функцию, для выборки строк и создания формы
  tr.onclick = function () {
    const form = document.getElementById("form");
    form.style.visibility = "visible"; // делаем уже готовую форму видимой
    // делаем так, чтобы при создании в поля инпута вставлялись исходные значения из таблицы
    const name = document.getElementById("name");
    name.value = array[0];
    last_name.value = array[1];
    about.value = array[2];
    document.querySelector(
      `input[type='radio'][value=${array[3]}]`
    ).checked = true;
    yourChoice = tr.id; // сохраняем в ранее созданную переменную значения id строки, которую мы изменяли
  };
}

// создаем редактируемую форму

const button = document.querySelector("button"); // сохраняем объект DOM под названием button в переменную

// ставим слушатель на объект, который мы только что сохранили
button.onclick = function () {
  const name = document.getElementById("name");
  const lastName = document.getElementById("last_name"); // сохраняем при нажатии данные, которые остались в input
  const about = document.getElementById("about");

  const tr = document.getElementById(`${yourChoice}`); // находим строку к которой мы прежде обратились

  tr.childNodes[0].innerHTML = name.value;
  tr.childNodes[1].innerHTML = lastName.value; // при нажатии заменяем прежние данные сохраненными из input
  tr.childNodes[2].innerHTML = about.value;

  // делаем специальный лупер для получения значений value из radio-элкментов
  const radio = document.getElementsByName("eye_color");
  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      tr.childNodes[3].innerHTML = radio[i].value; // заменяем существующие, как мы делали это ранее
    }
  }
};
