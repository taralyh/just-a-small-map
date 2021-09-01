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


L.tileLayer.provider('Stamen.Watercolor').addTo(mymap);

/*L.tileLayer.provider(Esri.WorldImagery, {
      maxZoom: 18
}).addTo(mymap);*/

/*var mapLink = '<a href="http://www.esri.com/">Esri</a>';
var wholink = 'i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community';

L.tileLayer(
            'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: '&copy; '+mapLink+', '+wholink,
            maxZoom: 18,
            }).addTo(mymap);*/

