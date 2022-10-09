import { MoneyOperators } from "./MoneyOperator";

interface XIsHowPercentOfOptions {
    allowPercentSymbol?: boolean;
}

interface currencyOpt {
    countryCurrency: string;
    currency:string;
}

export class Operator extends MoneyOperators {
    protected num:number = 0;

    
    public sum(...numbers:number[]){
        return numbers.reduce((num:number, acc:number) => {
            return num + acc
        },0)
    }

    public CurrencySum([...numbers]:(number | string)[], options:currencyOpt) {
        const finalSum = this.sum(...this.currencyToNumber(...numbers))
        return this.NumberToCurrency(finalSum, options)
    }

    public subtract(num1:number, ...numbers:number[]){
        let acc = num1
        for (let index = 0; index < numbers.length; index++) {
            acc -= numbers[index]            
        }
        return acc
    }

    public CurrencySubtract([...numbers]:(number | string)[], options:currencyOpt) {
        const list = this.currencyToNumber(...numbers)
        const finalSum = this.subtract(list[0], ...list.splice(1))
        return this.NumberToCurrency(finalSum, options)
    }

    public  multiply(...numbers:number[]){
        return numbers.reduce((num:number, acc:number)=>{
            return num * acc
        },1)
    }

    public CurrencyMultiply([...numbers]:(number | string)[], options:currencyOpt) {
        const finalSum = this.multiply(...this.currencyToNumber(...numbers))
        return this.NumberToCurrency(finalSum, options)
    }


    public divide(num1:number, ...numbers:number[]){
        let acc = num1
        for (let index = 0; index < numbers.length; index++) {
            acc /= numbers[index]            
        }
        return acc
    }

    public getPercentOf(percent:number, value:number){
        return ( percent/100 ) * value
    }
  

    public XIsHowPercentOf(fractionOfvalue:number,totalvalue:number, options?:XIsHowPercentOfOptions){
        const func = ((fractionOfvalue * 100 ) / totalvalue).toFixed(2)
        const withSymbol = `${ func }%`
        return options?.allowPercentSymbol || options?.allowPercentSymbol === undefined ? withSymbol : parseFloat(func)
    }

    public getFactorial(num:number){
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
}



// realizar operações basicas ---------------------- :check
// operações monetarias
// converter em moedas especificas
// realizar conjunto de operações ao mesmo tempo
// 