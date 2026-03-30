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


const button = document.getElementById("get-prayer-times-button")
const dropdown = document.getElementById("dropdown").value

const schoolelement= document.getElementById("school").value
const apiKey = 'TTj9qlosRdL3qz6GPfU21C50LpwDhbqW7STn41FIMxpcKzxF'

button.addEventListener('click', function() {
  getLocation()
});

function getLocation(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  else{
    alert("Sorry, this browser doesn't support geolocation!");
  }
}

function showPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const url = `https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=${dropdown}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
        console.log(data.data.timings.Fajr);
        console.log(dropdown)
        document.getElementById("fajr").innerHTML = data.data.timings.Fajr;
        document.getElementById("sunrise").innerHTML = data.data.timings.Sunrise;
        document.getElementById("zhur").innerHTML = data.data.timings.Dhuhr;
        document.getElementById("asr").innerHTML = data.data.timings.Asr;
        document.getElementById("maghrib").innerHTML = data.data.timings.Maghrib;
        document.getElementById("esha").innerHTML = data.data.timings.Isha;
    })

    .catch(error => {
      console.error(error)
    })

};