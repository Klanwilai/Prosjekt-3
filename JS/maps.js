const keyAPI = "AIzaSyB55RI2UNsn9pxfGOvIXT5FR-U1POKjdCk";
var map;
var mapElement = document.querySelector("#map");
var mapInfo = document.querySelector("#map-info");
var streetImg = document.querySelector("#img");
var heading = [0, 90, 180, 270];    //degrees for heading when geetting street view images, credit: got the idea from Martin


/**
 *  Loads the google map, but only if the API is fully loaded
 *  also adds functionality for when you click on the map
 *  Credit: Got it from Kolloens lectures.
 */
window.addEventListener("load", e => {
    loadGoogleMapAPI().then(() => {
            console.log("map API loaded");
            map = new google.maps.Map(mapElement, {
                // Roughly the coordinates to NTNU
                center: {lat: 60.79, lng: 10.6843},
                zoom: 14,
            });
            map.addListener("click", e => {
                showInfo({lat: e.latLng.lat(), lng: e.latLng.lng()});
            });
    });
});


/**
 * Displays adress and streetview pictures on the webpage
 * takes @param info as parameter, info being the coordinates of where you clicked on the map.
 * Credit: Got most of this from Kolloens lectures
 */
function showInfo(info){
    console.log(info);
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${info.lat},${info.lng}&key=${keyAPI}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        mapInfo.innerHTML = data.results[0].formatted_address;
    });
    // loops 4 times, to insert streetview pictures into each of the img html tags. uses the var heading to get view for each direction.
    for(i = 0; i <= 3; i++) {
        document.querySelector(`#img${i}`).src = `https://maps.googleapis.com/maps/api/streetview?size=250x200&location=${info.lat},${info.lng}&fov=90&heading=${heading[i]}&key=${keyAPI}`;
    }
}

/**
 * function that loads the API
 * @return Promise which resolves if API is loaded.
 * Credit: got this code from Kolloens lectures
 */
function loadGoogleMapAPI() {
    return new Promise((resolve, reject) => {
        var script = document.createElement("script");
        script.addEventListener("load", resolve);
        script.src = `https://maps.googleapis.com/maps/api/js?key=${keyAPI}`;
        document.querySelector("head").appendChild(script);

    });
}
