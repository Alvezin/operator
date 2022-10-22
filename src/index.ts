import operator from "./Operator"
import moneyOperator from "./MoneyOperator"
import percentageOperator from "./percentageOperator"

export default {
    sum: operator.sum,
    subtract: operator.subtract,
    multiply: operator.multiply,
    divide: operator.divide,
    getfactorial: operator.getFactorial,


    currencySum: moneyOperator.currencySum,
    currencySubtract: moneyOperator.currencySubtract,
    currencyMultiply: moneyOperator.currencyMultiply,
    currencyDivide: moneyOperator.currencyDivide,
    currencyToNumber: moneyOperator.currencyToNumber,
    numberToCurrency: moneyOperator.numberToCurrency,

    getPercentOf: percentageOperator.getPercentOf,
    XIsHowPercentOf: percentageOperator.XIsHowPercentOf,
}

console.log(moneyOperator.currencyDivide([3.00,2],{
    countryCurrency: 'pt-BR',
    currency: 'BRL'
}))