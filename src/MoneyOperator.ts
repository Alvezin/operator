interface currencyOpt {
    countryCurrency: string;
    currency:string;
}
export class MoneyOperators{

    protected currencyToNumber(...numbers:(number | string)[]){
        return numbers.map(el => {
            
            if(typeof el === 'number') return el

            const num = el.toString().split(',').join('.')
            return parseFloat(num)
        })
    }

    protected NumberToCurrency(num:number, options:currencyOpt){
        
        return num.toLocaleString(options.countryCurrency, {
            style: 'currency', 
            currency: options.currency,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2, 
        })
        
    }
}