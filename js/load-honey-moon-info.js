
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
    <h1>Honey Moon Upgrades</h1>
    
    <div class="space-between-h2-content"></div>
    
    <p><b>Couple massage</b><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</p>
    
    <p><b>Flight Ticket upgrade</b><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</p>
    
    <p><b>Hotel room upgrade</b><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</p>
    
    <p><b>Dinner on the beach</b><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</p>
`;

  targetElement.appendChild(div);
}

export { loadHoneyMoonInfo }