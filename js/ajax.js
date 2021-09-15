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

$(document).ready(function(){
    $("#button").click(function(){
        let id= encodeURIComponent($("#id").val());
        let password=encodeURIComponent($("#password").val());
        $.ajax({
            url:`/api/login?id=${id}&password=${password}`,
            method:"GET",
            success:function(data){
                console.log("data",typeof(data));
                // const jsonParse = JSON.parse(data);
                if(data.success) location.href="/";
            },
            error:function(err){
                console.log(err);
            }
        })
    })
})
