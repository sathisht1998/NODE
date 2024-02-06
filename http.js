const http = require('http');

let server = http.createServer((req,res) => {

    if(req.url === '/'){
        res.end('this is home page')
        return;
    }if(req.url === '/about'){
        res.end('some about this page')
        return;
    }
    res.end(`
    <h1>server failed</h1>
    <p>please go back to home page</p>
    <a href ="/">back home </a>`)


    
    })
server.listen(3000)