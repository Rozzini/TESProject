var TILE_URL = 'http://127.0.0.1:8887/{z}/{x}/{y}';

var map;
var mapEl;
var layer;
var layerID = 'my-custom-layer';

window.initMap = function () {
    mapEl = document.querySelector('#map');

    map = new google.maps.Map(mapEl, {
        center: new google.maps.LatLng(10, 50),
        zoom: 4
    });

    layer = new google.maps.ImageMapType({
        name: layerID,
        getTileUrl: function (coord, zoom) {
            console.log(coord);
            var url = TILE_URL
                .replace('{x}', coord.x)
                .replace('{y}', coord.y)
                .replace('{z}', zoom);
            return url;
        },
        tileSize: new google.maps.Size(512, 512),
        minZoom: 1,
        maxZoom: 6
    });

    map.mapTypes.set(layerID, layer);
    map.setMapTypeId(layerID);
};