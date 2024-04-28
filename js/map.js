
// Initialize and add the map
let map;

async function initMap() {
  const position = { lat: 42.6, lng: -110.328110 };
  // Request needed libraries.
  //@ts-ignore
  const { Map, InfoWindow } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement} = await google.maps.importLibrary("marker");

  var locations = [
    {
      title: 'Amazon - Coral (SEA68)',
      location: {
          lat: 47.6213080789873,
          lng:  -122.34250061337139
      },
      address: "2201 6th Ave, Seattle, WA 98121",
      phone: "N/A"
    },
    {
      title: 'University of Wisconsin-Madison',
      location: {
          lat: 43.076772245801486, 
          lng: -89.41242312698505
      },
      address: "South Hall, Madison, WI 53706",
      phone: "(608)2632400"
    },
    {
        title: 'Mira Loma High School',
        location: {
            lat: 38.6333032,
            lng: -121.3704513
        },
        address: "4000 Edison Ave, Sacramento, CA 95821",
        phone: "(916)971-7465"
    },
    {
        title: 'Sacramento Municipal Utility District',
        location: {
            lat: 38.5521325086392,
            lng: -121.42926117592462
        },
        address: "6301 S St, Sacramento, CA 95817",
        phone: "(888)7427683"
    }
  ];

  const infoWindow = new InfoWindow();

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "Resume",
  });

  for (var i = 0; i < locations.length; i++) {
    var locationPosition = locations[i].location;
    var title = locations[i].title;
    var address = locations[i].address;
    var phone = locations[i].phone;
    var contentString = "Location: " + title +  "<br>" + "Address: " + address + "<br>" + "Phone number: " + phone;
    const marker = new AdvancedMarkerElement({
      map: map,
      position: locationPosition,
      title: contentString,
    });

    // Add a click listener for each marker, and set up the info window.
    marker.addListener("click", ({ domEvent, latLng }) => {
      const { target } = domEvent;

      infoWindow.close();
      infoWindow.setContent(marker.title);
      infoWindow.open(marker.map, marker);
    });
  }
  
}

initMap();