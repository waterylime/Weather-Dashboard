window.addEventListener('load', ()=>{


    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
long = position.coords.longitude;
lat = position.coords.latitude;

var APIKey = "500d26746e8c4e16d7bb84617a694bdf";
const api = `http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139` + APIKey;

fetch(api)
        .then(response =>{
            return response.json();
        })

        .then(data =>{
console.log(data)
        })
        });
        
        
    }


});