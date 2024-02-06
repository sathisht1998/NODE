const {readFile , writeFile} = require('fs');

readFile('./content/third.txt','utf8',(err,result) =>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
    const first =result;
  
  
    readFile('./content/subfloder/second.txt','utf8',(err,result) => {
    if(err){
        console.log(err);
        return;
    }
const third = result;
writeFile('./content/subfloder/result-async.txt',`here is the result: ${first} , ${third}`,(err,result) => {
    if(err){
        console.log(err);
        return;
    }console.log(result);
})
  })
})