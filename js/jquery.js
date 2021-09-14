// const products=[
//     {
//         name:'[키친아트]키친아트 후라이팬 1+1',
//         image:'product1.jpeg',
//         price:'14,900'
//     },
//     {
//         name:'[베베숲]아기물티슈 프리미어 캡70매 20팩',
//         image:'product2.jpeg',
//         price:'27,900'
//     },
//     {
//         name:'[웨스트우드]웨스트우드 가을오픈 자켓/티셔츠/팬츠 세일전',
//         image:'product3.jpeg',
//         price:'19,000'
//     },
//     {
//         name:'[리챔]리챔 오리지널 200g 10캔',
//         image:'product4.jpeg',
//         price:'18,900'
//     },
//     {
//         name:'[특등급] 당진해나루쌀 삼광미 10kg 2포 / 총20kg',
//         image:'product6.jpeg',
//         price:'67,900'
//     }
// ];


// function show(){
//     let products=document.getElementById("bestProducts");
//     let best_li=document.createElement("li");
//     best_li.innerHTML=`<div class="box-image"><img src="img/${products[0]['image']}"></div>
//                         <div class="name">${products[0]['name']}</div>
//                         <div class="price"><span class="value">${products[0]['price']}s</span>원</div>`;
//     products.appendChild(best_li);
// }
// show();

// spa ()
$(document).ready(function() {
    var xhr = new XMLHttpRequest();
    console.log("callback");

    // status 값이 바뀔 때마다 여러번 호출된다. 
    xhr.onreadystatechange = function() { // 요청에 대한 콜백
        if (xhr.readyState === xhr.DONE) { // 요청이 완료되면
            console.log("status",xhr.status);
            if (xhr.status === 200 || xhr.status === 201) {
                // $("#bestProducts").empty();
                // $("#bestProducts").append($(xhr.responseText));
                console.log(xhr.responseText);      // 문자열을 받아 준다. 
                // undefined 이 나온 이유
                // let products=xhr.responseText;
                // let best_ul=document.getElementById("bestProducts");
                // let best_li=document.createElement("li");
                
                // for(var key in xhr.responseText){
                //     console.log(key, xhr.responseText[key]);
                // }

                // best_li.innerHTML=`<div class="box-image"><img src="img/${products[k]['image']}"></div>
                //                 <div class="name">${products[k]['name']}</div>
                //                 <div class="price"><span class="value">${products[k]['price']}s</span>원</div>`;
                // best_ul.appendChild(best_li);
                    
                
                

            } else {
                console.error(xhr.responseText);
            }
    }
    };
    
    xhr.open('GET', '/api/proudcts/best'); // 메소드와 주소 설정
    xhr.send();

    // const products = [
    //     {
    //         name: "[키친아트]키친아트 후라이팬 1+1",
    //         thumbnail: "product1.jpeg",
    //         price: 14900
    //     },
    //     {
    //         name: "[베베숲]아기물티슈 프리미어 캡70매 20팩",
    //         thumbnail: "product2.jpeg",
    //         price: 27900
    //     },
    //     {
    //         name: "[웨스트우드]웨스트우드 가을오픈 자켓/티셔츠/팬츠 세일전",
    //         thumbnail: "product3.jpeg",
    //         price: 19000
    //     },
    //     {
    //         name: "[리챔]리챔 오리지널 200g 10캔",
    //         thumbnail: "product4.jpeg",
    //         price: 18900
    //     },
    //     {
    //         name: "[특등급] 당진해나루쌀 삼광미 10kg 2포 / 총20kg",
    //         thumbnail: "product6.jpeg",
    //         price: 67900
    //     }
    // ];

    // // $() => querySelector, querySelectorAll 에 해당
    // $("#bestProducts").empty();

    // products.forEach(function(product) {
    //     let html = `<li>
    //         <div class="box-image">
    //             <img src="img/${product.thumbnail}"/>
    //         </div>
    //         <div class="info">
    //             <div class="name">${product.name}</div>
    //             <div class="price">
    //                 <span class="value">${product.price.toLocaleString()}</span>원
    //             </div>
    //         </div>
    //     </li>`;

    //     $("#bestProducts").append($(html));
    // });
});