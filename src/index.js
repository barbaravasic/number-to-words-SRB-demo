import { numberToWordsSRB } from 'number-to-words-srb'

const btn = document.querySelector('.button')
const input = document.querySelector('.input')
var inputValue
var output

function keyup(e) {

    if (e.keyCode == 13) {
        inputValue = parseInt(e.target.value);
        output = numberToWordsSRB(inputValue)
        document.querySelector('.result').innerHTML = output
    }
}

input.addEventListener('keyup', keyup)

btn.addEventListener('click', function (e) {
    const inputValue = parseInt(input.value)
    output = numberToWordsSRB(inputValue)
    document.querySelector('.result').innerHTML = output
})
