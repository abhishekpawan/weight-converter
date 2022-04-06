const weight = document.querySelector('#weight');
const pounds = document.querySelector('#pounds');
const grams = document.querySelector('#grams');
const ounces = document.querySelector('#ounces');



weight.addEventListener('input', (e) => {
    //converting in pounds
    var calc = weight.value * 2.20462;
    pounds.innerHTML= calc;

    //converting in grams
    var calc = weight.value * 1000;
    grams.innerHTML= calc;

    //converting in ounces
    var calc = weight.value * 35.274;
    ounces.innerHTML= calc;
});