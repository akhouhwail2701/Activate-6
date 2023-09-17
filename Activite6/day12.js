document.getElementById("btn").onclick = function () {
    if (document.getElementById("menu").style.cssText == "transform: translateX(-100%);") {
        document.getElementById("menu").style.cssText = "transform: translateX(0%);"
    } else {
        document.getElementById("menu").style.cssText = "transform: translateX(-100%);"
    }
}
document.getElementById("close1").onclick = function () {
    document.getElementById("desc1").style.cssText = `transform: translateY(100%);`;
}
document.getElementById("close2").onclick = function () {
    document.getElementById("desc2").style.cssText = `transform: translateY(100%);`;
}
document.getElementById("close3").onclick = function () {
    document.getElementById("desc3").style.cssText = `transform: translateY(100%);`;
}
document.getElementById("close4").onclick = function () {
    document.getElementById("desc4").style.cssText = `transform: translateY(100%);`;
}

document.getElementById("one").onclick = function () {
    document.getElementById("desc1").style.cssText = `transform: translateY(0%);`;
}
document.getElementById("two").onclick = function () {
    document.getElementById("desc2").style.cssText = `transform: translateY(0%);`;
}
document.getElementById("three").onclick = function () {
    document.getElementById("desc3").style.cssText = `transform: translateY(0%);`;
}
document.getElementById("fore").onclick = function () {
    document.getElementById("desc4").style.cssText = `transform: translateY(0%);`;
}