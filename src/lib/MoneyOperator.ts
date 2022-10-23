import * as operator from './Operator'

interface currencyOpt {
    countryCurrency: string;
    currency:string;
}

/**
 * 
 * @param numbers aceita spread de valores numericos com tipos string e number
 * 
 * 
 * @returns numbers, mas com todos os elementos sendo do tipo number
 */
function currencyToNumber(numbers:(number | string)[]){
    return numbers.map(el => {
        
        if(typeof el === 'number') return el

        const num = el.split(',').join('.')
        return parseFloat(num)
    })
}

/**
 * 
 * @param numbers receber um array de numbers
 * @param options opções para configurar as strings a serem retornadas 
 * @returns array de strings que representam valores monetarios
 */
function numberToCurrency(numbers:number[], options:currencyOpt){
    return numbers.map(num => {
        return num.toLocaleString(options.countryCurrency, {
            currency: options.currency,
            style: 'currency',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })
    })
    
}

/**
 * 
 * @param numbers
 *  valores a serem somados
 * @param options 
 * opções de personalização do valor monetário, sendo countryCurrency (país da moeda) e currency (qual moeda)
 * @returns 
 * string representando a soma dos valores, já devidamente personalizada com a moeda desejada
 */
function currencySum(numbers:(number | string)[], options:currencyOpt) {
    const finalSum = operator.sum(currencyToNumber(numbers))
    return numberToCurrency([ finalSum ], options)[0]
}

/**
 * 
 * @param numbers 
 *  valores a serem subtraidos
 * @param options 
 * opções de personalização do valor monetário, sendo countryCurrency (país da moeda) e currency (qual moeda)
 * @returns 
 * string representando a subtração dos valores, já devidamente personalizada com a moeda desejada
 */
function currencySubtract(numbers:(number | string)[], options:currencyOpt) {
    const list = currencyToNumber(numbers)
    const finalSubtract = operator.subtract(list)
    return numberToCurrency([ finalSubtract ], options)[0]
}


/**
 * 
 * @param numbers 
 *  valores a serem multiplicados
 * @param options 
 * opções de personalização do valor monetário, sendo countryCurrency (país da moeda) e currency (qual moeda)
 * @returns 
 * string representando a multiplicação dos valores, já devidamente personalizada com a moeda desejada
 */
function currencyMultiply(numbers:(number | string)[], options:currencyOpt) {
    const finalMultiply = operator.multiply(currencyToNumber(numbers))
    return numberToCurrency([ finalMultiply ], options)[0]
}

/**
 * 
 * @param numbers 
 *  valores a serem dividos
 * @param options 
 * opções de personalização do valor monetário, sendo countryCurrency (país da moeda) e currency (qual moeda)
 * @returns 
 * string representando a divisão dos valores, já devidamente personalizada com a moeda desejada
 */
function currencyDivide(numbers:(number | string)[], options:currencyOpt){
    const list = currencyToNumber(numbers)
    const finalDivide = operator.divide(list)
    return numberToCurrency([finalDivide], options)
}


export {
    currencyToNumber,
    numberToCurrency,
    currencySum,
    currencySubtract,
    currencyMultiply,
    currencyDivide
}