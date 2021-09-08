const http = require('http');
const fs = require('fs');
const mimeTypes = require('mime-types');
const port=3000;


const server = http.createServer((request, response) => {
    console.log(request.url);

    let path;

    switch(request.url) {
        case "/" :
            path = "../main.html";
            break;
        default:
            path = request.url.substr(1);
            break;
    }

    fs.readFile(path, (error, data) => {
        if(error) {
            response.writeHead(404);
            response.end();
            return;
        }

        response.writeHead(200, {
            "Content-Type": mimeTypes.lookup(path)
        });
        console.log("mimetype : ",mimeTypes.lookup(path));
        response.end(data);
    });
});

server.listen(port,()=>{
    console.log(`${port} waiting...`);
});


