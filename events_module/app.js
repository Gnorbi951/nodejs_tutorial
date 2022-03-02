
const EventEmitter = require('events');
const emitter = new EventEmitter();


emitter.on('MessageLogged', arg => {
    console.log('MessageLogged listener called')
    console.log(arg)
})

// Raise event
emitter.emit('MessageLogged', {id: "1", url: "test"})