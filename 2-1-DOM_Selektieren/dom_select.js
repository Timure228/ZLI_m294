// 1
let new_releases = document.querySelector(".games").innerHTML
// 2
let gta5 = document.getElementsByClassName("games")[1].getElementsByTagName("li")[1].innerHTML
// oder
let gta5_2 = document.querySelector(".games:nth-of-type(2) li:nth-of-type(2)").innerHTML
// 3
let warfare = document.querySelector(".games:nth-of-type(3) li:last-of-type").innerHTML
// 4
alert(document.querySelectorAll(".games:nth-of-type(2) li"))
// 5
document.querySelector("h1")
// 6
document.getElementById("game-of-the-day")
// oder
document.querySelector("#game-of-the-day")
// 7
document.querySelectorAll(".sales")