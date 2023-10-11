
// Add a tile layer.
var map = L.map('map').setView([0, 0], 2); // Set initial map center and zoom level

// Add a tile layer (you can use other tile providers)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Parse the GeoJSON data and add it to the map
var geojsonLayer = L.geoJSON(geo_json, {
    onEachFeature: function (feature, layer) {
        // Customize the popup content for each feature
        var popupContent = "<b>Team:</b> " + feature.properties.Team + "<br>" +
                           "<b>League:</b> " + feature.properties.League + "<br>" +
                           "<b>Division:</b> " + feature.properties.Division;

        layer.bindPopup(popupContent);
    }
}).addTo(map);


// Looping through the cities array, create one marker for each city, bind a popup containing its name and population, and add it to the map.
for (let i = 0; i < cities.length; i++) {
  let city = cities[i];
  L.marker(city.location)
    .bindPopup(`<h1>${city.name}</h1> <hr> <h3>Population ${city.population.toLocaleString()}</h3>`)
    .addTo(myMap);
}
