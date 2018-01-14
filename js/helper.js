/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span id="role">%data%</span><hr>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><a href="#"><span class="white-text">%data%</span></a></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><a href="#"><span class="white-text">%data%</span></a></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">Twitter</span><a href="%link%"><span class="white-text">%data%</span></a></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">GitHub</span><a href="%link%"><span class="white-text">%data%</span></a></li>';
var HTMLlinkin = '<li class="flex-item"><span class="orange-text">LinkedIn</span><a href="%link%"><span class="white-text">%data%</span></a></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><a href="#"><span class="white-text">%data%</span></a></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = '%data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';
var HTMLonlinePic = '<img src="%data%">';
// var locations = [
//   {
//         title: 'Mira Loma High School',
//         location: {
//             lat: 38.6333032,
//             lng: -121.3704513
//         },
//         address: "4000 Edison Ave, Sacramento, CA 95821",
//         phone: "(916)971-7465",
//         url : ""
//     },
//     {
//         title: 'Dutch Brothers',
//         location: {
//             lat: 38.665217,
//             lng:  -121.342152
//         },
//         address: "5289 Auburn Blvd, Sacramento, CA 95841",
//         phone: "(541)955-4700",
//         url : ""
//     },
//     {
//         title: 'Thai Hut',
//         location: {
//             lat: 38.6597717,
//             lng: -121.3285258
//         },
//         address: "5800 Madison Ave k, Sacramento, CA 95841",
//         phone: "(916)349-8844",
//         url : ""
//     },
//     {
//         title: 'Arcade Creek Park',
//         location: {
//             lat: 38.66,
//             lng: -121.33
//         },
//         address: "5613 Omni Dr, Sacramento, CA 95841",
//         phone: "(916)482-8377",
//         url : ""
//     },
//     {
//         title: 'Christ Community Church',
//         location: {
//             lat: 38.657923,
//             lng: -121.328110
//         },
//         address: "United States, 5025 Manzanita Ave, Carmichael, CA 95608",
//         phone: "(916)344-2382",
//         url : ""
//     },
//     {
//         title: 'VCA Sacramento Animal Medical Group',
//         location: {
//             lat: 38.655541,
//             lng: -121.3271
//         },
//         address: "4990 Manzanita Ave, Carmichael, CA 95608",
//         phone: "(916)331-7430",
//         url : ""
//     },
// ];
// var map;
// var markers = [];
// var placeMarkers = [];
// var placelist = document.getElementById('clicklist');
// function initMap() {
//     map = new google.maps.Map(document.getElementById('map'), {
//         center: {
//             lat: 38.6597717,
//             lng: -121.328110
//         },
//         zoom: 13,
//         mapTypeControl: false
//     });
//     var largeInfowindow = new google.maps.InfoWindow();
//     for (var i = 0; i < locations.length; i++) {
//         var position = locations[i].location;
//         var title = locations[i].title;
//         var address = locations[i].address;
//         var phone = locations[i].phone;
//         var foursquareapiurl = "https://api.foursquare.com/v2/venues/search?ll=" + locations[i].location.lat + "," + locations[i].location.lng + "&client_id=22EKUI5CYBNLNDMHFMC5TUYSS2M1HMBVRB4VUTSODER3QAWC&client_secret=F2HTCRSSOEFJ5CIKRQJVGX01WRHMFZ3ZJ1PAEYUEE2OLWSPA&v=20171203&query=" + locations[i].title;
//         var results;
//         var marker = new google.maps.Marker({
//             position: position,
//             title: title,
//             animation: google.maps.Animation.DROP,
//             address: address,
//             phone: phone,
//             icon: defaultIcon,
//             id: i,
//             additionalinformation: foursquareapiurl,
//             url : results
//         });
//         markers.push(marker);
//         var bounds = new google.maps.LatLngBounds();
//         for (var i = 0; i < markers.length-1; i++) {
//             markers[i].setMap(map);
//             bounds.extend(markers[i].position);
//         };
//         map.fitBounds(bounds);
//     }
// }

// function populateInfoWindow(marker, infowindow) {
//     if (infowindow.marker != marker) {
//         infowindow.setContent('');
//         infowindow.marker = marker;
//         infowindow.addListener('closeclick', function() {
//             infowindow.marker = null;
//         });
//         var streetViewService = new google.maps.StreetViewService();
//         var radius = 50;
//         function getStreetView(data, status) {
//           var url = {};
//           $.ajax({
//             url: marker.additionalinformation,
//             dataType: 'json',
//             success: function(data) {
//               if (data.response.venues[0].url !== undefined) {
//                 url = data.response.venues[0].url;
//               }
//               else {
//                 url = "";
//               }
//             },
//             error : function() {
//               alert("error")
//             }
//           });
//           console.log(url);
//             if (status == google.maps.StreetViewStatus.OK) {
//                 var nearStreetViewLocation = data.location.latLng;
//                 var heading = google.maps.geometry.spherical.computeHeading(
//                     nearStreetViewLocation, marker.position);
//                 infowindow.setContent('<div>' + marker.title + '</div><div id="pano"></div>' + '<div>' + marker.address + '</div>' + '<div>' + marker.phone + '</div>' + '<div>' + url +  '</div>' + '<div><a href="' + marker.additionalinformation + '">' + "more info" + "</a></div>");
//                 var panoramaOptions = {
//                     position: nearStreetViewLocation,
//                     pov: {
//                         heading: heading,
//                         pitch: 30
//                     }
//                 };
//                 var panorama = new google.maps.StreetViewPanorama(
//                     document.getElementById('pano'), panoramaOptions);
//             } else {
//                 infowindow.setContent('<div>' + marker.title + '</div>' + '<div>' + marker.address + '</div>' + '<div>' + marker.phone + '</div>' + '<div>' + url +  '</div>'+
//                     '<div>No Street View Found</div>' + '<div><a href="' + marker.additionalinformation + '">' + "more info" + "</a></div>");
//             }
//         }
//         streetViewService.getPanoramaByLocation(marker.position, radius, getStreetView);
//         infowindow.open(map, marker);
//     }
// }

// function makeMarkerIcon(markerColor) {
//     var markerImage = new google.maps.MarkerImage(
//         'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|' + markerColor +
//         '|40|_|%E2%80%A2',
//         new google.maps.Size(21, 34),
//         new google.maps.Point(0, 0),
//         new google.maps.Point(10, 34),
//         new google.maps.Size(21, 34));
//     return markerImage;
// }

// function createMarkersForPlaces(places) {
//     var bounds = new google.maps.LatLngBounds();
//     for (var i = 0; i < places.length; i++) {
//         var place = places[i];
//         var icon = {
//             url: place.icon,
//             size: new google.maps.Size(35, 35),
//             origin: new google.maps.Point(0, 0),
//             anchor: new google.maps.Point(15, 34),
//             scaledSize: new google.maps.Size(25, 25)
//         };
//         var marker = new google.maps.Marker({
//             map: map,
//             icon: icon,
//             title: place.name,
//             position: place.geometry.location,
//             id: place.place_id
//         });
//         var placeInfoWindow = new google.maps.InfoWindow();
//         marker.addListener('click', function() {
//             if (placeInfoWindow.marker == this) {
//                 console.log("This infowindow already is on this marker!");
//             } else {
//                 getPlacesDetails(this, placeInfoWindow);
//             }
//         });
//         placeMarkers.push(marker);
//         if (place.geometry.viewport) {
//             bounds.union(place.geometry.viewport);
//         } else {
//             bounds.extend(place.geometry.location);
//         }
//     }
//     map.fitBounds(bounds);
// }
// function myErrorHandlingFunction(){
//   alert("error!!!!")
// };
