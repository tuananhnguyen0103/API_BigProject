// Start -- script ở trang sản phẩm của admin
$.ajax({
    method : 'get',
    url: 'https://localhost:44352/api/product/get-item',
    success: function(results){
        console.log(results)
        var  htmlTag = "";
        results.forEach(element => {
            htmlTag+=''
            $.ajax({
                method : 'get',
                url: 'https://localhost:44352/api/product/get-item',
                success: function(results){
                    console.log(results)
                    var  htmlTag = "";
                    var i = 1;
                    results.forEach(element => {
                        i++;
                        if(i<=7){
                            htmlTag+='<div class="shop-item col-lg-4 col-md-6 col-sm-12">\
                        <div class="inner-box">\
                            <div class="image-box">\
                                <div class="sale-tag">sale!</div>\
                                <figure class="image"><a href="http://desktop-lgb0cv5:5500/cake/shop-single.html?id='+element.id+'"><img style="height: 17rem;" src="'+element.image+'" alt=""></a></figure>\
                                <div class="btn-box add-cart"  data-id="'+element.id+'" \
                                data-name="'+element.name+'"\
                                data-price="'+element.price+'"\
                                data-image="'+element.image+'"\><a>Add to cart</a></div>\
                            </div>\
                            <div class="lower-content clearfix">\
                                <h4 class="name"><a href="shop-single.html">'+element.name+'</a></h4>\
                                <h6 class="name"><a href="shop-single.html" style="color:red;">'+element.nameCategories+'</a></h6>\
                                <div class="price"><del></del>'+element.price+'</div>\
                            </div>\
                        </div>\
                    </div>'
                        $('#div-have-product-index').html(htmlTag);
                        }
                        else{

                        }
                        // window.addEventListener('storage', document.location.reload())
                    });
                },
                error: function(results){
                    console.log(results)
                }
            })
            
            // $('#div-have-product-index').html(htmlTag);
            
        });
    },
    error: function(results){
        console.log(results)
    }
})

// Cart.initJQuery();
