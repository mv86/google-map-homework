var init = function () {
  var container = document.getElementById('main-map');
  var center = {lat: 50.7192, lng: -1.8808};
  var mainMap = new MapWrapper(container, center, 12);
  var message1 = 'Click for more info!';
  var bournemouthInfo = 'This is the center of Bouremouth, a lovelly place. Some say the algarve of the Uk!';
  // var infowindow = new google.maps.InfoWindow({
  //   content: bournemouthInfo
  // });
  // addListener('click', function() {
  //   infowindow.open(mainMap, center);
  // });
  // mainMap.addMarker(center, message1);
  mainMap.addInfoWindow(mainMap, center, message1, bournemouthInfo)
  mainMap.addClickEvent();
  // mainMap.addInfoClickEvent(mainMap, center, bournemouthInfo);
  var londonButton = document.createElement('button');
  londonButton.id = "londonButton";
  londonButton.innerText = "Take me to London";
  document.body.appendChild(londonButton);

  var backButton = document.createElement('button');
  backButton.id = "backButton";
  backButton.innerText = 'Back to sunny Bouremouth';
  document.body.appendChild(backButton);

  var button = document.getElementById('londonButton');
  button.onclick = londonClick;

  var bButton = document.getElementById('backButton');
  bButton.onclick = backClick;
};

var londonClick = function() {
  londonContainer = document.getElementById('main-map');
  londonCenter = {lat: 51.5074, lng: -0.1278};
  londonMap = new MapWrapper(londonContainer, londonCenter, 12);
  // setCenter({lat: 51.5074, lng: -0.1278});
}

var backClick = function() {
  container = document.getElementById('main-map');
  var center = {lat: 50.7192, lng: -1.8808};
  var mainMap = new MapWrapper(container, center, 12);
}

window.onload = init;