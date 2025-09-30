let counter = 0
function button1_script() {
    counter++
    document.querySelectorAll("h1")[0].innerText = counter
}
let counter2 = 0
function button2_script() {
    counter2 += 2
    document.querySelectorAll("h1")[1].innerText = counter2
}

function spring(event) {
    let div_x = Number(document.querySelector("div").style.width.replace("px", ""))
    let div_y = Number(document.querySelector("div").style.height.replace("px", ""))
    
    let tor_X = Number(document.getElementById("tor").style.left.replace("px", ""))
    let tor_Y = Number(document.getElementById("tor").style.top.replace("px", ""))

    document.getElementById("ball").style.left = (event.pageX - 45) + "px"
    document.getElementById("ball").style.top = (event.pageY - 45) + "px"
    if (event.pageX > (div_x / 2)) {
        counter++
        document.querySelectorAll("h1")[0].innerText = counter
    } if (event.pageX > tor_X
    && event.pageY > Number(div_y - tor_Y)
    && event.pageY < Number(div_y + tor_Y)) {
        alert("GOAAAAAL!!!!!")
        counter2 += 2
        document.querySelectorAll("h1")[1].innerText = counter2

    }
}
document.getElementById("button1").addEventListener("click", button1_script)
document.getElementById("button2").addEventListener("click", button2_script)
// Div
document.addEventListener("DOMContentLoaded", () => {
document.querySelector("div").style = "background-color: green; width: 400px; height: 400px;"})
document.querySelector("div").addEventListener("click", spring)
// Tor
document.addEventListener("DOMContentLoaded", () => {
document.getElementById("tor").style = "background-color: white; width: 100px; height: 200px; position: relative; left:300px; top: 100px"})