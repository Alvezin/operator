/**
 *
 * @param numbers numeros a serem somados
 * @returns a soma dos numeros
 */
declare function sum(numbers: number[]): number;
/**
 *
 * @param numbers numeros a serem subtraidos
 * @returns a subtração dos números
 */
declare function subtract(numbers: number[]): number;
/**
 *
 * @param numbers numeros a serem multiplicados
 * @returns a multiplicação dos números
 */
declare function multiply(numbers: number[]): number;
/**
 *
 * @param numbers numeros a serem divididos
 * @returns a divisão dos valores
 */
declare function divide(numbers: number[]): number;
/**
 *
 * @param num um numero
 *
 * @returns retorna o fatorial do valor
 *
 * exemplo: 5 fatorial (5!) é o mesmo que 5 * 4 * 3 * 2 * 1
 */
declare function getFactorial(num: number): number | undefined;
/**
 *
 * @param value valor que será potenciado
 * @param power vezes que o valor será potenciado
 * @returns o 'value' multiplicado por ele mesmo 'power' vezes
 */
declare function getPotentiation(value: number, power: number): number;
export { sum, subtract, multiply, divide, getFactorial, getPotentiation, };
