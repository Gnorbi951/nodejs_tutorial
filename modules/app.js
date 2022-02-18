// bad practice, this is added to the global scope
var sayHello = function() {
    console.log('hello')
}

// globalThis.sayHello() // wont work

// every file is a module.
console.log(module)