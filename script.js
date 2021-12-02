const home = document.getElementById("home");
const homeDesc = document.getElementById("homeDesc");
const life = document.getElementById("life");
const lifeDesc = document.getElementById("lifeDesc");
const auto = document.getElementById("auto");
const autoDesc = document.getElementById("autoDesc");
const health = document.getElementById("health");
const healthDesc = document.getElementById("healthDesc");
const rec = document.getElementById("rec");
const redDesc = document.getElementById("recDesc");
home.addEventListener("click", function () {
    if (homeDesc.attributes.length === 2) {
        homeDesc.removeAttribute("hidden")
        return
    }
    if (homeDesc.attributes.length === 1) {
        homeDesc.setAttribute("hidden", true)
    }

});

life.addEventListener("click", function () {
    if (lifeDesc.attributes.length === 2) {
        lifeDesc.removeAttribute("hidden")
        return
    }
    if (lifeDesc.attributes.length === 1) {
        lifeDesc.setAttribute("hidden", true)
    }

});
auto.addEventListener("click", function () {
    if (autoDesc.attributes.length === 2) {
        autoDesc.removeAttribute("hidden")
        return
    }
    if (autoDesc.attributes.length === 1) {
        autoDesc.setAttribute("hidden", true)
    }

});
health.addEventListener("click", function () {
    if (healthDesc.attributes.length === 2) {
        healthDesc.removeAttribute("hidden")
        return
    }
    if (healthDesc.attributes.length === 1) {
        healthDesc.setAttribute("hidden", true)
    }

});
rec.addEventListener("click", function () {
    if (recDesc.attributes.length === 2) {
        recDesc.removeAttribute("hidden")
        return
    }
    if (recDesc.attributes.length === 1) {
        recDesc.setAttribute("hidden", true)
    }

});

