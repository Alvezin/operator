"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCompoundInterest = exports.getSimpleInterest = exports.XIsHowPercentOf = exports.getPercentOf = void 0;
const moneyOperator = __importStar(require("./MoneyOperator"));
const operator = __importStar(require("./Operator"));
/**
 *
 * @param percent a porcentagem ex: 50 (50%)
 * @param value o valor total que será referencia à porcentagem
 * @returns retornará a porcentagem desejada do valor total
 */
function getPercentOf(percent, value) {
    return (percent / 100) * value;
}
exports.getPercentOf = getPercentOf;
/**
 *
 * @param fractionOfvalue fração do valor total
 * @param totalvalue valor total
 * @param options objeto que aceita a opção de retornar o valor com o simbolo de porcentagem,
 * sendo o default com true
 * @returns retorna a porcentagem da fração de valor sobre o valor total
 */
function XIsHowPercentOf(fractionOfvalue, totalvalue, options) {
    const func = ((fractionOfvalue * 100) / totalvalue).toFixed(2);
    const withSymbol = `${func}%`;
    return (options === null || options === void 0 ? void 0 : options.allowPercentSymbol) || (options === null || options === void 0 ? void 0 : options.allowPercentSymbol) === undefined ?
        withSymbol :
        parseFloat(func);
}
exports.XIsHowPercentOf = XIsHowPercentOf;
/**
 *
 * @param capital o valor a ser investido
 * @param interestRate a taxa a ser utilizada em determinado periodo (x por mes) ou (y por ano)
 * @param time o tempo que deseja aplicar o capital ( precisa ser a mesma unidade de periodo da taxa )
 * @param options (opcional) caso tenha alguma opção, será aplicado no valor, como tipo de moeda
 * @returns (com options): uma String com o tipo de moeda e o juros (sem options) os juros
 */
function getSimpleInterest(capital, interestRate, time, options) {
    const rate = (interestRate / 100);
    const result = capital * rate * time;
    if (options) {
        return moneyOperator.numberToCurrency([result], {
            countryCurrency: options.countryCurrency,
            currency: options.currency
        })[0];
    }
    return (result).toFixed(2);
}
exports.getSimpleInterest = getSimpleInterest;
/**
 *
 * @param capital o valor a ser investido
 * @param interestRate a taxa a ser utilizada em determinado periodo (x por mes) ou (y por ano)
 * @param time o tempo que deseja aplicar o capital ( precisa ser a mesma unidade de periodo da taxa )
 * @param options (opcional) caso tenha alguma opção, será aplicado no valor, como tipo de moeda
 * @returns (com options): uma String com o tipo de moeda e o juros (sem options) os juros
 */
function getCompoundInterest(capital, interestRate, time, options) {
    const rate = (interestRate / 100);
    const result = capital * (operator.getPotentiation((1 + rate), time));
    if (options) {
        return moneyOperator.numberToCurrency([result - capital], {
            countryCurrency: options.countryCurrency,
            currency: options.currency
        })[0];
    }
    return (result - capital).toFixed(2);
}
exports.getCompoundInterest = getCompoundInterest;
//# sourceMappingURL=percentageOperator.js.map