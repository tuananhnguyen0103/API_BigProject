var id = location.search.slice(1).split("&")[0].split("=")[1]
console.log(id);
var cart_items= []

$.ajax({
    method : 'get',
    url: 'https://localhost:44352/api/product/get-item/'+id,
    success: function(results){
        console.log(results)
        $('#product_name').html(results.name);
        $('#product_price').html(results.price);
        $('#product_description').html(results.description);
        $('#product_image').attr("src",results.image);
        $('#nameCategories').html(results.nameCategories);
        $.ajax({
            method : 'get',
            url: 'https://localhost:44352/api/product/get-item',
            success: function(results){
                console.log(results)
                            var  htmlTag = "";
                            
                            var i = 1;
                            results.forEach(element => {
                                i++;
                                if(i<=5 && element.id!=id){
                                    htmlTag+='\
                                    <div class="shop-item col-lg-4 col-md-6 col-sm-12">\
                                        <div class="inner-box">\
                                            <div class="image-box">\
                                                <figure class="image"><a href="shop-single.html"><img src="'+element.image+'" alt=""></a></figure>\
                                                <div class="btn-box add-cart" data-id="'+element.id+'" \
                                                data-name="'+element.name+'"\
                                                data-price="'+element.price+'"\
                                                data-image="'+element.image+' ><a href="shopping-cart.html">Add to cart</a></div>\
                                            </div>\
                                            <div class="lower-content">\
                                                <h4 class="name"><a href="shop-single.html">'+element.name+'</a></h4>\
                                                <div class="rating"><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star light"></span></div>\
                                                <div class="price">'+element.price+'</div>\
                                            </div>\
                                        </div>\
                                    </div>'
                                $('#div-have-product-relative').html(htmlTag);
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
        // document.getElementById("get-list-categories").value = results.idCategories;
        // $('#buttonAddToCart').click(function(){
        //     item= {
        //         id: parseInt(id),
        //         price:parseInt($('#product_price').html()),
        //         quantity:parseInt($('#product_quantity').val()),
        //         name:$('#product_name').html(),
        //         image:$('#product_image').attr("src"),
        //         show: 1, 
                
        //     }
        //     // cart_items.push(item);
            
        //     console.log(item)
            
        //     // Cart.addItem(item)
            


            
        //     // window.addEventListener('storage', window.addEventListener('storage', document.location.reload()))
        // })
        var a = (results.price)
        
        // $('#product_price').inputNumberFormat({ 'decimal': 0 });
    },
    error:function(results){
        console.log(results)
    }
    
})  
// Cart.initJQuery();

