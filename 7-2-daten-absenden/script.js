const url = "https://jsonplaceholder.typicode.com/posts"
let id_counter = 0

function absenden(url) {
    let id = document.getElementById("id")
    let name = document.getElementById("name")
    id_counter++
    id.value = id_counter
    fetch(url, {headers: {"Content-Type": "application/json"}, method: "POST",
    body: JSON.stringify({id: id.value, name: name.value})})
    .then((response) => response.json())
}

function medichok() {
    alert("dsj")
}

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault()
    absenden(url)
})
