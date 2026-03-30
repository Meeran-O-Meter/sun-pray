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
const calculationMethod = document.getElementById("dropdown").value
const schoolelement= document.getElementById("school").value
const apiKey = 'TTj9qlosRdL3qz6GPfU21C50LpwDhbqW7STn41FIMxpcKzxF'
const method = '3';
const school = '1';

function getLocation(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  else{
    alert("Sorry, this browser doesn't support geolocation!");
  }
}

function showPosition(position){
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const url = `https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=${schoolelement}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
        console.log(data.data.timings.Fajr);
    })
    .catch(error => {
      console.error(error)
    })

};

getLocation()