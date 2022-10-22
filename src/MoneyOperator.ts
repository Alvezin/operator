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

export default {
    currencyToNumber,
    numberToCurrency,
}