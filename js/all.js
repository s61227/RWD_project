$(document).ready(function(){
    $.ajax({
        url: "productList.json",
        type: "GET",
        success: function(Jdata) {
            console.log("Success");
            console.log(Jdata.products);
            var products = Jdata.products;
            
            for (var key in products) {
                var li = "";
                console.log(products[key].title_zh);
                li += '<li>'+
                     '<div class="likeBtn"><i class="fa fa-heart-o" aria-hidden="true"></i></div>';
                if (products[key].hot){
                    li += '<div class="ribbon ribbon-top-right"><span>熱銷美食</span></div>';
                }
                li +='<div class="pic">'+'<img src='+products[key].img_url+'></div>'+
                     '<h3>'+products[key].title_zh+'<br><span>'+products[key].title_en+'</span></h3>'+
                     '<p><i class="fa fa-usd" aria-hidden="true"></i>'+products[key].price+'</p>'+
                     '<div class="cartBtn"><i class="fa fa-shopping-cart" aria-hidden="true"></i>加入購物車</div>'+
                     '</li>';
                $(".products").append(li);          
                
            }
        },
        error: function(e) {
            console.log(e);
        }
    });
    
});