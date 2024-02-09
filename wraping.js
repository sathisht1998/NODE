const {readFile,writeFile} = require('fs');




const text= (path) => {
       return new Promise((resolve, reject) => {
        readFile(path,'utf8',(err,data) =>{
            if (err) {
                reject
                
            }else{
                resolve(data)
            }

        }) 
       })
}

text ('./content/third.txt')

.then((result)=> console.log(result))
.catch((err) => console.log(err))