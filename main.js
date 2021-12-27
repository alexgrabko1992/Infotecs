alert("Hello");

import { data } from "./data.js";

// console.log(data[0]);

for (let i = 0; i < data.length; i++) {
  let tr = document.createElement("tr");
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
    console.log(array[j]);
    tr.appendChild(td);
  }
  document.getElementById("dest").appendChild(tr);
}

// const tr = document.createElement("tr");

// const td = document.createElement("td");

// td.textContent = data[0].name.firstName;
// tr.appendChild(td);
// document.getElementById("dest").appendChild(tr);
