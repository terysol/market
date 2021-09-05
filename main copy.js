const products=[
    {
        name:'[키친아트]키친아트 후라이팬 1+1',
        image:'img/product1.jpeg',
        price:'14,900'
    },
    {
        name:'[베베숲]아기물티슈 프리미어 캡70매 20팩',
        image:'img/product2.jpeg',
        price:'27,900'
    },
    {
        name:'[웨스트우드]웨스트우드 가을오픈 자켓/티셔츠/팬츠 세일전',
        image:'img/product3.jpeg',
        price:'19,000'
    },
    {
        name:'[리챔]리챔 오리지널 200g 10캔',
        image:'img/product4.jpeg',
        price:'18,900'
    },
    {
        name:'[특등급] 당진해나루쌀 삼광미 10kg 2포 / 총20kg',
        image:'img/product6.jpeg',
        price:'67,900'
    }
];


function show(){
    let products=document.getElementById("bestProduct");
    let best_li=document.createElement("li");
    best_li.innerHTML=` <div class="box-image"><img src="${products[0]['image']}"></div>
                        <div class="name">${products[0]['name']}</div>
                        <div class="price"><span class="value">${products[0]['price']}s</span>원</div>`;
    best_ul.appendChild(best_li);
}

