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
                    results.forEach(element => {
                        htmlTag+='<div class="col-sm-3 col-md-3 col-xs-6 paira-margin-top-1">\
                        <div class="product text-center">\
                            <div class="block-image position-rela" style="width: 26rem;height: 36rem;>\
                                <a href="#">\
                                    <div class="background-overlay"></div>\
                                    <img src="'+element.image+'" alt="" class="img-responsive" style="width: 26rem;height: 36rem;">\
                                </a>\
                            </div>\
                            <h1 class="font-size-16 paira-margin-top-4 margin-bottom-10"><a href="collection.html">'+element.name+'</a></h1>\
                            <span class="money font-size-16"><b>'+element.price+'</b></span>\
                            <div class="product-hover">\
                                <div class="paira-wish-compare-con wish-compare-view-cart paira-margin-top-4">\
                                    <a href="#paira-quick-view" class="paira-quick-view quick-view  btn color-scheme-2 font-size-18"><i class="fa fa-eye"></i></a>\
                                    <a href="#" class="product-cart-con margin-left-5  btn color-scheme-2 add-cart" data-id="'+element.id+'" \
                                    data-name="'+element.name+'"\
                                    data-price="'+element.price+'"\
                                    data-image="'+element.image+'"\  ><img src="images/cart-2.png" alt=""></a>\
                                </div>\
                            </div>\
                        </div>\
                    </div>'
                        $('#div-have-product-index').html(htmlTag);
                        
                    });
                },
                error: function(results){
                    console.log(results)
                }
            })
            
            $('#div-have-product').html(htmlTag);
            
        });
    },
    error: function(results){
        console.log(results)
    }
})

Cart.initJQuery();
