// 1/2b.h 
let input1 = document.querySelector('#base')
let input2 = document.querySelector('#height')
let button = document.querySelector('button')
let display = document.querySelector('h1')

button.addEventListener('click', ()=>{
    areaCalculator(input1.value, input2.value)
})
function areaCalculator(base,height) {
    let answer = (base * height) * 0.5
    console.log(answer + ' units')
    display.innerText = answer + ' units'

}
