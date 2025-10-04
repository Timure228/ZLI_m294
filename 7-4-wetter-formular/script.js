let url = "https://proxy.corsfix.com/?https://app-prod-ws.meteoswiss-app.ch/v1/plzDetail?plz="

let p = document.createElement("p")
document.querySelector("button").after(p)

async function wetter_abfragen(plz) {
    if (isNaN(Number(plz))) {
        document.querySelector("input").setCustomValidity("Not a Number")
        document.querySelector("input").reportValidity()
    }
    document.querySelector("input").setCustomValidity("")
    await fetch(url+plz+"00").then((res) => res.json())
        .then((data) => {
            
            p.innerHTML = "In " + plz + " is now: " + 
            JSON.stringify(data["currentWeather"]["temperature"]) + "C"
        })
        .catch((err) => console.error("Error fetching weather data:", err))
}

let plz_feld = document.querySelector("input[name='plz_feld']")
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault() 
    wetter_abfragen(plz_feld.value)})
