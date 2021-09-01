var mymap = L.map('mapid').setView([48.5, -122.5], 13);

/*var marker = L.marker([48.5, -122.5]).addTo(mymap);

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
]).addTo(mymap);*/

L.tileLayer.provider('Stamen.Watercolor').addTo(mymap);

var geojsonLayer = new L.GeoJSON.AJAX("boatpoints.geojson");
geojsonLayer.addto(mymap);

$.ajax({
 url:'boatpoints.geojson',
 dataType: "json",
 success: console.log("Data successfully loaded!"),
 error: function (xhr) {
    alert(xhr.statusText)
 }
})
