let kantone = ["ag", "ai", "ar", "be", "bl", "bs", "fr", "ge", "gl", "gr", "ju", "lu", "ne", "nw", "ow", "sg", "sh",
    "so", "sz", "tg", "ti", "ur", "vd", "vs", "zg", "zh"]


let selected = []
let lose_count = 0

kantone.forEach((kanton) => {kantone.push(kanton)})
for (let i = kantone.length - 1; 0 < i; i--) {
      const j = Math.floor(Math.random() * i);
      [kantone[i], kantone[j]] = [kantone[j], kantone[i]];
   }


function choose(e) {
    if (e.target.classList.contains("turned")) {
        return;
    }
    selected.push(e.target)
    e.target.classList.add("turned")
    if (selected.length == 2) {
        setTimeout(() => checkCards(), 300)
    } 
}

function checkCards() {
    if (selected[0].src === selected[1].src) {
        selected[0].classList.replace("turned", "removed")
        selected[1].classList.replace("turned", "removed")
        selected[0].removeEventListener("click", choose)
        selected[1].removeEventListener("click", choose)
        selected = []
    } else {
        selected[0].classList.remove("turned")
        selected[1].classList.remove("turned")

        selected = []
    }
}

kantone.forEach((kanton) => {
    let img = document.createElement("img")
    img.src = "./bilder/img/" + kanton + ".png"
    document.addEventListener("DOMContentLoaded", () => img.style = "width: 80px; height: 80px;")
    img.addEventListener("click", choose)
    document.querySelector(".container").appendChild(img)
    })
