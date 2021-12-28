// alert("Hello");

// Импортируем данные для таблицы из data.js

import { data } from "./data.js";

// Пишем лупер для того, чтобы они отобразились в таблице с уже готовой шапкой
let yourChoice;

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
    // td.classList.add(j + 1);
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
    yourChoice = tr.id;
  };
}

// const tr = document.createElement("tr");

// const td = document.createElement("td");

// td.textContent = data[0].name.firstName;
// tr.appendChild(td);
// document.getElementById("dest").appendChild(tr);

const button = document.querySelector("button");

button.onclick = function () {
  const name = document.getElementById("name");
  const lastName = document.getElementById("last_name");
  const about = document.getElementById("about");

  const tr = document.getElementById(`${yourChoice}`);

  tr.childNodes[0].innerHTML = name.value;
  tr.childNodes[1].innerHTML = lastName.value;
  tr.childNodes[2].innerHTML = about.value;

  const radio = document.getElementsByName("eye_color");
  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      tr.childNodes[3].innerHTML = radio[i].value;
    }
  }
};
