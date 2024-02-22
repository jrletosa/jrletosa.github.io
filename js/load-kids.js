
import {getTranslation} from './translations.js'

function loadKidsInfo(targetElementId) {
  var targetElement = document.getElementById(targetElementId);
  if (!targetElement) {
    console.error("Target element not found");
    return;
  }

  var div = document.createElement('div');
  div.classList.add("content");
  div.innerHTML = `
    <h1>Kids</h1>
    
    <div class="space-between-h2-content"></div>
    
    <p>${getTranslation('Kids-text')}</p>
  `;

  targetElement.appendChild(div);
}

export { loadKidsInfo }