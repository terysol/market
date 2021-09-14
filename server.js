// main.js (server), nodejs
const http = require('http');
const fs = require('fs');
const mimeTypes = require('mime-types');
const mysql = require('mysql');
const port=8000;

const conn = mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"mirim2",
    database:"gmarket"
})

conn.connect();

const sql={
    list:'select * from products',
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
            conn.query(sql.list,(err,data)=>{
                
                for(let value in data){
                    
                    response.write(`<li>
                         <div class="box-image">
                             <img src="img/${data[value].image}"/>
                         </div>
                         <div class="info">
                             <div class="name">${data[value].name}</div>
                             <div class="price">
                                 <span class="value">${data[value].price.toLocaleString()}</span>원
                             </div>
                         </div>
                     </li>`);
                     
                     
                }
                
                response.end(); 
                
               /*
                response.writeHead(200,{'Content-Type':'application/json'});
                response.write(JSON.stringify(data),'utf-8');
                response.end();
                */
            });
            
            break;
        case "/login":
            path="./login/login.html";
            break;
        
        case "/api/login/:id/:password":
            let id= request.query[0];
            let password=request.query[1];
            console.log(id, password);
            response.write("<h1>hello World</h1>");
            response.end();
            break;
        default:
            path = `./${request.url.substr(1)}`;
            break;
    }
    if(path !== undefined){
        fs.readFile(path,'utf-8',(error, data) => {
            if(error) {
                response.writeHead(404);
                response.end();
                return;
            }
            if(path ==='main_copy.html'){
                fs.readFile("./query.html",'utf-8',(err,result)=>{
                    var data2=data.replace(/${bestProducts}/g,result);
                    response.writeHead(200, {"Content-Type": 'text/html'});
                    response.write(data2);
                })
            }
            
            response.writeHead(200, {
                "Content-Type": mimeTypes.lookup(path)
            });
            response.end(data);
        });
    }
});

server.listen(port,()=>{
    console.log(`${port} waiting...`);
});
