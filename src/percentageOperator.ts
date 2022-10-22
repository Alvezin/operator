
interface XIsHowPercentOfOptions {
    allowPercentSymbol?: boolean;
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

export default {
    getPercentOf,
    XIsHowPercentOf,
}