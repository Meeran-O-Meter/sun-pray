window.addEventListener("load", () => {
    clock();
    function clock() {
        const today = new Date();

        const hours = today.getHours();
        const minutes = today.getMinutes();
        const seconds = today.getSeconds();

        const hour = hours < 10 ? "0" + hours : hours;
        const minute = minutes < 10 ? "0" + minutes : minutes;
        const second = seconds < 10 ? "0" + seconds : seconds;


        const time = hour+ ":" + minute + ":" + second;
        document.getElementById("clock").innerHTML = time;
        setTimeout(clock, 1000);


    }
});


function getLocation() {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("This browser doesn't support geolocation :(");
    }
}

function showPosition() {
    const latidude = position.coords.latidude;
    const longitude = navigator.getLocation;
    
    document.getElementById("address").innerHTML = longitude + latidude;
    console.log("Latitude: " + latidude + ", Longitude: " + longitude);
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      alert("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      alert("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      alert("An unknown error occurred.");
      break;
  }
}