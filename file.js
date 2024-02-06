const {readFileSync,writeFileSync} = require('fs');

const third = readFileSync('./content/third.txt','utf8')

const first = readFileSync('./content/subfloder/first.txt','utf8')

console.log(third);

console.log(first);

writeFileSync('./content/result.txt',`here is the result : ${first},${third}`)