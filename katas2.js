// comece a criar a sua função add na linha abaixo
function add(num1, num2) {
    return num1 + num2;
}
//console.log(add(3, 5));

// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');

// comece a criar a sua função multiply na linha abaixo
function multiply(num1, num2) {
    let resultado = 0;
    for (let i = 1; i <= num2; i++){
        resultado = resultado + add(num1, 0)
    }    
    return resultado;
}
//console.log(multiply(4, 6));  

// descomente a linha seguinte para testar sua função
 console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');

// comece a criar a sua função power na linha abaixo
function power(x, n) {
    let resultado = 1;
    for (let i = 1; i <= n; i++){
        resultado = multiply(resultado, multiply(x, 1))
    }
    return resultado;
}
//console.log(power(3, 4)); 

// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');

// comece a criar a sua função factorial na linha abaixo
function factorial(n) {
    let resultado = 1;
    for (let i = 1; i <= n; i++){
        resultado = multiply(resultado, i)
    }    
    return resultado;
}
//console.log(factorial(5));

// descomente a linha seguinte para testar sua função
 console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');

// crie a função fibonacci
function fibonacci(numerofibonacci) {
    let resultado = 0;
    let anterior = 1;
    let atual = 0;
    for (let i = 1; i <= numerofibonacci; i++){
        resultado = add(anterior, atual);
        anterior = atual;
        atual = resultado; 
    }
    return resultado;
}
//console.log(fibonacci(7));

// descomente a linha seguinte para testar sua função
console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');