window.addEventListener('load', function() {
  console.log('load event detected!');
  updateImageMapCoordinates();
});

window.addEventListener('resize', function() {
  console.log('resize event detected!');
  updateImageMapCoordinates();
});

function updateImageMapCoordinates() {
  var mapImage = document.getElementById('map-image');
  var scaleFactorWidth = mapImage.clientWidth / mapImage.naturalWidth;
  var scaleFactorHeight = mapImage.clientHeight / mapImage.naturalHeight;
  console.log('Scale factors: ' + scaleFactorWidth + ', ' + scaleFactorHeight);

  var areas = document.querySelectorAll('map[name="image-map"] area');
  areas.forEach(function(area) {
    //var coords = area.getAttribute('coords').split(',');
    var coords = []
    if (area.getAttribute('id') === 'details-area') {
      console.log("details-coords")
      coords = ["508","200","334","601"]
    } else {
      console.log("rsvp-coords")
      coords = ["729","78","1055","356"]
    }
    // Adjust coordinates based on image size and scale factors
    var newCoords = coords.map(function(coord, index) {
      return Math.round(index % 2 === 0 ? coord * scaleFactorWidth : coord * scaleFactorHeight);
    });
    // Update area coordinates
    area.setAttribute('coords', newCoords.join(','));
    console.log('Updated coordinates to ' + newCoords.join(','));
  });
}

