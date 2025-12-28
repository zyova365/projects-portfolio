const de = document.getElementById("decrease");
const res = document.getElementById("re");
const increase = document.getElementById("increase");
const num = document.getElementById("counter")

let counter =0;

increase.onclick = function() {
    counter++;
    num.textContent = counter
}

de.onclick = function() {
    counter--;
    num.textContent = counter
}

res.onclick = function() {
    counter =0

    num.textContent = counter
}