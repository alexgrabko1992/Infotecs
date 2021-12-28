// alert("Hello");

// Импортируем данные для таблицы из data.js

import { data } from "./data.js";

// Пишем лупер для того, чтобы они отобразились в таблице с уже готовой шапкой

for (let i = 0; i < data.length; i++) {
  let tr = document.createElement("tr");
  tr.id = i + 1;
  let array = [
    data[i].name.firstName,
    data[i].name.lastName,
    data[i].about,
    data[i].eyeColor,
  ];
  for (let j = 0; j < array.length; j++) {
    let td = document.createElement("td");
    if (j === 2) {
      td.classList.add("about");
    }
    td.innerHTML = array[j];
    // console.log(array[j]);
    tr.appendChild(td);
  }
  document.getElementById("dest").appendChild(tr);
  tr.onclick = function () {
    const form = document.getElementById("form");
    form.style.visibility = "visible";
    const name = document.getElementById("name");
    name.value = array[0];
    last_name.value = array[1];
    about.value = array[2];
    document.querySelector(
      `input[type='radio'][value=${array[3]}]`
    ).checked = true;
  };
}

// const tr = document.createElement("tr");

// const td = document.createElement("td");

// td.textContent = data[0].name.firstName;
// tr.appendChild(td);
// document.getElementById("dest").appendChild(tr);
