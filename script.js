// set map to San Francisco
var map = L.map('map').setView([37.7, -122.4], 10);

 // load a tile layer
L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);

// add geojson to map
$.getJSON("https://raw.githubusercontent.com/gbrunner/adv-python-for-gis-and-rs/master/Week%201/sf_crime.geojson",function(data){
    // add GeoJSON layer to the map once the file is loaded
    L.geoJson(data).addTo(map);
  });
