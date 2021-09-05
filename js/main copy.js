const products=[
    {
        name:'[키친아트]키친아트 후라이팬 1+1',
        image:'product1.jpeg',
        price:'14,900'
    },
    {
        name:'[베베숲]아기물티슈 프리미어 캡70매 20팩',
        image:'product2.jpeg',
        price:'27,900'
    },
    {
        name:'[웨스트우드]웨스트우드 가을오픈 자켓/티셔츠/팬츠 세일전',
        image:'product3.jpeg',
        price:'19,000'
    },
    {
        name:'[리챔]리챔 오리지널 200g 10캔',
        image:'product4.jpeg',
        price:'18,900'
    },
    {
        name:'[특등급] 당진해나루쌀 삼광미 10kg 2포 / 총20kg',
        image:'product6.jpeg',
        price:'67,900'
    }
];


function show(){
    let products=document.getElementById("bestProducts");
    let best_li=document.createElement("li");
    best_li.innerHTML=`<div class="box-image"><img src="img/${products[0]['image']}"></div>
                        <div class="name">${products[0]['name']}</div>
                        <div class="price"><span class="value">${products[0]['price']}s</span>원</div>`;
    products.appendChild(best_li);
}
show();

// $(document).ready(function() {
//     const products = [
//         {
//             name: "[키친아트]키친아트 후라이팬 1+1",
//             thumbnail: "product1.jpeg",
//             price: 14900
//         },
//         {
//             name: "[베베숲]아기물티슈 프리미어 캡70매 20팩",
//             thumbnail: "product2.jpeg",
//             price: 27900
//         },
//         {
//             name: "[웨스트우드]웨스트우드 가을오픈 자켓/티셔츠/팬츠 세일전",
//             thumbnail: "product3.jpeg",
//             price: 19000
//         },
//         {
//             name: "[리챔]리챔 오리지널 200g 10캔",
//             thumbnail: "product4.jpeg",
//             price: 18900
//         },
//         {
//             name: "[특등급] 당진해나루쌀 삼광미 10kg 2포 / 총20kg",
//             thumbnail: "product6.jpeg",
//             price: 67900
//         }
//     ];

//     $("#bestProducts").empty();

//     products.forEach(function(product) {
//         let html = `<li>
//             <div class="box-image">
//                 <img src="img/${product.thumbnail}"/>
//             </div>
//             <div class="info">
//                 <div class="name">${product.name}</div>
//                 <div class="price">
//                     <span class="value">${product.price.toLocaleString()}</span>원
//                 </div>
//             </div>
//         </li>`;

//         $("#bestProducts").append($(html));
//     });
// });