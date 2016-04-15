//Create a function to make a map

function makeMap() {
  var latitudeCF = 47.618210;
  var longitudeCF = -122.351827;
  var latitudeUW = 47.654179;
  var longitudeUW = -122.308047;
  var latitudeSU = 47.610565;
  var longitudeSU = -122.317164;
  var latitudeGR = 47.313435;
  var longitudeGR = -122.177989;
  var latCen = 47.49;
  var lonCen = -122.28;

  var mapProp = {
    center: new google.maps.LatLng(latitudeCF, longitudeCF +.02),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false
  };

  //Create a new map object
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);


  var markerCF = new google.maps.Marker({
    title:"Code Fellows",
    icon: 'https://lh3.googleusercontent.com/-rNI-AWfP-Sc/AAAAAAAAAAI/AAAAAAAAACY/GcAcfgPbjM4/s46-c-k-no/photo.jpg',
    position: {lat: latitudeCF, lng: longitudeCF}
  });

  var markerUW = new google.maps.Marker({
    title:"University of Washington",
    icon: 'http://courses.be.washington.edu/SHARE/image/uw_icon.png',
    position: {lat: latitudeUW, lng: longitudeUW}
  });

  var markerSU = new google.maps.Marker({
    // animation: google.maps.Animation.DROP,
    title:"Seattle University",
    icon: 'http://mutantmush.wdfiles.com/local--files/seattle-university/SUlogo.jpg',
    position: {lat: latitudeSU, lng: longitudeSU}
  });

  var markerGR = new google.maps.Marker({
    title:"Green River Community College",
    icon: 'http://www.american-school-search.com/images/small-icon/green-river-community-college.png',
    position: {lat: latitudeGR, lng: longitudeGR}
  });

  //Place the markers on the map
  markerCF.setMap(map);
  markerUW.setMap(map);
  markerSU.setMap(map);
  markerGR.setMap(map);


  //Bounce function!
  function toggleBounce() {
    if (this.getAnimation() !== null) {
      this.setAnimation(null);
    } else {
      this.setAnimation(google.maps.Animation.BOUNCE);
    }
  };

  //Make the marker bounce when clicked
  markerCF.addListener('click', toggleBounce);
  markerUW.addListener('click', toggleBounce);
  markerSU.addListener('click', toggleBounce);
  markerGR.addListener('click', toggleBounce);
};

//Event listener to load the map
google.maps.event.addDomListener(window, 'load', makeMap);

