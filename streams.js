const { Console } = require('console');
const {createReadStream} = require('fs');
const { Stream } = require('stream');

const stream = createReadStream('./content/big.txt','utf8');

stream.on('data', (result) => {
    console.log(result);
})


