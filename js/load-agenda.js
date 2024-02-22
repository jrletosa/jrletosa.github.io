
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
    <h1>Wedding Weekend</h1>
      
      <h2>Saturday &nbsp&nbsp6&nbsp&nbsp Saying Yes</h2>
      
      <div class="space-between-h2-content"></div>
      
      <p>16:30 - <b>Arrival</b><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspFeel free to enjoy the gardens and find your way to the orchard</p>
      
      <p>17:00 - <b>${getTranslation("Ceremony starts")}</b><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspPlease be seated</p>
      
      <p>17:30 - <b>${getTranslation("Mingle & Photo shoot")}</b><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspThe couple will dissapear for portrait and group photos</p>
      
      <p>19:00 - <b>${getTranslation("Toast")}</b><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspThe couple returns!</p>
      
      <p>19:30 - <b>${getTranslation("Dinner")}</b><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspExplore the greenhouses and find your seat</p>
      
      <p>22:00 - <b>${getTranslation("Cake")}</b><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspLet there be cake!</p>
      
      <p>22:30 - <b>${getTranslation("Dance")}</b><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspJoin us on the dance floor as we celebrate love and joy!</p>
      
      
      <br><p><b>Location: </b><a href="https://maps.app.goo.gl/BfexPzroKEgiZgz38">Rosendals Trädgård</a></p>
      
      <div class="space-between-h2"></div>
      
      <h2>Sunday &nbsp&nbsp2&nbsp&nbsp ${getTranslation("Picnic")}</h2>
      
      <p>14:00 - <b>${getTranslation("Picnic")}</b></p>
      
      <br><p><b>Location: </b><a href="https://maps.app.goo.gl/7Wm8cVSgYnBnZhey7">Our garden</a></p>
  `;

  targetElement.appendChild(div);
}

export { loadAgenda }