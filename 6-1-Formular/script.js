const result = document.createElement("p")
document.querySelector("h1").append(result)

let zahl = Math.floor(Math.random() * 5)
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault()
    let rat = document.querySelector("#number").value
    if (zahl == Number(rat)) {
        result.textContent = "YOU WON!!!"
    } else {
        result.textContent = "YOU LOH!!!"
    }
})
