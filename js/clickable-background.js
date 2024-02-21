
function includeClickableBackground(targetElementId) {
  var targetElement = document.getElementById(targetElementId);
  if (!targetElement) {
    console.error("Target element not found");
    return;
  }

  var div = document.createElement('div');
  div.innerHTML = `
    <img src="../img/background/wedding-web-background-4.jpeg" 
    usemap="#image-map"
    class="container-img">
  
    <map name="image-map">
      <area target="" alt="" title="" href="#" onclick="redirectToRSVP()" coords="753,68,1079,176,1010,380,880,339,889,163,722,157,752,68" shape="poly">
      <area target="" alt="" title="" href="#" onclick="redirectToAgenda()" coords="513,187,305,301,501,618" shape="poly">
    </map>
  `;

  targetElement.appendChild(div);

  window.redirectToRSVP = redirectToRSVP;
  window.redirectToAgenda = redirectToAgenda;
}

function redirectToRSVP() {
  window.location.href = 'rsvp.html';
}

function redirectToAgenda() {
  window.location.href = 'agenda.html';
}

export { includeClickableBackground }