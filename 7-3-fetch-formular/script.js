function find_ort(plz) {
    fetch('./places.json').then((res) => res.json()).then((data) => {
        document.querySelector("#ort").value = data.find((data) => data.zipcode == plz).place
        // map, reduce, filter, forEach für Prüfung
    });
}

let plz = document.querySelector("#postleitzahl")
plz.addEventListener("blur", () => find_ort(plz.value))