const requestOptions = {
  method: "GET",
  redirect: "follow"
};

navigator.geolocation.getCurrentPosition(
  (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    console.log("Lat:", lat, "Lon:", lon);

    fetch(`&q=${lat},${lon}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result.current.condition.text);

        document.getElementById("firstContainer").innerHTML = `
          <h1>${result.current.temp_c} °C</h1>
          <img src="https:${result.current.condition.icon}" alt="${result.current.condition.text}">
          <h2>${result.location.name}</h2>
          <h3>${result.current.condition.text}</h3>
        `;
      });
  },
  
);