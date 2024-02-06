//our own module can call by "./" before the file name

const names = require('./module-1');
const hello = require('./module');
const twoprop = require('./alrenate');
require('./7-mind')
hello('sathish');
hello(names.sathish);
hello(names.Thammmaneni);
console.log(twoprop);