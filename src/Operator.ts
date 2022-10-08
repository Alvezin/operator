export class Operator {
    protected num:number = 0;


    public sum(...numbers:number[]){
        return numbers.reduce((num:number, acc:number) => {
            return num + acc
        },0)
    }


    public subtract(num1:number, ...numbers:number[]){
        let acc = num1
        for (let index = 0; index < numbers.length; index++) {
            acc -= numbers[index]            
        }
        return acc
    }

    public multiply(...numbers:number[]){
        return numbers.reduce((num:number, acc:number)=>{
            return num * acc
        },1)
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

    public XIsHowPercentOf(fractionOfvalue:number,totalvalue:number){
        return `${ ( fractionOfvalue * 100 ) / totalvalue }%`
    }
}



// realizar operações basicas
// operações monetarias
// converter em moedas especificas
// realizar conjunto de operações ao mesmo tempo
// 