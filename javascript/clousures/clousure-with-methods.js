function calc() {
    value = 0
    
    this.up = function() {
        return ++value
    }

    this.down = function() {
        return --value
    }
}

let t = new calc()

console.log(t.up())
console.log(t.up())
console.log(t.down())