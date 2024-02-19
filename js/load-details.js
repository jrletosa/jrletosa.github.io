
import {getTranslation} from './translations.js'

function loadDetails(targetElementId) {
  var targetElement = document.getElementById(targetElementId);
  if (!targetElement) {
    console.error("Target element not found");
    return;
  }

  var div = document.createElement('div');
  div.classList.add("content");
  div.innerHTML = `
    <h2>Wedding Weekend</h2>
      <h3>Saturday - Saying Yes</h3>
      <p><a href="https://maps.app.goo.gl/BfexPzroKEgiZgz38">Rosendals Trädgård</a></p>
      <p>
      17:00 - ${getTranslation("Ceremony")}<br>
      17:30 - ${getTranslation("Mingle & Photo shoot")}<br>
      19:00 - ${getTranslation("Toast")}<br>
      19:30 - ${getTranslation("Dinner")}<br>
      22:00 - ${getTranslation("Cake & Coffee")}<br>
      22:30 - ${getTranslation("Dance")}<br>
      </p>

      <h3>Sunday - ${getTranslation("Picnic")}</h3>
      <p><a href="https://maps.app.goo.gl/7Wm8cVSgYnBnZhey7">Our garden</a></p>
      <p>14:00 - ${getTranslation("Picnic")}</p>

      <h2>${getTranslation("Speeches & Performances")}</h2>
      <p>${getTranslation(`Speech-text`)}</p>

      <h2>${getTranslation("Kids")}</h2>
      <p>${getTranslation(`Kids-text`)}</p>

      <h2>${getTranslation("Gifts")}</h2>
      <p>${getTranslation(`Gifts-text`)}<a href="honeymoonupgrades.html">10082024.com/honeymoonupgrades</a>.
      Thank you for being a part of our journey!</p>
  `;

  targetElement.appendChild(div);
}

export { loadDetails }