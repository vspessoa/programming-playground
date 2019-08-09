let name = "John";

function sayHi() {
  setTimeout(()=> {console.log("Hi com espera, " + name);  },3000)
  console.log("Hi, " + name);  
}

name = "Pete"; // (*)
sayHi(); // Pete
name = "Alterou"

