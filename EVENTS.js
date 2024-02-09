const eventemitter = require('events')

const myemitter = new eventemitter();

myemitter.on('response', ()=>{
    console.log('Event occured')
})
myemitter.emit('response');