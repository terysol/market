// main.js (server), nodejs
const http = require('http');
const fs = require('fs');
const mimeTypes = require('mime-types');
const mysql = require('mysql');
const url = require('url');
const port=8000;

const conn = mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"root1234",
    database:"gmarket"
})

conn.connect();

const sql={
    list:'select * from products',
    insert:'insert into products(name, price, img, click)value(?,?,?,?) ',
    read:'select * from products where id = ?',
    user: 'select * from user'
    // update : 'update emp set name=?, emp_number=?, email=? where id=?',
    // delete : 'delete from emp where id=?'
}

const server = http.createServer((request, response) => {
    const urlParse= url.parse(request.url,true);         // url  parse 해주는 것
    let path;

    switch(urlParse.pathname) {
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
        
        case "/api/login":
            let id= urlParse.query.id;
            let password=urlParse.query.password;
            let isSave= urlParse.query.isSave;
            let success;

            conn.query(sql.user,(err,data)=>{
                data.forEach(element => {
                    success=element.id === id && element.password === password; 
                });
                response.writeHead(200,{"Content-Type": "application/json"});
                response.end(JSON.stringify({ "id":id, "password" : password, "success": success}));
            })
            if(isSave){
                if(success){
                    // 쿠키 만들기
                }
            }
            break;
        default:
            // 요청를 한번 출력해보면 파일의 경로(substr, substring 사용)이기 때문에 요청이 올 때 경에 있는 파일을 읽어서 보여주면 됨.
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
            // if(path ==='main_copy.html'){
            //     fs.readFile("./query.html",'utf-8',(err,result)=>{
            //         var data2=data.replace(/${bestProducts}/g,result);
            //         response.writeHead(200, {"Content-Type": 'text/html'});
            //         response.write(data2);
            //     })
            // }
            
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
