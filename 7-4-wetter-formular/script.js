let url = "https://app-prod-ws.meteoswiss-app.ch/v1/plzDetail?plz="

function wetter_abfragen(plz) {
    fetch(url+plz+"00").then((res) => res.json()).then((data) => {alert(JSON.stringify(data))}).catch(err => console.error("Error fetching weather data:", err))
}

let plz_feld = document.querySelector("input[name='plz_feld']")
document.querySelector("button").addEventListener("click", () => wetter_abfragen(plz_feld.value))
