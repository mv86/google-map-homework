var MapWrapper = function(container, center, zoom) {
  this.googleMap = new google.maps.Map(container, {
    center: center,
    zoom: zoom
  });
};

MapWrapper.prototype = {
  addMarker: function(coords, message) {
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap,
      title: message
    });
    return marker;
  },

  addClickEvent: function() {
    google.maps.event.addListener(this.googleMap, 'click', function(event) {
      console.log(event.latLng.lat());
      console.log(event.latLng.lng());
      // var position = {lat: event.latLng.lat(), lng: event.latLng.lng()};
      // THIS IS A SHORTHAND FOR THE ABOVE
      var position = event.latLng;
      this.addMarker(position);
    }.bind(this));
  },

  addInfoWindow: function(map, coords, message, info) {
    var infowindow = new google.maps.InfoWindow({
      content: info
    });
    var marker = this.addMarker(coords, message);
    marker.addListener('click', function() {
      infowindow.open(map, coords);
    }.bind(this));
  }

  // addInfoWindow: function(info) {
  //   var infoWindow = new google.maps.InfoWindow({
  //     content: info
  //   });
  // return infoWindow;
  // },

  // addInfoClickEvent: function(map, marker, info) {
  //   var infoWindow = this.addInfoWindow(info);
  //   // google.maps.event.addListener(this.googleMap, 'click', function() {
  //   infoWindow.open(map, marker);
  // }

};

