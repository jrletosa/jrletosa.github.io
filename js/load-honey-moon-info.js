
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
    
    
    <h3>Some inspiration to make our trip more memorable</h3>
    
    <div class="space-between-h2-content"></div>
    
    <div class="honeymoon-upgrades-area">
        <img src="../img/upgrades/breakfast.jpeg" alt="">
        <img src="../img/upgrades/romantic-dinner.jpeg" alt="">
        <img src="../img/upgrades/ocean-adventure.jpeg" alt="">
        <img src="../img/upgrades/hotel-room.jpeg" alt="">
        <img src="../img/upgrades/flight.jpeg" alt="">
    </div>
`;

  targetElement.appendChild(div);
}

export { loadHoneyMoonInfo }