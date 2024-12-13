var map;

function success(pos){

    if (map === undefined) {
        map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 11);
    } else {
        map.remove();
        map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 11);
    }
    
    L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}', {
        minZoom: 0,
        maxZoom: 20,
        attribution: '&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        ext: 'jpg'}).addTo(map);

        // localização do usuario
        L.marker([pos.coords.latitude, pos.coords.longitude]).addTo(map)

        // Inicio do circuito
        L.marker([-23.695569, -46.395946]).addTo(map)
    
        L.Routing.control({
            waypoints: [
            L.latLng(pos.coords.latitude, pos.coords.longitude),
            L.latLng(-23.695569, -46.395946)
            ]
        }).addTo(map);
        
}



function error(err){
    console.log(err);
}

var watchID = navigator.geolocation.watchPosition(success, error, {
    enableHighAccuracy: true,
    timeout: 5000
});