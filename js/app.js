navigator.geolocation.getCurrentPosition(onSuccess,onError);

let currentGeo = [];

function onSuccess(position){
    let currentLat = position.coords.latitude;
    let currentLon = position.coords.longitude;
    currentGeo = [currentLat,currentLon];
    makeMap();
}

function onError(error){
    console.log("code:" + error.code + ", message:" + error.message);
}

