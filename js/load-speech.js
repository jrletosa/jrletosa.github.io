
import {getTranslation} from './translations.js'

function loadSpeechInfo(targetElementId) {
  var targetElement = document.getElementById(targetElementId);
  if (!targetElement) {
    console.error("Target element not found");
    return;
  }

  var div = document.createElement('div');
  div.classList.add("content");
  div.innerHTML = `
    <h1>${getTranslation("Speeches & Performances")}</h1>
    
    <div class="space-between-h2-content"></div>
    
    <p>${getTranslation('Speech-text')}</p>
  `;

  targetElement.appendChild(div);
}

export { loadSpeechInfo }