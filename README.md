# Operator

Projeto utilizando typescript, onde diversas operações 
podem ser realizadas. Tutorial:

```javascript
import { Operator } from './Operator'
const operator = new Operator()
// A partir daqui, diversos métodos são disponibilizados
```

## Métodos

### Soma
```javascript
operator.sum(2,2,5,4,...)
```
O método de soma recebe quantos argumentos forem necessários
e retornará o resultado do tipo `number`

### Subtração
```javascript
operator.subtract(2,1,3,4,...)
```
O método de subtração também recebe quantos argumentos forem
necessários, retornando o valor final do tipo `number`

### Multiplicação
```javascript
operator.multiply(4,5,6,4,...)
```
o método de multiplicação recebe quantos argumentos forem 
necessários, retornando o valor do tipo `number`

### Divisão
```javascript
operator.divide(1,2,5,5,...)
```
O método de divisão recebe quantos argumentos forem 
necessários, retornando o valor do tipo `number`

### Pegar X por cento de Y
```javascript
operator.getPercentOf(porcentagem:number,valorTotal:number)
// retornando X% de Y
```
Exemplo:
```javascript
operator.getPercentOf(50,200)
//retorno: 100
```

### X é quanto por cento de Y
```javascript
operator.XIsHowPercentOf(fraçãoDevalor:number, valorTotal:number, options?:{
    allowPercentSymbol?: boolean
    // true: a função retornará string com simbolo porcentagem
    // false: função retornará float, sem o simbolo
})
```
Exemplo:
```javascript
operator.XIsHowPercentOf(50,200)
//retorno: 25% do tipo string
```

### Fatorial de um número
```javascript
operator.getFactorial(numero:number)
```
Exemplo:
```javascript
operator.getFactorial(100)
//retorno: 3628800 do tipo number
```

## Métodos para moedas
### Soma de valores monetários

```javascript
operator.CurrencySum(string|number[]<valores a serem somados>,options:{
    countryCurrency: "Sigla do país da moeda escolhida":string,
    currency: "Moeda do país",
    // Em caso de duvidas, as options são para o método toLocaleString, nativo do JS
})
```

Exemplo:
```javascript
operator.CurrencySum(['1.40', 3.54], {
    countryCurrency: "pt-BR",
    currency: "BRL"
})
// retorno: R$ 4,94
```