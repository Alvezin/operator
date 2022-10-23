interface XIsHowPercentOfOptions {
    allowPercentSymbol?: boolean;
}
interface currencyOpt {
    countryCurrency: string;
    currency: string;
}
/**
 *
 * @param percent a porcentagem ex: 50 (50%)
 * @param value o valor total que será referencia à porcentagem
 * @returns retornará a porcentagem desejada do valor total
 */
declare function getPercentOf(percent: number, value: number): number;
/**
 *
 * @param fractionOfvalue fração do valor total
 * @param totalvalue valor total
 * @param options objeto que aceita a opção de retornar o valor com o simbolo de porcentagem,
 * sendo o default com true
 * @returns retorna a porcentagem da fração de valor sobre o valor total
 */
declare function XIsHowPercentOf(fractionOfvalue: number, totalvalue: number, options?: XIsHowPercentOfOptions): string | number;
/**
 *
 * @param capital o valor a ser investido
 * @param interestRate a taxa a ser utilizada em determinado periodo (x por mes) ou (y por ano)
 * @param time o tempo que deseja aplicar o capital ( precisa ser a mesma unidade de periodo da taxa )
 * @param options (opcional) caso tenha alguma opção, será aplicado no valor, como tipo de moeda
 * @returns (com options): uma String com o tipo de moeda e o juros (sem options) os juros
 */
declare function getSimpleInterest(capital: number, interestRate: number, time: number, options?: currencyOpt): string;
/**
 *
 * @param capital o valor a ser investido
 * @param interestRate a taxa a ser utilizada em determinado periodo (x por mes) ou (y por ano)
 * @param time o tempo que deseja aplicar o capital ( precisa ser a mesma unidade de periodo da taxa )
 * @param options (opcional) caso tenha alguma opção, será aplicado no valor, como tipo de moeda
 * @returns (com options): uma String com o tipo de moeda e o juros (sem options) os juros
 */
declare function getCompoundInterest(capital: number, interestRate: number, time: number, options?: currencyOpt): string;
export { getPercentOf, XIsHowPercentOf, getSimpleInterest, getCompoundInterest, };
