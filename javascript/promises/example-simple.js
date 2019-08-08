/*
function printHello() {
  console.log("Hello")
  setTimeout(() =>{console.log('MIM ACHER')},3000)
}

const printFoo = function() {
  const message = `Dear friend, come to play with me in my new`
  console.log(message)
}

printHello()
printFoo();
*/

const niceGrades = true

//Promise
const newConsole = new Promise(
  (resolve, reject) => {
    if (niceGrades){
      const console = {
        brand: 'Nintendo',
        model: 'Switch',
        color: 'gray',
        game: 'Super Mario Odyssey'
      }
      setTimeout(() => { resolve(console) }, 3000);

    }else{
      const didntStudied = new Error ('I will not get a new console because my grades are bad')
      reject(didntStudied)
    }
  }
)

const playWithMe = console => {
  const message = `Dear friend, come to play with me in my new ${console.brand} ${console.model}`
  return Promise.resolve(message)
}
function printHello() {
  setTimeout(() =>{console.log('MIM ACHER')},3000)
}

const show = message =>{
  console.log(message)
}

const showGrades = function () {
  newConsole
    .then(playWithMe)
    .then(show)
    .catch(error => console.log(error.message))
}

showGrades()




printHello()