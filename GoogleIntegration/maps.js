

$("#search").on("click", function(event){

    event.preventDefault();
    var apikey = "AIzaSyATvFSKs1YEJMLy6w9qAIXKWgzoteNXrmg";
    var address = "19750 Auburn Dr, Cupertino, CA";

//     var map;
//     var service;
//     var infowindow;

//     function initMap() {
//     var mapCenter = new google.maps.LatLng(-33.8617374,151.2021291);

//     map = new google.maps.Map(document.getElementById('map'), {
//         center: mapCenter,
//         zoom: 15
//     });

//   var request = {
//     query: 'Museum of Contemporary Art Australia',
//     fields: ['photos', 'formatted_address', 'name', 'rating', 'opening_hours', 'geometry'],

//     service = new google.maps.places.PlacesService(map);
//     service.findPlaceFromQuery(request, callback);
//     }

// function callback(results, status) {
//   if (status == google.maps.places.PlacesServiceStatus.OK) {
//     for (var i = 0; i < results.length; i++) {
//       var place = results[i];
//       createMarker(results[i]);
//     }
//   }
// }


});