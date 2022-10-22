import currencyConv from "./MoneyOperator";

interface XIsHowPercentOfOptions {
    allowPercentSymbol?: boolean;
}

interface currencyOpt {
    countryCurrency: string;
    currency:string;
}
    
function sum(numbers:number[]){
    return numbers.reduce((num:number, acc:number) => {
        return num + acc
    },0)
}

function currencySum([...numbers]:(number | string)[], options:currencyOpt) {
    const finalSum = sum(currencyConv.currencyToNumber(numbers))
    return currencyConv.numberToCurrency([ finalSum ], options)
}

function subtract(num1:number, ...numbers:number[]){
    let acc = num1
    for (let index = 0; index < numbers.length; index++) {
        acc -= numbers[index]            
    }
    return acc
}

function currencySubtract([...numbers]:(number | string)[], options:currencyOpt) {
    const list = currencyConv.currencyToNumber(numbers)
    const finalSubtract = subtract(list[0], ...list.splice(1))
    return currencyConv.numberToCurrency([ finalSubtract ], options)
}

function  multiply(numbers:number[]){
    return numbers.reduce((num:number, acc:number)=>{
        return num * acc
    },1)
}

function currencyMultiply(numbers:(number | string)[], options:currencyOpt) {
    const finalMultiply = multiply(currencyConv.currencyToNumber(numbers))
    return currencyConv.numberToCurrency([ finalMultiply ], options)
}


function divide(num1:number, ...numbers:number[]){
    let acc = num1
    for (let index = 0; index < numbers.length; index++) {
        acc /= numbers[index]            
    }
    return acc
}

function currencyDivide(numbers:(number | string)[], options:currencyOpt){
    const list = currencyConv.currencyToNumber(numbers)
    const finalDivide = divide(list[0], ...list.splice(1))
    return currencyConv.numberToCurrency([finalDivide], options)
}

function getPercentOf(percent:number, value:number){
    return ( percent/100 ) * value
}


function XIsHowPercentOf(fractionOfvalue:number,totalvalue:number, options?:XIsHowPercentOfOptions){
    
    const func = ((fractionOfvalue * 100 ) / totalvalue).toFixed(2)
    const withSymbol = `${ func }%`
    return options?.allowPercentSymbol || options?.allowPercentSymbol === undefined ? 
        withSymbol : 
        parseFloat(func)
    ;
}

function getFactorial(num:number){
    try{
        if(num < 0 )  throw new Error("Erro! Fatorial recebe apenas números naturais")
        
        let value = num;
        let nextValue = num -1

        while (nextValue) {
            value *= nextValue  
            nextValue--
        }

        return value
    } catch (error){
        console.log(error)
    }
}

export default {
    sum,
    currencySum,
    subtract,
    currencySubtract,
    multiply,
    currencyMultiply,
    divide,
    currencyDivide,
    getFactorial,
    getPercentOf,
    XIsHowPercentOf,
    currencyToNumber: currencyConv.currencyToNumber,
    numberToCurrency: currencyConv.numberToCurrency,
}

// realizar operações basicas ---------------------- :check
// operações monetarias
// converter em moedas especificas
// realizar conjunto de operações ao mesmo tempo
// 