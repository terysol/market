

$(document).ready(function(){
    $("#button").click(function(){
        
        let id= encodeURIComponent($("#id").val());
        let password=encodeURIComponent($("#password").val());
        
        // encodeURIComponet vs encodeURI()
        // encoding ⇒ password에 get 방식일 때, &, =,? 가 들어 갔을 떼, encodeURIComponet, decodeURICompoent
        console.log(id, password);
        console.log("click");  
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange=function(){          // status 값이 바뀔 때마다 여러 번 호출, 요청에 대한 콜백
            if(xhr.readyState === xhr.DONE){        // 요청이 완료되면
                console.log("status : ",xhr.status);
                if(xhr.status === 200 || xhr.status ===201){
                    // xhr.responseText   string 객체
                    
                    const jsonData = JSON.parse(xhr.responseText);
                    console.log(jsonData.success);
                    if(jsonData.success) location.href="/";
                    else console.log("err");
                }else{
                    console.error(xhr.responseText);
                }
            }   
        }
        xhr.open('GET', `/api/login?id=${id}&password=${password}`); // 메소드와 주소 설정
        xhr.send();
    })    
    
})