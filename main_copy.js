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
                if(err) console.log(err);
                else{
                    for(var i=0;i<data.lenght;i++){
                        response.writeHead(200,{'Content-Type':'text/html; charset=utf-8'}); 
                        response.write(`<li>
                                 <div class="box-image">
                                    <img src="img/${data[i].image}"/>
                                 </div>
                                 <div class="info">
                                     <div class="name">${data[i].name}</div>
                                     <div class="price">
                                         <span class="value">${data[i].price.toLocaleString()}</span>원
                                     </div>
                                 </div>
                             </li>`);
                        
                    }
                    //data.forEach(function(product) {
                        //response.write(html);
                               // ,{'Content-Type':'text/html'}
                         //response.write(`<h2>${data[0].name}Hello world</h2>`);
                    // })  // foreach 끝   
                    
                }   // else 끝
                response.end(); 
            });
            
            break;
        default:
            path = `./${request.url.substr(1)}`;
            break;
    }
    if(path !== undefined){
        fs.readFile(path,(error, data) => {
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
    }
});

server.listen(port,()=>{
    console.log(`${port} waiting...`);
});


