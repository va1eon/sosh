import {getFullObject} from "./functions/getFullObject.js";
import {$1a as data1a} from "./classes/1a.js";
import {$1b as data1b} from "./classes/1b.js";
import {$2a as data2a} from "./classes/2a.js";
import {$2b as data2b} from "./classes/2b.js";
import {$3a as data3a} from "./classes/3a.js";
import {$3b as data3b} from "./classes/3b.js";
import {$4a as data4a} from "./classes/4a.js";
import {$4b as data4b} from "./classes/4b.js";
import {$5a as data5a} from "./classes/5a.js";
import {$5b as data5b} from "./classes/5b.js";
import {$6a as data6a} from "./classes/6a.js";
import {$6b as data6b} from "./classes/6b.js";
import {$7a as data7a} from "./classes/7a.js";
import {$7b as data7b} from "./classes/7b.js";
import {$8a as data8a} from "./classes/8a.js";
import {$8b as data8b} from "./classes/8b.js";
import {$9a as data9a} from "./classes/9a.js";
import {$9b as data9b} from "./classes/9b.js";
import {$10a as data10a} from "./classes/10a.js";
import {$10b as data10b} from "./classes/10b.js";
import {$11 as data11} from "./classes/11.js";

const buttonsNode = document.querySelectorAll(".btn");
const app = document.querySelector("#app__inner");
const title = document.querySelector('#title');

const main = clazz => {
  let obj = getFullObject(clazz);
  let courseObj = obj.obj;
  let fullArray = obj.arr;

  const renderTable = () => {
    for (const key in courseObj) {
      app.innerHTML += `
    <table>
      <thead>
      <tr>
        <h2 id="title" class="app__title app__title--mini">${courseObj[key]}</h2>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>№ п/п</td>
        <td>ФИО</td>
      </tr>
      ${fullArray.map(item => {
        if (item[key]) {
          return item[key].map((el, i) => (
            `<tr>
             <td>${i + 1}</td>
             <td>${el}</td>
          </tr>`
          )).join('')
        }
      }).join('')}
      </tbody>
    </table>
  `
    }
  }
  renderTable();
}


buttonsNode.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.clear();
    const btnData = e.target.dataset.class;
    switch (btnData) {
      case "1a":
        title.textContent = '1а класс'
        app.innerHTML = '';
        main(data1a);
        break;
      case "1b":
        title.textContent = '1б класс'
        app.innerHTML = '';
        main(data1b);
        break;
      case "2a":
        title.textContent = '2а класс'
        app.innerHTML = '';
        main(data2a);
        break;
      case "2b":
        title.textContent = '2б класс'
        app.innerHTML = '';
        main(data2b);
        break;
      case "3a":
        title.textContent = '3а класс'
        app.innerHTML = '';
        main(data3a);
        break;
      case "3b":
        title.textContent = '3б класс'
        app.innerHTML = '';
        main(data3b);
        break;
      case "4a":
        title.textContent = '4а класс'
        app.innerHTML = '';
        main(data4a);
        break;
      case "4b":
        title.textContent = '4б класс'
        app.innerHTML = '';
        main(data4b);
        break;
      case "5a":
        title.textContent = '5а класс'
        app.innerHTML = '';
        main(data5a);
        break;
      case "5b":
        title.textContent = '5б класс'
        app.innerHTML = '';
        main(data5b);
        break;
      case "6a":
        title.textContent = '6а класс'
        app.innerHTML = '';
        main(data6a);
        break;
      case "6b":
        title.textContent = '6б класс'
        app.innerHTML = '';
        main(data6b);
        break;
      case "7a":
        title.textContent = '7а класс'
        app.innerHTML = '';
        main(data7a);
        break;
      case "7b":
        title.textContent = '7б класс'
        app.innerHTML = '';
        main(data7b);
        break;
      case "8a":
        title.textContent = '8а класс'
        app.innerHTML = '';
        main(data8a);
        break;
      case "8b":
        title.textContent = '8б класс'
        app.innerHTML = '';
        main(data8b);
        break;
      case "9a":
        title.textContent = '9а класс'
        app.innerHTML = '';
        main(data9a);
        break;
      case "9b":
        title.textContent = '9б класс'
        app.innerHTML = '';
        main(data9b);
        break;
      case "10a":
        title.textContent = '10а класс'
        app.innerHTML = '';
        main(data10a);
        break;
      case "10b":
        title.textContent = '10б класс'
        app.innerHTML = '';
        main(data10b);
        break;
      case "11":
        title.textContent = '11 класс'
        app.innerHTML = '';
        main(data11);
        break;
    }
  });
});
