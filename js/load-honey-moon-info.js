
import {getTranslation} from './translations.js'

function loadHoneyMoonInfo(targetElementId) {
  var targetElement = document.getElementById(targetElementId);
  if (!targetElement) {
    console.error("Target element not found");
    return;
  }

  var div = document.createElement('div');
  div.classList.add("content");
  div.innerHTML = `
    <h1>Honeymoon Upgrades</h1>
    
    <div class="space-between-h2-content"></div>
    
    <p>${getTranslation('Gifts-text')}</p>
`;

  targetElement.appendChild(div);
}

export { loadHoneyMoonInfo }