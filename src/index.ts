import { Operator } from "./Operator";


const operator = new Operator()

let arr = [10,5,-5,2,1,5,4]

console.log(operator.subtract(10))
console.log(`Multiplicação: ${ operator.multiply(1,5,-10) }`)
console.log(`Divisão: ${ operator.divide(1,100000000) }`)
console.log(`Porcentagem: ${ operator.getPercentOf(25, 11200) }`)
console.log(`Porcentagem: ${ operator.XIsHowPercentOf(2, 9) }`)

console.log(`fatorial: ${ operator.getFactorial(10) }`)
console.log(`soma dinheiro: ${ operator.CurrencySum(['1,40',3.54],{
    countryCurrency: 'pt-BR',
    currency: 'BRL'
}) }`)
