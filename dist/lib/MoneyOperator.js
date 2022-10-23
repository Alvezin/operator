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
exports.currencyDivide = exports.currencyMultiply = exports.currencySubtract = exports.currencySum = exports.numberToCurrency = exports.currencyToNumber = void 0;
var operator = __importStar(require("./Operator"));
/**
 *
 * @param numbers aceita spread de valores numericos com tipos string e number
 *
 *
 * @returns numbers, mas com todos os elementos sendo do tipo number
 */
function currencyToNumber(numbers) {
    return numbers.map(function (el) {
        if (typeof el === 'number')
            return el;
        var num = el.split(',').join('.');
        return parseFloat(num);
    });
}
exports.currencyToNumber = currencyToNumber;
/**
 *
 * @param numbers receber um array de numbers
 * @param options opções para configurar as strings a serem retornadas
 * @returns array de strings que representam valores monetarios
 */
function numberToCurrency(numbers, options) {
    return numbers.map(function (num) {
        return num.toLocaleString(options.countryCurrency, {
            currency: options.currency,
            style: 'currency',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    });
}
exports.numberToCurrency = numberToCurrency;
/**
 *
 * @param numbers
 *  valores a serem somados
 * @param options
 * opções de personalização do valor monetário, sendo countryCurrency (país da moeda) e currency (qual moeda)
 * @returns
 * string representando a soma dos valores, já devidamente personalizada com a moeda desejada
 */
function currencySum(numbers, options) {
    var finalSum = operator.sum(currencyToNumber(numbers));
    return numberToCurrency([finalSum], options)[0];
}
exports.currencySum = currencySum;
/**
 *
 * @param numbers
 *  valores a serem subtraidos
 * @param options
 * opções de personalização do valor monetário, sendo countryCurrency (país da moeda) e currency (qual moeda)
 * @returns
 * string representando a subtração dos valores, já devidamente personalizada com a moeda desejada
 */
function currencySubtract(numbers, options) {
    var list = currencyToNumber(numbers);
    var finalSubtract = operator.subtract(list);
    return numberToCurrency([finalSubtract], options)[0];
}
exports.currencySubtract = currencySubtract;
/**
 *
 * @param numbers
 *  valores a serem multiplicados
 * @param options
 * opções de personalização do valor monetário, sendo countryCurrency (país da moeda) e currency (qual moeda)
 * @returns
 * string representando a multiplicação dos valores, já devidamente personalizada com a moeda desejada
 */
function currencyMultiply(numbers, options) {
    var finalMultiply = operator.multiply(currencyToNumber(numbers));
    return numberToCurrency([finalMultiply], options)[0];
}
exports.currencyMultiply = currencyMultiply;
/**
 *
 * @param numbers
 *  valores a serem dividos
 * @param options
 * opções de personalização do valor monetário, sendo countryCurrency (país da moeda) e currency (qual moeda)
 * @returns
 * string representando a divisão dos valores, já devidamente personalizada com a moeda desejada
 */
function currencyDivide(numbers, options) {
    var list = currencyToNumber(numbers);
    var finalDivide = operator.divide(list);
    return numberToCurrency([finalDivide], options);
}
exports.currencyDivide = currencyDivide;
//# sourceMappingURL=MoneyOperator.js.map