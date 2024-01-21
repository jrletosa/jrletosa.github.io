// navigation-bar.js
import {getTranslation} from './translations.js'

function includeNavigationMenu(targetElementId) {
  var targetElement = document.getElementById(targetElementId);
  if (!targetElement) {
    console.error("Target element not found");
    return;
  }

  var div = document.createElement('div')
  div.classList.add("container");
  div.innerHTML = `
      <div class="navigation-bar">
        <div class="greenhouse-container">
          <img src="../img/green-house.png" alt="Home" onclick="redirectToIndex()">
        </div>
        <li><a href="#" onclick="redirectToIndex()">${getTranslation("Home")}</a></li>
        <li><a href="#">${getTranslation("Wedding Day")}</a></li>
        <li class="submenu">
          <ul>
            <li><a href="#" onclick="redirectToWeddingLocation()">${getTranslation("Location")}</a></li>
            <li><a href="#" onclick="redirectToWeddingAgenda()">${getTranslation("Agenda")}</a></li>
            <li><a href="#" onclick="redirectToWeddingDressCode()">${getTranslation("Dress Code")}</a></li>
          </ul>
        </li>
        <li><a href="#">${getTranslation("Brunch Day")}</a></li>
        <li class="submenu">
          <ul>
            <li><a href="#" onclick="redirectToIndex()">${getTranslation("Brunch - Time & Location")}</a></li>
          </ul>
        </li>
      </div>
  `;

  targetElement.appendChild(div);

  includeCss("../css/green_house.css");

  window.redirectToIndex = redirectToIndex;
  window.redirectToAbout = redirectToAbout;
  window.redirectToWeddingLocation = redirectToWeddingLocation;
  window.redirectToWeddingAgenda = redirectToWeddingAgenda;
  window.redirectToWeddingDressCode = redirectToWeddingDressCode;
}

function redirectToIndex() {
  window.location.href = 'index.html';
}

function redirectToWeddingLocation() {
  window.location.href = 'wedding-location.html';
}

function redirectToWeddingAgenda() {
  window.location.href = 'wedding-agenda.html';
}

function redirectToWeddingDressCode() {
  window.location.href = 'wedding-dress-code.html';
}

// jrletosa remove
function redirectToAbout() {
    window.location.href = 'about.html';
}

function includeCss(href) {
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = href;

  document.head.appendChild(link);
}

export {includeNavigationMenu}
