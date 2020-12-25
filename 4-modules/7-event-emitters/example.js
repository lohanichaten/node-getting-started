const EventEmitter = require('events');

// Streams are Event Emitters
// process.stdin, process.stdout

const myEmitter=new EventEmitter();

setImmediate(()=>{

});

myEmitter.on('myevent',()=>{
    console.log('TEST_EVENT was fired');
});

myEmitter.on('myevent',()=>{
    console.log('TEST_EVENT was fired');
});

myEmitter.on('myevent',()=>{
        console.log('TEST_EVENT was fired');
});

myEmitter.emit('myevent');
