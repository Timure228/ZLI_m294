// <img src="https://i.ytimg.com/vi/1TX627RTMqg/hqdefault.jpg" height="100px" width="100px"/>
// <img src= height="100px" width="100px"/>
// <img src="" height="100px" width="100px"/>

function add_3() {
    let urls = ["https://i.ytimg.com/vi/1TX627RTMqg/hqdefault.jpg", 
        "https://f4.bcbits.com/img/a2759882987_10.jpg",
        "https://xonomax.com/cdn/shop/files/598335.jpg?v=1726227016"]
    
    urls.forEach((url) => {
        let img = document.createElement("img")
        img.src = url
        img.width = 100
        img.height = 100
        document.querySelector(".images").appendChild(img)
    }) 
}

function delete_3() {
    let div = document.querySelector(".images")
    for (let i = 0; i <= 2; i++) {
        div.removeChild(div.querySelector("img"))
    }
}

function img_description() {
    let panel = document.createElement("div")
    panel.width = 300
    panel.height = 100
    document.addEventListener("DOMContentLoaded", () => panel.style = "background-color: yellow")
    document.querySelector("footer").appendChild(panel)
}

document.querySelector("#add").addEventListener("click", add_3)
document.querySelector("#delete").addEventListener("click", delete_3)
document.querySelector("img").addEventListener("click", img_description)