
const searchParams = new URLSearchParams(window.location.search)    
let number = searchParams.get("page");
document.querySelector("#number").innerHTML = number

function increase_decrease(e) {
    if (e.target.id === "plus") {
        number++
        document.querySelector("#number").innerHTML = number
        history.forward()
        history.pushState({page: number}, "title "+ number, "?page=" + number);
    } else {
        number--
        document.querySelector("#number").innerHTML = number
        history.back()
        history.replaceState({page: number}, "title "+ number, "?page=" + number);
    }  
}

document.querySelector("#plus").addEventListener("click", (e) => increase_decrease(e))
document.querySelector("#minus").addEventListener("click", (e) => increase_decrease(e))

window.onpopstate = () => {
    const searchParams = new URLSearchParams(window.location.search)
    console.log(searchParams.get("page"))
    document.querySelector("#number").innerHTML = searchParams.get("page")

}

window.u("popstate", () => alert("OSLIIIIZAAAAA"))