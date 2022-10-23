import * as moneyOperator from './MoneyOperator'
import * as operator from './Operator'

interface XIsHowPercentOfOptions {
    allowPercentSymbol?: boolean;
}

interface currencyOpt {
    countryCurrency: string;
    currency:string;
}

/**
 * 
 * @param percent a porcentagem ex: 50 (50%)
 * @param value o valor total que será referencia à porcentagem
 * @returns retornará a porcentagem desejada do valor total
 */
function getPercentOf(percent:number, value:number){
    return ( percent/100 ) * value
}


/**
 * 
 * @param fractionOfvalue fração do valor total
 * @param totalvalue valor total
 * @param options objeto que aceita a opção de retornar o valor com o simbolo de porcentagem,
 * sendo o default com true
 * @returns retorna a porcentagem da fração de valor sobre o valor total
 */
function XIsHowPercentOf(fractionOfvalue:number,totalvalue:number, options?:XIsHowPercentOfOptions){
    
    const func = ((fractionOfvalue * 100 ) / totalvalue).toFixed(2)
    const withSymbol = `${ func }%`
    return options?.allowPercentSymbol || options?.allowPercentSymbol === undefined ? 
        withSymbol : 
        parseFloat(func)
    ;
}


/**
 * 
 * @param capital o valor a ser investido
 * @param interestRate a taxa a ser utilizada em determinado periodo (x por mes) ou (y por ano)
 * @param time o tempo que deseja aplicar o capital ( precisa ser a mesma unidade de periodo da taxa )
 * @param options (opcional) caso tenha alguma opção, será aplicado no valor, como tipo de moeda
 * @returns (com options): uma String com o tipo de moeda e o juros (sem options) os juros
 */
function getSimpleInterest(capital:number, interestRate:number, time:number, options?:currencyOpt){
    const rate = (interestRate / 100)
    const result = capital * rate * time
    if(options){
        return moneyOperator.numberToCurrency([ result ],{
            countryCurrency:options.countryCurrency,
            currency:options.currency
        })[0]
    }
    return (result).toFixed(2)
}


/**
 * 
 * @param capital o valor a ser investido
 * @param interestRate a taxa a ser utilizada em determinado periodo (x por mes) ou (y por ano)
 * @param time o tempo que deseja aplicar o capital ( precisa ser a mesma unidade de periodo da taxa )
 * @param options (opcional) caso tenha alguma opção, será aplicado no valor, como tipo de moeda
 * @returns (com options): uma String com o tipo de moeda e o juros (sem options) os juros
 */
function getCompoundInterest(capital:number, interestRate:number, time:number, options?:currencyOpt){
    const rate = (interestRate / 100)
    const result = capital * (operator.getPotentiation(( 1 + rate ), time) )
    if(options){
        return moneyOperator.numberToCurrency([ result - capital ],{
            countryCurrency:options.countryCurrency,
            currency:options.currency
        })[0]
    }
    return (result - capital).toFixed(2)
}   

export {
    getPercentOf,
    XIsHowPercentOf,
    getSimpleInterest,
    getCompoundInterest,
}