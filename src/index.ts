import operator from "./Operator"
import MoneyOperator from "./MoneyOperator"

console.log(MoneyOperator.numberToCurrency([2.00,50.45],{
    countryCurrency: 'pt-BR',
    currency: 'BRL'
}))
