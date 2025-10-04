let home_page = "http://localhost:3001/%5Cproject/?" 
let token_url = "http://127.0.0.1:3000/auth/jwt/sign"

async function login() {
    let res = await fetch(token_url, {method: "POST", headers: {"Content-Type": "application/json"},
    body: JSON.stringify({email: "asdlfkj@sd.com", 
    password: document.getElementById("login-password").value})})
    let data = await res.json()
    localStorage.setItem("token", "Bearer " + data["token"])
    window.location.href = home_page + "token=" + encodeURIComponent("Bearer " + data["token"])
}


document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault()
    login()})
