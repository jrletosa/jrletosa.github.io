
import {getTranslation} from './translations.js'

function loadAgenda(targetElementId) {
  var targetElement = document.getElementById(targetElementId);
  if (!targetElement) {
    console.error("Target element not found");
    return;
  }

  var div = document.createElement('div');
  div.classList.add("content");
  div.innerHTML = `
    <h1>${getTranslation("Wedding Weekend")}</h1>
      
      <h2>${getTranslation("Saturday")} &nbsp&nbsp6&nbsp&nbsp ${getTranslation("Saying Yes")}</h2>
      
      <div class="space-between-h2-content"></div>
      
      <p>16:30 - <b>${getTranslation("Arrival")}</b><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp${getTranslation("Arrival-text")}</p>
      
      <p>17:00 - <b>${getTranslation("Ceremony starts")}</b><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp${getTranslation("Ceremony-starts-text")}</p>
      
      <p>17:30 - <b>${getTranslation("Mingle & Photo shoot")}</b><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp${getTranslation("Mingle-text")}</p>
      
      <p>19:00 - <b>${getTranslation("Toast")}</b><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp${getTranslation("Toast-text")}</p>
      
      <p>19:30 - <b>${getTranslation("Dinner")}</b><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp${getTranslation("Dinner-text")}</p>
      
      <p>22:00 - <b>${getTranslation("Cake")}</b><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp${getTranslation("Cake-text")}</p>
      
      <p>22:30 - <b>${getTranslation("Dance")}</b><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp${getTranslation("Dance-text")}</p>
      
      
      <br><p><b>${getTranslation("Location")}: </b><a href="https://maps.app.goo.gl/BfexPzroKEgiZgz38">Rosendals Trädgård</a></p>
      
      <div class="space-between-h2"></div>
      
      <h2>Sunday &nbsp&nbsp2&nbsp&nbsp ${getTranslation("Picnic")}</h2>
      
      <div class="space-between-h2-content"></div>
      
      <p>14:00 - <b>${getTranslation("Picnic")}</b></p>
      
      <br><p><b>${getTranslation("Location")}: </b><a href="https://maps.app.goo.gl/7Wm8cVSgYnBnZhey7">Our garden</a></p>
  `;

  targetElement.appendChild(div);
}

export { loadAgenda }