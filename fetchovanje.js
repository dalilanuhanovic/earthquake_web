console.log("Working");
function initMap() {
  // The location of Center
  var centar = {lat: 33.4961667, lng: -116.4961667};
  // The map, centered at Center
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: centar});
  // The marker, positioned at Centar
  fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    //funkcija za popunjavanje liste zemljotresa u <ul id="lista">
    function popunjavane(){
        for (i=0;i < data.features.length ; i++){
            document.getElementById("lista").innerHTML += "<li>" + data.features[i].properties.place + "</li>";
        }
    }
    popunjavane();
    // Funkcija koja prolazi kroj citav fetchovani objekat sa API-a , da bi koristili koordinate za prikaz markera na mapi
    let niz=data.features;
    niz.forEach(grad => {
      console.log(grad.geometry.coordinates);
      // postavljanje markera na svaku fetchovanu lokaciju
     var lokacija = {lat: grad.geometry.coordinates[1], lng: grad.geometry.coordinates[0]};
     var marker = new google.maps.Marker({position: lokacija, map: map});
    });
    
   
  });
 
}



