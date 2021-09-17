// $.ajax({
//     url:"/api/proudcts/best",
//     method:"GET",
//     success:function(data){
//         $("#bestProducts").empty();
//         $("#bestProducts").append($(data));
//     },
//     error:function(err){
//         console.log(err);
//     }
// })

// 쿠키가 있는지 없는지
function isCookie(){
    return document.cookie.length!==0 ? true:false;
}

// 쿠키 생성 함수
function setCookie(name, value, day){
    var expire = new Date();
    expire.setDate(expire.getDate() + day);
    cookies = name + '=' + escape(value) + '; path=/ '; // 한글 깨짐을 막기위해 escape(cValue)를 합니다.
    if(typeof day != 'undefined') cookies += ';expires=' + expire.toGMTString() + ';';
    document.cookie = cookies;
}

function RequestLogin(id, password){
    $.ajax({
        url:`/api/login?id=${id}&password=${password}`,
        method:"GET",
        success:function(data){
            let _id=data.id;
            if(isCookie()){      // cookie가 있다면 
                location.href="/";
            }else{          // cookie가 없다면
                if(isSave){         // 아이디를 저장한다면
                    console.log(isSave);
                    if(data.success){
                        setCookie("user",_id,"1");
                        location.href="/";
                    }else{
                        console.log("false");
                    } 
                }else{      // 아이디를 저장 안한다면.
                    console.log(isSave);
                    if(data.success){
                        location.href="/";
                    }else{
                        console.log("false");
                    } 
                }
            }
        },
        error:function(request,statu,error){
            console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
        }
    })
}

function setting(){
    if(isCookie()){
        $('#isSave').prop('checked',true);
        $('#id').val(document.cookie.split("=")[1]);
        
        $('#ment_name').css('display','inline-block');
        $('#ment_name').text(document.cookie.split("=")[1]);
        $('#logout').css('display','inline-block');
        $('#greeting').css('display','inline-block');
    }
}

function login(){
    let id= encodeURIComponent($("#id").val());
    let password=encodeURIComponent($("#password").val());
    RequestLogin(id,password);
}

function isChecked(){
    $('#isSave').click(function(){
        if($('#isSave').is(":checked")){
            isSave=true;
        }else{
            setCookie("user",document.cookie.split("=")[1],-1);
            $("#id").val("");
            isSave=false;
        }
    })
}

$(document).ready(function(){
    let isSave=false;
    setting();
    isChecked();
   
    $("#button").click(function(){
        login();
    })

    $('#logout').click(function(){
        setCookie("user",document.cookie.split("=")[1],-1);
        $('#ment_name').text("");
        $('#logout').css('display','none');
        $('#greeting').css('display','none');
        location.href="/login";
    })
})
