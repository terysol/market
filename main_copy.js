// main.js (server), nodejs
const http = require('http');
const fs = require('fs');
const mimeTypes = require('mime-types');
const mysql = require('mysql');
const port=3000;

const conn = mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"root1234",
    database:"gmarket"
})

conn.connect();

const sql={
    list:'select * from products order by seq desc',
    insert:'insert into products(name, price, img, click)value(?,?,?,?) ',
    read:'select * from products where id = ?'
    // update : 'update emp set name=?, emp_number=?, email=? where id=?',
    // delete : 'delete from emp where id=?'
}

const server = http.createServer((request, response) => {

    let path;

    switch(request.url) {
        case "/" :
            path = "./main_copy.html";
            break;
        case "/api/proudcts/best":
            console.log("api/products/best");
            // conn.query(sql.list,(err,data)=>{
            //     response.writeHead(200);
            //     response.end(data);
            // });
            response.writeHead(200);
            response.end("<h1>Hello World</h1>");
            break;
        default:
            path = `./${request.url.substr(1)}`;
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
        response.end(data);
    });
});

server.listen(port,()=>{
    console.log(`${port} waiting...`);
});


