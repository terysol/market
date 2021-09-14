var http = require('http');
var fs = require('fs');
 
var server = http.createServer();
server.on('request', doRequest);
server.listen(1234);
console.log('Server running!');
 
// 요청 처리
function doRequest(req, res) {
    var number = Math.floor(Math.random() * 3);
    fs.readFile('./hello.html', 'UTF-8', 
        function(err, data) {
            var title = ["페이지A", "페이지B", "페이지C"];
            var content = ["이것은 예제로 만든 것입니다.",
                "또 하나의 컨텐츠입니다.",
                "최후에 이용한 컨텐츠입니다."];
            var data2 = data.
                replace(/@title@/g, title[number]).
                replace(/@content@/g, content[number]);
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data2);
            res.end();
        });
}