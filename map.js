var mymap = L.map('mapid').setView([48.5, -122.5], 13);

var marker = L.marker([48.5, -122.5]).addTo(mymap);

var circle = L.circle([48.505, -122.505], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);


var polygon = L.polygon([
    [48.509, -122.58],
    [48.503, -122.56],
    [48.51, -122.57]
]).addTo(mymap);

var myStyle = {
    "color": "#ff7800",
    "weight": 5,
    "opacity": 0.65
};

L.geoJSON(boatpoints.geojson, {
    style: myStyle
}).addTo(map);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZGlzZXF1aWxpYnJpdW0iLCJhIjoiY2t0MHplNWxlMDF2bzJvcGNjNDQ4c2VwYiJ9.C-U-EoZNVVsdr84Nai8zBw'
}).addTo(mymap);
