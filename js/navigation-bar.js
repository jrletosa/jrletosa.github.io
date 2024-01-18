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
        <li><a href="#" onclick="redirectToAbout()">${getTranslation("About")}</a></li>
        <li class="submenu">
          <ul>
            <li><a href="#">Subsection 1</a></li>
            <li><a href="#">Subsection 2</a></li>
          </ul>
        </li>
        <li><a href="#" onclick="redirectToAbout()">${getTranslation("About 2")}</a></li>
      </div>
  `;

  targetElement.appendChild(div);

  includeCss("../css/green_house.css");

  window.redirectToIndex = redirectToIndex;
  window.redirectToAbout = redirectToAbout;
}

function redirectToAbout() {
    window.location.href = 'about.html';
}
function redirectToIndex() {
  window.location.href = 'index.html';
}

function includeCss(href) {
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = href;

  document.head.appendChild(link);
}

export {includeNavigationMenu}
