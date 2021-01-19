function updateMap() {
    console.log("Updating map in realtime")
  fetch("/data.json")
    .then((response) => response.json())
    .then((rsp) => {
      //   console.log(rsp);
      rsp.data.forEach((element) => {
        latitude = element.latitude;
        longitude = element.longitude;

        cases = element.infected;

        if (cases > 255) {
          color = "rgb(255, 0, 0)";
        } else {
          color = `rgb(${cases}, 0, 0)`;
        }

        // mark on the map
        new mapboxgl.Marker({
          draggable: false,
          color: color,
        })
          .setLngLat([longitude, latitude])
          .addTo(map);
      });
    });
}

let interval = 20000;
setInterval(updateMap, interval);

// fetch("https://covid-19-data.p.rapidapi.com/help/countries?format=json", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
// 		"x-rapidapi-key": "8578110a40mshb2451f3b6f8279ap1d5a4djsnfd8ee0b4a2db"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.log(err);
// });
