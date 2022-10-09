import { Operator } from "./Operator";


const operator = new Operator()

let arr = [10,5,-5,2,1,5,4]

console.log(`mutlipicacao dinheiro: ${ operator.CurrencyMultiply([1.50,3],{
    countryCurrency: 'pt-BR',
    currency: 'BRL'
}) }`)
