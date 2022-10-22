# Operator

Projeto utilizando typescript, onde diversas operações 
podem ser realizadas. Tutorial:

```javascript
import operator from './index'
// A partir daqui, diversos métodos são disponibilizados em operator
```

## Métodos

### Soma
```javascript
operator.sum([ 2,2,5,4 ])
```
O método de soma recebe um array
e retornará o resultado do tipo `number`

### Subtração
```javascript
operator.subtract([2,1,3,4])
```
O método de subtração recebe um array, retornando o valor final do tipo `number`

### Multiplicação
```javascript
operator.multiply([4,5,6,4])
```
o método de multiplicação recebe um array, retornando o valor do tipo `number`

### Divisão
```javascript
operator.divide([1,2,5,5])
```
O método de divisão recebe um array, retornando o valor do tipo `number`

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
### Potenciação
```javascript
operator.getPotentiation(value<number>, power<number>)
```

Exemplo:
```javascript
operator.getPotentiation(3,3)
// retorno: 18
```

## Métodos para moedas
> Vale ressaltar que qualquer valor nestes métodos aceitam string ou number, tanto "." quanto ","
### Soma de valores monetários

```javascript
operator.currencySum(string|number[]<valores a serem somados>,options:{
    countryCurrency: "Sigla do país da moeda escolhida":string,
    currency: "Moeda do país",
    // Em caso de duvidas, as options são para o método toLocaleString, nativo do JS
})
```

Exemplo:
```javascript
operator.currencySum(['1.40', 3.54], {
    countryCurrency: "pt-BR",
    currency: "BRL"
})
// retorno: R$ 4,94
```

### Subtração de valores monetários

```javascript
operator.currencySubtract(string|number[]<valores a serem subtraidos>,options:{
    countryCurrency: "Sigla do país da moeda escolhida":string,
    currency: "Moeda do país",
    // Em caso de duvidas, as options são para o método toLocaleString, nativo do JS
})
```

Exemplo:
```javascript
operator.currencySubtract(['3.50', 2], {
    countryCurrency: "pt-BR",
    currency: "BRL"
})
// retorno: R$ 1,50
```


### Multiplicação de valores monetários

```javascript
operator.currencyMultiply(string|number[]<valores a serem multiplicados>,options:{
    countryCurrency: "Sigla do país da moeda escolhida":string,
    currency: "Moeda do país",
    // Em caso de duvidas, as options são para o método toLocaleString, nativo do JS
})
```

Exemplo:
```javascript
operator.currencyMultiply(['1.50', 2], {
    countryCurrency: "pt-BR",
    currency: "BRL"
})
// retorno: R$ 3,00
```

### Divisão de valores monetários

```javascript
operator.currencyDivide(string|number[]<valores a serem multiplicados>,options:{
    countryCurrency: "Sigla do país da moeda escolhida":string,
    currency: "Moeda do país",
    // Em caso de duvidas, as options são para o método toLocaleString, nativo do JS
})
```

Exemplo:
```javascript
operator.currencyDivide(['3,00', 2], {
    countryCurrency: "pt-BR",
    currency: "BRL"
})
// retorno: R$ 1,50
```

### Converter String monetaria para Number

```javascript
operator.currencyToNumber(numbers< number|string[] >)
```

Exemplo:

```javascript
operator.currencyToNumber([2.30, '10,00','7,30', 7])
// retorno [2.30, 10.00, 7.30, 7]
```

### Converter numero para String monetaria

```javascript
operator.numberToCurrency(number< number[] >, options:{
    countryCurrency<string>: 'sigla do país cuja moeda deseja referenciar é utilizada',
    currency<string>: 'qual moeda quer usar' 
} )
//Para melhor entendimento, procure pelo método TolocaleString()
```

Exemplo:
```javascript
operator.numberToCurrency([2.10,9.4], options:{
    countryCurrency: 'pt-BR',
    currency: 'BRL' 
} )
// retorno ['R$ 2,10', 'R$ 9,40']
```

### Juros Simples

```javascript
operator.getSimpleInterest(capital<Number>, interestRate<Number>, time<Number>, options?:{
    countryCurrency: String,
    currency: String
})
```

Exemplo:
```javascript
operator.getSimpleInterest(100, 20, 3)
// retorno 60.00
```

### Juros Compostos

```javascript
operator.getSimpleInterest(capital<Number>, interestRate<Number>, time<Number>, options?:{
    countryCurrency: String,
    currency: String
})
```

Exemplo:
```javascript
operator.getCompundInterest(100, 20, 3)
// retorno 72.80
```
