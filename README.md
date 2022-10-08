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
operator.XIsHowPercentOf(fraçãoDevalor:number, valorTotal:number)
```
Exemplo:
```javascript
operator.XIsHowPercentOf(50,200)
//retorno: 25% do tipo string
```

