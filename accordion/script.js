let texte = ["Ой у лузи червона калына похылылася", "А ну донат киньте мне", "понятно всем вас я понял", "де наебал?"]

function popup(e) {
    e.target.classList.toggle("clicked")
    if (e.target.classList.contains("clicked")) {
        e.target.innerText = "-" 
        const span = document.createElement("span")
        span.innerText = texte[e.target.id]
        e.target.after(span)
    } else {
        e.target.innerText = "+"
        document.body.removeChild(e.target.nextElementSibling)
    }
}

function add_new() {
    const div = document.createElement("div")
    const input_text = document.querySelector("#add").value
    div.innerText = "+"
    div.classList.add("accordion")

    div.addEventListener("click", popup)
    texte.push(input_text)
    div.id = Array.from(texte).indexOf(input_text)
    document.body.append(div)
}

texte.forEach((text) => {
    const div = document.createElement("div")
    div.classList.add("accordion")
    div.innerText = "+"
    
    div.addEventListener("click", popup)
    div.id = Array.from(texte).indexOf(text)
    document.body.append(div)}
    )
// Assign function popup to the accordions

document.querySelector("#submit").addEventListener("click", add_new)
