document.addEventListener("DOMContentLoaded", () => document.querySelector("#destinations").style = 
"display: flex; flex-direction: row; flex-wrap: wrap; gap: 50px;")

let choosen_history;
function pick_random_land (rec) {
    if (choosen_history) {
        choosen_history.classList.remove("choosen")
    }
    let random_zahl = Math.floor(Math.random() * 194)
    // alert(document.querySelector("#destinations").children[random_zahl].children[0].innerHTML)
    var random_land = document.querySelectorAll("#destinations li .country")[random_zahl]
    choosen_history = document.querySelectorAll("#destinations li")[random_zahl]
    if (!rec) {
        alert(random_land.innerHTML)
    }
    choosen_history.classList.add("choosen")
}

function random_anim() {
    for (let i = 0; i <= 4000; i+=100) {
        setTimeout(() => pick_random_land(rec=true), i)
    }
}

document.querySelector("#choose").addEventListener("click", random_anim)
