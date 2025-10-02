let number = 0
document.querySelector("#number").innerHTML = number

const searchParams = new URLSearchParams(window.location.search)
history.pushState({page: 0}, "title "+ 0, "?page=" + 0);
searchParams.set("page", 0)

function increase_decrease(e) {
    if (e.target.id === "plus") {
        number++
        document.querySelector("#number").innerHTML = number
        history.forward()
        history.pushState({page: number }, "title "+ number, "?page=" + number);
    } else {
        number--
        document.querySelector("#number").innerHTML = number
        history.back()
        history.pushState({page: number }, "title "+ number, "?page=" + number);
    }  
}

document.querySelector("#plus").addEventListener("click", (e) => increase_decrease(e))
document.querySelector("#minus").addEventListener("click", (e) => increase_decrease(e))
