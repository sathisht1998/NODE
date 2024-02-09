const {readFile,writeFile} = require('fs');

const utils =require('util');


const readFilePromise = utils.promisify(readFile);
const writeFilePromise = utils.promisify(writeFile);

const start = async () => {
    try {
        const third = await readFilePromise('./content/third.txt','utf8')
        const first = await readFilePromise('./content/subfloder/first.txt','utf8')

        await writeFilePromise(
            './content/result-async,await.txt',
            `function working  successful: ${first} ${third}`)
        console.log(first,third)
    } catch (error) {
        console.log(error)
        
    }
}

start();



//or
/*const {readFile,writeFile} = require('fs').promises




const starts = async () => {
    try {
        const third = await readFile('./content/third.txt','utf8')
        const first = await readFile('./content/subfloder/first.txt','utf8')

        await writeFile(
            './content/result-async,await.txt',
            `function working  successful: ${first} ${third}`)
        console.log(first,third)
    } catch (error) {
        console.log(error)
        
    }
}

starts();*/


