// Adding elements
// append() can append strings and tags
// appendChild() can append only tags
document.body.append("O", "a de schlom")
const div = document.createElement("div")
div.innerText = "hello div"
document.body.append(div)
// or document.body.appendChild(div)
div.innerHTML = "<h1>OPEJFIOEWJFWEP</h1>" // creates h1 inside div

div.remove() // removes div
document.body.append(div) // can apppend again
document.body.removeChild(div) // delete as a child of body
// alert(div.querySelector("h1").innerHTML)
// alert(document.querySelectorAll("h2")[2].getAttribute("id"))
// alert(document.querySelectorAll("h2")[2].id)
// document.querySelectorAll("h2")[2].setAttribute("id", "sommer2")
// document.querySelectorAll("h2")[2].removeAttribute("id")
// alert(document.querySelectorAll("ul")[2].dataset.schlomEbanaRot)
document.querySelectorAll("ul")[2].classList.add("new-class_no-spaces")

document.addEventListener("DOMContentLoaded",() => document.body.style = "background-color: orange")
// Array.from(document.getElementsByClassName("some-class")) // now we can access .forEach()
// alert(document.querySelector("#winter + ul li:nth-of-type(3)").innerHTML)
// alert(document.body.children[0].innerHTML)
// (document.querySelector("#winter").parentElement)
// closest - closest parent class (goes upwards until find the closest parent class that you wrote)
document.querySelector("#kinder").closest(".grandparent").style = "background-color: black"
// Siblings, get the tag on the same level 
// alert(document.querySelector('#kinder').nextElementSibling.innerHTML)

// alert(document.querySelectorAll("ul li:nth-child(1)")[0].innerHTML)
// alert(document.querySelectorAll("#winter + ul")[0].innerHTML)


// <ul>
//   <li>One</li>
//   <li>Two</li>
// </ul>

alert(document.querySelectorAll("li:first-child"));       // first <li>
document.querySelectorAll("li:last-child");        // last <li>
document.querySelectorAll("li:nth-child(2)");      // 2nd child
document.querySelectorAll("li:nth-last-child(1)"); // last child
document.querySelectorAll("li:only-child");        // only child (if single)
document.querySelectorAll("li:first-of-type");     // first <li> of its type
document.querySelectorAll("li:last-of-type");      // last <li> of its type
document.querySelectorAll("li:nth-of-type(2)");    // 2nd <li> of its type
document.querySelectorAll("li:nth-last-of-type(1)"); // last <li> of its type
document.querySelectorAll("li:only-of-type");      // only <li> of its type
