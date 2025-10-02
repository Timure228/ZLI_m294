let url = "http://10.70.4.8" 
function post_challenge() {
    let name = document.querySelector("#name")
    let message = document.querySelector("#message")
    alert("jebanulsia?")
    fetch(url + "/challenges/1", {headers: {"Content-Type": "application/json; charset=UTF-8"}, method: "POST"})
    .then((resp) => {
        fetch(url + "/comments", 
            {method: "POST", headers: {"Authorization": resp.headers.get("Authorization"), 
            "Content-Type": "application/json"},
        body: JSON.stringify({
            "username": name.value, 
            "message": message.value
        })}).catch((e) => e.status)
    }).catch((e) => e.status)
}
let button = document.querySelector("#button1")
button.addEventListener("click", post_challenge)
