
interface XIsHowPercentOfOptions {
    allowPercentSymbol?: boolean;
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

export default {
    getPercentOf,
    XIsHowPercentOf,
}