// navigation-bar.js
import {getTranslation, changeLanguage} from './translations.js'

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
          <img src="../img/greenhouse-logo.png" alt="Home" onclick="redirectToIndex()">
        </div>
        <div class="language-selector">
          <a href="#" class="language-option" onclick="changeLanguage('en')"><img src="../img/flags/gb.svg" alt="English"></a>
          <a href="#" class="language-option" onclick="changeLanguage('es')"><img src="../img/flags/es.svg" alt="Spanish"></a>
          <a href="#" class="language-option" onclick="changeLanguage('pl')"><img src="../img/flags/pl.svg" alt="Polish"></a>
          <a href="#" class="language-option" onclick="changeLanguage('sv')"><img src="../img/flags/se.svg" alt="Swedish"></a>
        </div>

        <li><a href="#" onclick="redirectToIndex()">${getTranslation("Home")}</a></li>
        <li><a href="#" onclick="redirectToDetails()">${getTranslation("Details")}</a></li>
        <li><a href="#" onclick="redirectToRSVP()">${getTranslation("RSVP")}</a></li>
      </div>
  `;

  targetElement.appendChild(div);

  includeCss("../css/green_house.css");

  window.redirectToIndex = redirectToIndex;
  window.redirectToDetails = redirectToDetails;
  window.redirectToRSVP = redirectToRSVP;
  window.changeLanguage = changeLanguage;

}

function redirectToIndex() {
  window.location.href = 'index.html';
}

function redirectToDetails() {
  window.location.href = 'details.html';
}

function redirectToRSVP() {
  window.location.href = 'rsvp.html';
}

function includeCss(href) {
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = href;

  document.head.appendChild(link);
}

export {includeNavigationMenu}
