const http = require('http');
const fs= require('fs');

const server= http.createServer((req,res)=>{
    const filepath= req.url.substr(1);
    console.log(filepath);
    fs.readFile(filepath,(err,data)=>{
        res.writeHead(200);
        res.write(data);
        res.end();    
    });
});

server.listen(3000);
