document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault()
    let passwd = document.getElementById("password")
    let passwd_p = document.getElementById("prove")
    let checkbox = document.getElementById("licence")

    function add_toast(element, text, color) {
        let toast = document.createElement("div")
        toast.classList.add("toast")
        toast.style = "border-left: 8px solid " + color + ";"
        toast.innerHTML = text
        element.after(toast)
        setTimeout(() => element.nextElementSibling.remove(), 4000)
    }

    function check(e) {
        e.preventDefault()
        if (passwd.value === "" || passwd_p.value === "") {
            let button = document.querySelector("button")
            add_toast(button, "Enter Password!", "red")
            return;
        }
        if (passwd.value != passwd_p.value) {
            passwd_p.setCustomValidity("Passwörter müssen übereinstimmen")
            passwd_p.reportValidity()
            return;
        } if (!checkbox.checked) {
            checkbox.setCustomValidity("Terms and Conditions müssen angekreuzt sein, um weiter zu gehen")
            checkbox.reportValidity()
            return;
        } else {
            let button = document.querySelector("button")
            passwd_p.setCustomValidity("")
            checkbox.setCustomValidity("")
            add_toast(button, "Success!", "green")
        }
    }

    document.querySelector("#register").addEventListener("click", check)})
