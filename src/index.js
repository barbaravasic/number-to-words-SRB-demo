import { numberToWordsSRB } from 'number-to-words-srb'

const btn = document.querySelector('.button')
const input = document.querySelector('.input')

var inputValue
var output

const inputValidate = (inputValue) => {

    if(isNaN(inputValue)) {
        return 'You must insert a number'
    }
}

function keyup(e) {

    if (e.keyCode == 13) {
        inputValue = parseInt(input.value);
        output = inputValidate(inputValue) || numberToWordsSRB(inputValue)
        document.querySelector('.result').innerHTML = output
    }
}

input.addEventListener('keyup', keyup)

btn.addEventListener('click', function (e) {
    const inputValue = parseInt(input.value)
    output = inputValidate(inputValue) || numberToWordsSRB(inputValue)
    document.querySelector('.result').innerHTML = output
})
