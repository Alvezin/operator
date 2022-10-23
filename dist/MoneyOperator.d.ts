interface currencyOpt {
    countryCurrency: string;
    currency: string;
}
/**
 *
 * @param numbers aceita spread de valores numericos com tipos string e number
 *
 *
 * @returns numbers, mas com todos os elementos sendo do tipo number
 */
declare function currencyToNumber(numbers: (number | string)[]): number[];
/**
 *
 * @param numbers receber um array de numbers
 * @param options opções para configurar as strings a serem retornadas
 * @returns array de strings que representam valores monetarios
 */
declare function numberToCurrency(numbers: number[], options: currencyOpt): string[];
/**
 *
 * @param numbers
 *  valores a serem somados
 * @param options
 * opções de personalização do valor monetário, sendo countryCurrency (país da moeda) e currency (qual moeda)
 * @returns
 * string representando a soma dos valores, já devidamente personalizada com a moeda desejada
 */
declare function currencySum(numbers: (number | string)[], options: currencyOpt): string;
/**
 *
 * @param numbers
 *  valores a serem subtraidos
 * @param options
 * opções de personalização do valor monetário, sendo countryCurrency (país da moeda) e currency (qual moeda)
 * @returns
 * string representando a subtração dos valores, já devidamente personalizada com a moeda desejada
 */
declare function currencySubtract(numbers: (number | string)[], options: currencyOpt): string;
/**
 *
 * @param numbers
 *  valores a serem multiplicados
 * @param options
 * opções de personalização do valor monetário, sendo countryCurrency (país da moeda) e currency (qual moeda)
 * @returns
 * string representando a multiplicação dos valores, já devidamente personalizada com a moeda desejada
 */
declare function currencyMultiply(numbers: (number | string)[], options: currencyOpt): string;
/**
 *
 * @param numbers
 *  valores a serem dividos
 * @param options
 * opções de personalização do valor monetário, sendo countryCurrency (país da moeda) e currency (qual moeda)
 * @returns
 * string representando a divisão dos valores, já devidamente personalizada com a moeda desejada
 */
declare function currencyDivide(numbers: (number | string)[], options: currencyOpt): string[];
export { currencyToNumber, numberToCurrency, currencySum, currencySubtract, currencyMultiply, currencyDivide };
