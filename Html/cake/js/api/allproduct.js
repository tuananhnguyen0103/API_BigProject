list_product = []
$.ajax({
    method : 'get',
    url: 'https://localhost:44352/api/product/get-item',
    success: function(results){
        console.log(results)
        var  htmlTag = "";
        var i = 1;
        results.forEach(element => {
            list_product.push(element);
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
            
            // window.addEventListener('storage', document.location.reload())
        });
    },
    error: function(results){
        console.log(results)
    }
})
$('.search-product-index-page').click(function(){
    var  htmlTag = "";
	var text_search = $('#search_product_input').val().toLowerCase();
	$('#div-have-product-index').html(htmlTag);
	list_product.forEach(element => {
		if(element.name.toLowerCase().search(text_search)!=-1){
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
	});
	// alert(text_search.search("hay"));
})
// Cart.initJQuery();
