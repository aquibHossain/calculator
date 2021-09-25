function num(event) {
    const paragraph= document.getElementById("paragraph")
    const newNumber= event.target.innerText
    const total=paragraph.innerText+newNumber
    paragraph.innerText=total
    return total
    
}
let number1;
let number2;
let ope;
const numbers= document.getElementsByClassName("number")
for(const number of numbers){
    number.addEventListener("click",function (event) {
        if(event.target.innerText=='AC'){
            document.getElementById("paragraph").innerText=""
        }
        else
    number2=num(event)
    })
}

document.getElementById("equal").addEventListener("click",function (event) {
   
    const total=calculate(number1,ope,number2)
   document.getElementById("paragraph").innerText=total
})
function operate(operator) {
    const paragraph= document.getElementById("paragraph")
    number1=paragraph.innerText
    paragraph.innerText=""
    ope=operator
}
function calculate(num1,operator,num2){
    if(operator=='+'){
    const total=parseFloat(num1) + parseFloat( num2)
    return total
    }
    else if(operator=='-')
   {
    const total=parseFloat(num1) - parseFloat( num2)
    return total
   }
    else if(operator=='*')
   {
    const total=parseFloat(num1) * parseFloat( num2)
    return total
   }
    else if(operator=='/')
   {
    const total=parseFloat(num1) / parseFloat( num2)
    return total
   }
    else if(operator=='%')
   {
    const total=parseFloat(num1) % parseFloat( num2)
    return total
   }
   
}