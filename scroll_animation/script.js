function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth ||document.documentElement.clientWidth)
    );
}  

function check_viewport(element) {
    if (isInViewport(element)) {
        console.log("SEE")
    } else {
        console.log("NO SEE")
    }
}


const box = document.querySelector(".box")
const message = document.querySelector("#message")
const steam = document.querySelector("#steam")

steam.addEventListener("scroll", check_viewport(steam), {passive: true})
