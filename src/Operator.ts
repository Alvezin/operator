

/**
 * 
 * @param numbers numeros a serem somados
 * @returns a soma dos numeros
 */
function sum(numbers:number[]){
    return numbers.reduce((num:number, acc:number) => {
        return num + acc
    },0)
}

/**
 * 
 * @param numbers numeros a serem subtraidos
 * @returns a subtração dos números
 */
function subtract(numbers:number[]){
    let acc = numbers[0]
    let otherNums = numbers.splice(1)
    for (let index = 0; index < otherNums.length; index++) {
        acc -= otherNums[index]            
    }
    return acc
}

/**
 * 
 * @param numbers numeros a serem multiplicados
 * @returns a multiplicação dos números
 */
function  multiply(numbers:number[]){
    return numbers.reduce((num:number, acc:number)=>{
        return num * acc
    },1)
}

/**
 * 
 * @param numbers numeros a serem divididos
 * @returns a divisão dos valores
 */
function divide(numbers:number[]){
    let acc = numbers[0]
    let otherNums = numbers.splice(1)
    for (let index = 0; index < otherNums.length; index++) {
        acc /= otherNums[index]            
    }
    return acc
}

/**
 * 
 * @param num um numero
 * 
 * @returns retorna o fatorial do valor
 * 
 * exemplo: 5 fatorial (5!) é o mesmo que 5 * 4 * 3 * 2 * 1
 */
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

/**
 * 
 * @param value valor que será potenciado
 * @param power vezes que o valor será potenciado
 * @returns o 'value' multiplicado por ele mesmo 'power' vezes
 */
function getPotentiation(value:number, power:number){
    let loopCount = power
    let result = value
    while (loopCount > 1) {
        result *= value        
        loopCount--
    }
    return result
}

export default {
    sum,
    subtract,
    multiply,
    divide,
    getFactorial,
    getPotentiation,
}

// realizar operações basicas ---------------------- :check
// operações monetarias ----------------------- :check
// converter em moedas especificas
// realizar conjunto de operações ao mesmo tempo
// 