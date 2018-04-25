const keyAPI = "AIzaSyB55RI2UNsn9pxfGOvIXT5FR-U1POKjdCk";
var map;
var mapElement;

window.addEventListener("load", e => {
    mapElement = document.querySelector("#map");
    loadGoogleMapAPI().then(() => {
            console.log("map API loaded");
            map = new google.maps.Map(mapElement, {
                center: {lat: 60.79, lng: 10.6843},
                zoom: 14,
            });
            map.addListener("click", e => {
                showInfo({lat: e.latLng.lat(), len: e.latLng.len()});
            });
    });
});

function showInfo(info){
    console.log(info);
}

/**
 *
 */
function loadGoogleMapAPI() {
    return new Promise((resolve, reject) => {
        var script = document.createElement("script");
        script.addEventListener("load", resolve);
        script.src = `https://maps.googleapis.com/maps/api/js?key=${keyAPI}`;
        document.querySelector("head").appendChild(script);

    });
}
