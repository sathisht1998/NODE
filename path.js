const path = require('path');

console.log(path.sep);


const filepath = path.join('/content','subfloder','test.txt')
console.log(filepath);

const base = path.basename(filepath)
console.log(base)