let random = Math.floor(Math.random() * 9) + 1;

const get = document.getElementById('put');
const but = document.getElementById('button');
const tell = document.getElementById('tell');

but.onclick = function () {
    let final = Number(get.value);

    if (final === random) {
        tell.textContent = "Correct! You guessed it";
    } else if (final > random) {
        tell.textContent = "Too high";
    } else {
        tell.textContent = "Too low";
    }
};

