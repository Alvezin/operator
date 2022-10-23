"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPotentiation = exports.getFactorial = exports.divide = exports.multiply = exports.subtract = exports.sum = void 0;
/**
 *
 * @param numbers numeros a serem somados
 * @returns a soma dos numeros
 */
function sum(numbers) {
    return numbers.reduce(function (num, acc) {
        return num + acc;
    }, 0);
}
exports.sum = sum;
/**
 *
 * @param numbers numeros a serem subtraidos
 * @returns a subtração dos números
 */
function subtract(numbers) {
    var acc = numbers[0];
    var otherNums = numbers.splice(1);
    for (var index = 0; index < otherNums.length; index++) {
        acc -= otherNums[index];
    }
    return acc;
}
exports.subtract = subtract;
/**
 *
 * @param numbers numeros a serem multiplicados
 * @returns a multiplicação dos números
 */
function multiply(numbers) {
    return numbers.reduce(function (num, acc) {
        return num * acc;
    }, 1);
}
exports.multiply = multiply;
/**
 *
 * @param numbers numeros a serem divididos
 * @returns a divisão dos valores
 */
function divide(numbers) {
    var acc = numbers[0];
    var otherNums = numbers.splice(1);
    for (var index = 0; index < otherNums.length; index++) {
        acc /= otherNums[index];
    }
    return acc;
}
exports.divide = divide;
/**
 *
 * @param num um numero
 *
 * @returns retorna o fatorial do valor
 *
 * exemplo: 5 fatorial (5!) é o mesmo que 5 * 4 * 3 * 2 * 1
 */
function getFactorial(num) {
    try {
        if (num < 0)
            throw new Error("Erro! Fatorial recebe apenas números naturais");
        var value = num;
        var nextValue = num - 1;
        while (nextValue) {
            value *= nextValue;
            nextValue--;
        }
        return value;
    }
    catch (error) {
        console.log(error);
    }
}
exports.getFactorial = getFactorial;
/**
 *
 * @param value valor que será potenciado
 * @param power vezes que o valor será potenciado
 * @returns o 'value' multiplicado por ele mesmo 'power' vezes
 */
function getPotentiation(value, power) {
    var loopCount = power;
    var result = value;
    while (loopCount > 1) {
        result *= value;
        loopCount--;
    }
    return result;
}
exports.getPotentiation = getPotentiation;
// realizar operações basicas ---------------------- :check
// operações monetarias ----------------------- :check
// converter em moedas especificas
// realizar conjunto de operações ao mesmo tempo
// 
//# sourceMappingURL=Operator.js.map