<h1>

    Operate.js

</h1>

<section>

<h2>

Quick Start

</h2

    first of all, install the package in your project:

   ```terminal
    npm install operate.js
   ```

</section>

<div>

Now you just need to import the package into the files:

```javascript

const operateJs = require('operatejs')

```

</div>


<h2>

Functions

</h2

<br></br>

<div>

<h3>
    sum
</h3>

<div>

```javascript
    operatejs.sum([ 2,2,5,4 ])
```

</div>

<h3>

    The method Accepts an array of numbers, returning a sum of these numbers

</h3>


</div>



<br></br>


<div>

<h3>
    subtract
</h3>

<div>

```javascript
    operatejs.subtract([ 2,2,5,4 ])
```

</div>

<h3>

    The method Accepts an array of numbers, returning a subtract of these numbers

</h3>


</div>

<br></br>


<div>

<h3>
    multiply
</h3>

<div>

```javascript
    operatejs.multiply([ 2,2,5,4 ])
```

</div>

<h3>

    The method Accepts an array of numbers, returning a multiply of these numbers

</h3>


</div>

<br></br>


<div>

<h3>
    divide
</h3>

<div>

```javascript
    operatejs.divide([ 2,2,5,4 ])
```

</div>

<h3>

    The method Accepts an array of numbers, returning a divide of these numbers

</h3>


</div>

<br></br>


<div>

<h3>
    getPercentOf
</h3>

<div>

```javascript
    operatejs.getPercentOf(percentage/*% */, totalValue/* 100% */)
```

</div>

<h3>

    The method Accepts a percent parameter, used to return the fraction of the total value parameter

</h3>


</div>

<br></br>

<h3>
    XIsHowPercentOf
</h3>

<div>

```javascript
    operatejs.XIsHowPercentOf(fractionOfvalue, totalValue, options:{
        allowPercentSymbol?: boolean
    })
    // return : X%
```

</div>

<h3>

    The method Accepts a fraction of total Value parameter, used to return the percentage of the total value parameter,
    options is an optional object, that accepts a boolean for "allowPercentSymbol"

</h3>


</div>

<br></br>


<h3>
    getFactorial
</h3>

<div>

```javascript
    operatejs.getFactorial(number)
    // return : X
```

</div>

<h3>

    The method Accepts a number, that will return your factorial

</h3>


</div>

<br></br>



<h3>
    getPotentiation
</h3>

<div>

```javascript
    operatejs.getPotentiation(number, power)
    // return : X
```

</div>

<h3>

    The method Accepts a number and the power, returnin thw value of "number ^ power"

</h3>


</div>

<br></br>

<h2>

Monetary functions

</h2

<br></br>

> All these methods accepts arrays with numbers and strings

<br></br>


<h3>
    currencySum
</h3>

<div>

```javascript
    operatejs.currencySum([n1, n2, n3, ...], options:{
        countryCurrency:string,
        currency:string,
        // In case of doubt, the options are for the toLocaleString method, native of JS
    })
    // return : X
```

</div>

</div>

<br></br>


<h3>
    currencySubtract
</h3>

<div>

```javascript
    operatejs.currencySubtract([n1, n2, n3, ...], options:{
        countryCurrency:string,
        currency:string,
        // In case of doubt, the options are for the toLocaleString method, native of JS
    })
    // return : X
```

</div>

</div>

<br></br>


<h3>
    currencyMultiply
</h3>

<div>

```javascript
    operatejs.currencyMultiply([n1, n2, n3, ...], options:{
        countryCurrency:string,
        currency:string,
        // In case of doubt, the options are for the toLocaleString method, native of JS
    })
    // return : X
```

</div>

</div>

<br></br>


<h3>
    currencyDivide
</h3>

<div>

```javascript
    operatejs.currencyDivide([n1, n2, n3, ...], options:{
        countryCurrency:string,
        currency:string,
        // In case of doubt, the options are for the toLocaleString method, native of JS
    })
    // return : X
```

</div>

</div>

<br></br>


<h3>
    numberToCurrency
</h3>

<div>

```javascript
    operatejs.numberToCurrency([n1, n2, n3, ...], options:{
        countryCurrency:string,
        currency:string,
        // In case of doubt, the options are for the toLocaleString method, native of JS
    })
    // return an array of strings with the monetary representation
```

</div>

</div>

<br></br>


<h3>
    currencyToNumber
</h3>

<div>

```javascript
    operatejs.currencyToNumber([n1, n2, n3, ...])
    // return an array of numbers
```

</div>

</div>

<br></br>


<h3>
    getSimpleInterest
</h3>

<div>

```javascript
    operatejs.getSimpleInterest(capital:Number, interestRate:Number, time:Number, options:{
        countryCurrency: String,
        currency: String
    })
    // return the simple interest, without the capital
```

</div>

</div>

<br></br>

<h3>
    getCompundInterest
</h3>

<div>

```javascript
    operatejs.getCompundInterest(capital:Number, interestRate:Number, time:Number, options:{
        countryCurrency: String,
        currency: String
    })
    // return the compound interest, without the capital
```

</div>

</div>
