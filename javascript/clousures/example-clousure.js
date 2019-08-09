escopoGlobal = {
  valor: 10,
  message: function() { return `Eu sou o Escopo Global. Meu valor é: ${this.valor} ` }
}

console.log('CLOUSURE COMPLETO')

var add = (function() {
  contador = 0;
  return function () { 
    console.log(escopoGlobal.message()); 
    this.contador += 1; 
    console.log(this.contador);
    return this.contador
  }
})();

add()
add()


// clousure simples
console.log('CLOUSURE SIMPLES')

function makeCounter() {
  let count = 0;

  return function() {
    return count++; // has access to the outer "count"
  };
}

let counter = makeCounter();
let counter2 = makeCounter();


console.log('counter 1: ' +counter()); // 0
console.log('counter 1: ' +counter()); // 1
console.log('counter 1: ' +counter()); // 2

console.log('counter 2: ' + counter2()); // 0
console.log('counter 2: ' + counter2()); // 1


/*
contar 
  O closure tem três cadeias de escopo:

  1) O seu próprio escopo;
  2) O escopo externo, tendo acesso as variáveis da função exterior;
  3) Acesso as variáveis globais.
A função interior tem acesso não somente as variáveis da função exterior, mas também aos parâmetros dela.
*/
