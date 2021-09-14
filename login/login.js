

$(document).ready(function(){
    var xhr = new XMLHttpRequest();  
    
    $("form").submit(function(){
        console.log("javascript");
        let id= $(".id").val();
        let password=$(".password").val();
        console.log(id, password);
        console.log("click");  
        xhr.onreadystatechange=function(){          // status 값이 바뀔 때마다 여러 번 호출, 요청에 대한 콜백
            if(xhr.readyState === xhr.DONE){        // 요청이 완료되면
                console.log("status : ",xhr.status);
                if(xhr.status === 200 || xhr.status ===201){
                    console.log(xhr.responseText);
                }else{
                    console.error(xhr.responseText);
                }
            }
        }

        xhr.open('GET', `/api/login?id=${id}&password=${password}`); // 메소드와 주소 설정
        xhr.send();
    })
    
   
})