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